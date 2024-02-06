import React from "react";
import Article from "./Article";

export default function ArticleList(props) {
  const { posts } = props;

  return (
    <main>
      {posts.map((post) => {
        return (
          <Article
            {...{
              title: post.title,
              date: post.date,
              preview: post.preview,
            }}
            key={post.id}
          />
        );
      })}
    </main>
  );
}
