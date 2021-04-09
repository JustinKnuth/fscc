import "./News.css"


export default function (props) {



  return (
    <div className="articles">
      <h4>{props.article.title}</h4>
      <img src={props.article.urlToImage} alt="" />
      <p>{props.article.description}</p>
    </div>


  )
}