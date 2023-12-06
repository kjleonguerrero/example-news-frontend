import axios from "axios";
import { useState, useEffect } from "react";
import { ArticlesIndex } from "./ArticlesIndex";

export function Content() {
  const [articles, setArticles] = useState([]);

  const handleArticlesIndex = () => {
    console.log("articles");
    axios.get("http://localhost:3000/articles.json").then((response) => {
      setArticles(response.data.articles);
      console.log(articles);
    });
  };

  useEffect(handleArticlesIndex, []);
  return (
    <main>
      <h1>Welcome to Bitcoin News!</h1>
      <ArticlesIndex articles={articles} />
    </main>
  );
}
