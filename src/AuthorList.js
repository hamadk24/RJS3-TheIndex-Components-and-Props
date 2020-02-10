import React from "react";
import authors from "./data";

// Components
import Card from "./Card";

const AuthorList = () => {
  const authorcards = authors.map(author => <Card author={author} />);
  return (
    <div className="content col-10">
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorcards}</div>
      </div>
    </div>
  );
};

export default AuthorList;
