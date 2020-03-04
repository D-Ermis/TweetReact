import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author />
        <Message />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar"
    />
  );
}

function Message() {
  return <div className="message">This is less than 140 characters.</div>;
}
function Author() {
  return (
    <span className="author">
      <span className="name">Your Name</span>{" "}
      <span className="handle">@yourhandle</span>
    </span>
  );
}

ReactDom.render(<Tweet />, document.getElementById("root"));
