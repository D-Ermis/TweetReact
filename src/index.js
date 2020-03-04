import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FaReply, FaRetweet, FaHeart, FaEllipsisH } from "react-icons/fa";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
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

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function Author({ author }) {
  return (
    <span className="author">
      <span className="name">{author.name}</span>
      <span className="handle">@{author.handle}</span>
    </span>
  );
}

const Time = ({ time }) => <span className="time">{time}</span>;
const ReplyButton = () => <FaReply className="reply-button" />;
const RetweetButton = () => <FaRetweet className="retweet-button" />;
const LikeButton = () => <FaHeart className="like-button" />;
const MoreOptionsButton = () => <FaEllipsisH className="more-options-button" />;

const testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37"
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
