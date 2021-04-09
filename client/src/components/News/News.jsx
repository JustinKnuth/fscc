import "./News.css"


export default function (props) {



  return (
    <div className="articles-container">
      
      <h4 className="article-title">{props.article.title}</h4>
      <div className={props.index % 2 === 0 ? "articles-1" : "articles-2"}>
        
        <img src={props.article.urlToImage} alt="news article" />
        <p>{props.article.description} <br />
        <a href={props.article.url}>read the article</a></p>
        
        {/* <h5>{props.article.url}read the article</h5> */}
      </div>

    </div>


  )
}