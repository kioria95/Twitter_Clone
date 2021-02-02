import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Kenneth Kioria",
      username: "kioria3",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1341032756978053120/C7ysdPy5_400x400.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="TweetBox">
      <form>
        <div className="TweetBox_Input">
          <Avatar src="https://pbs.twimg.com/profile_images/1341032756978053120/C7ysdPy5_400x400.jpg" />

          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's Happening?"
            type="text"
          ></input>
        </div>

        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          placeholder="Optional: Add Image URL"
          className="TweetBox_TweetImageUrl"
        ></input>

        <Button
          className="TweetBox_TweetButton"
          onClick={sendTweet}
          type="submit"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
