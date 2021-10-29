import { Avatar, IconButton, MenuItem, Menu } from "@material-ui/core";
import { Add, Apps, Menu as MenuIcon } from "@material-ui/icons";
import React, { useState } from "react";
import "./Navbar.css";

import CreateClass from "../class/CreateClass";


const Navbar = ({setCreatedClasses}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [createClassDialog, setCreateClassDialog] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleCreate = () => {
    handleClose();
    setCreateClassDialog(true);
  };


  return (
    <>
      <CreateClass
        createDialog={createClassDialog}
        setCreateDialog={setCreateClassDialog}
        setCreatedClasses = {setCreatedClasses}
      />
      <nav className="navbar">
        <div className="navbar__left">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img
            src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
            alt="Google Logo"
            className="navbar__logo"
          />{" "}
          <span>Classroom</span>
        </div>
        <div className="navbar__right">
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Add />
          </IconButton>
          <IconButton>
            <Apps />
          </IconButton>
          <IconButton>
            <Avatar src={"/static/images/avatar/1.jpg"} />
          </IconButton>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => handleClose()}
          >
            <MenuItem onClick={handleCreate}>Create Class</MenuItem>
            <MenuItem>Join Class</MenuItem>
          </Menu>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
