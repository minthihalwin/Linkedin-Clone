import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZCUyMGNvbG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("typescript")}
        {recentItem("Programming")}
        {recentItem("Software Engineering")}
        {recentItem("RubyonRails")}
      </div>
    </div>
  );
}

export default Sidebar;
