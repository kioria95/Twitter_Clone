import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post_Avatar">
        <Avatar src={avatar} />
      </div>

      <div className="post_Body">
        <div className="post_Header">
          <div className="post_HeaderText">
            <h3>
              {displayName}
              <span className="post_Username">
                {verified && <VerifiedUserIcon className="post_Badge" />} @{" "}
                {username} 
              </span>
            </h3>
          </div>

          <div className="post_HeaderContent">
            <p>{text}</p>
          </div>

          <img className="post_Image" src={image} alt="" />
        </div>

        <div className="post_Footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
