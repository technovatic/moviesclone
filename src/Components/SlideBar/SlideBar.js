import React from "react";
import "./SlideBar.css";
import HomeMaxIcon from "@mui/icons-material/HomeMax";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import QueueIcon from "@mui/icons-material/Queue";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShopIcon from "@mui/icons-material/Shop";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SideItem from "./SideItems/SideItem";

function SlideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="logo"
          />
        </div>
        <div className="side__box">
          <div className="box__one">
            <span className="heading">Menu</span>
            <SideItem Icon={HomeMaxIcon} Name="Home" active />
            <SideItem Icon={FavoriteBorderIcon} Name="Favorite" />
            <SideItem Icon={ShopIcon} Name="Purchase" />
            <SideItem Icon={AccessTimeIcon} Name="Reminder" />
          </div>
          <div className="box__two">
            <span className="heading">Others</span>
            <SideItem Icon={QueueIcon} Name="Playlist" />
            <SideItem Icon={PlayCircleOutlineIcon} Name="Live" />
            <SideItem Icon={BookmarkBorderIcon} Name="Bookmark" />
            <SideItem Icon={SettingsIcon} Name="Setting" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideBar;
