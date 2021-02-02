import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <h2>Widgets</h2>

      <div className="widgets_Input">
        <SearchIcon className="widgets_SearchIcon" />
        <input placeholder="Search Twitter" type="text"></input>
      </div>

      <div className="widgets_Container">
        <h2>What's Happening</h2>

        <TwitterTweetEmbed tweetId={"1353943857503870977"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="kioria3"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://kengicira.web.app/"}
          options={{ text: "Check out my portfolio", via: "kioria3" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
