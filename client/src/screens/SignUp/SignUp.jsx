import { useState } from "react";
import { signUp, signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import "./SignUp.css";

const SignUp = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = (event) => {
    event.preventDefault();
    const { setUser } = props;

    signUp(form)
      .then(() => signIn(form))
      .then((user) => setUser(user))
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          email: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      });
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button type="submit" className="signup-submit">
          sign up
        </button>
      );
    }
  };

  const { email, username, password, passwordConfirmation } = form;

  return (
    <Layout>
      <div className="signup-form">
        <h2 className="signup-header">sign up</h2>
        <form className="signup-container" onSubmit={onSignUp}>
          <input
            required
            type="text"
            className="signup-username"
            name="username"
            value={username}
            placeholder="username"
            onChange={handleChange}
          />
          <input
            required
            type="email"
            className="signup-email"
            name="email"
            value={email}
            placeholder="email"
            onChange={handleChange}
          />
          <input
            required
            name="password"
            value={password}
            type="password"
            className="signup-password"
            placeholder="password"
            onChange={handleChange}
          />
          <input
            required
            name="passwordConfirmation"
            className="signup-password-confirmation"
            value={passwordConfirmation}
            type="password"
            placeholder="confirm password"
            onChange={handleChange}
          />
          {renderError()}
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
