import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { FaReply, FaRetweet, FaHeart, FaEllipsisH } from "react-icons/fa";

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
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
      <span className="name">Your Name</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
}

const Time = () => <span className="time">3h ago</span>;
const ReplyButton = () => <FaReply className="reply-button" />;
const RetweetButton = () => <FaRetweet className="retweet-button" />;
const LikeButton = () => <FaHeart className="like-button" />;
const MoreOptionsButton = () => <FaEllipsisH className="more-options-button" />;

ReactDom.render(<Tweet />, document.getElementById("root"));
