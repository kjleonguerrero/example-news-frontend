export function ArticlesIndex(props) {
  return (
    <>
      <h1> ALL ARTICLES </h1>
      {props.articles.map((article, i) => (
        <div key={"article_" + i}>
          {/* <img src="{article.urlToImage}" /> */}
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{article.description}</p>
        </div>
      ))}
    </>
  );
}
