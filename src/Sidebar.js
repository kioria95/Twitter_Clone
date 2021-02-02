import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar_TwitterIcon" />

      <SidebarOptions active Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={SearchIcon} text="Search" />
      <SidebarOptions Icon={NotificationsIcon} text="Notifications" />
      <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
      <SidebarOptions Icon={BookmarkIcon} text="Bookmarks" />
      <SidebarOptions Icon={ListAltIcon} text="Lists" />
      <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
      <SidebarOptions Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" className="sidebar_TweetButton" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
