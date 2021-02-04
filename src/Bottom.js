import React from "react";
import "./Bottom.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function Bottom() {
  return (
    <div className="bottom">
      <HomeIcon />
      <SearchIcon />
      <NotificationsIcon />
      <MailOutlineIcon />
    </div>
  );
}

export default Bottom;
