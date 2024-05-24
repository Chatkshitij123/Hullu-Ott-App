import React, { useState } from "react";
import {
  MdHome,
  MdTrendingUp,
  MdLiveTv,
  MdCollectionsBookmark,
  MdSearch,
  MdPerson,
} from "react-icons/md"; //md-material design
import "./css/Header.css";
import request from "../Request";
import { Dropdown, Input, Menu } from "antd"; // Make sure to import Menu
function Header({ setSelectedOption }) {
 const [open, setOpen] = useState(false);
  const onSearch = (value) => {
    let _value = String(value).replace(" ", "+");
    setSelectedOption(request.searchMovies + _value);
  };
  const menu = (
    <Menu>
    
      <Menu.Item>
      <Input.Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Menu.Item>
      </Menu>
  );
  
  return (
    <div className="header">
      <div className="header__icons">
      <div
          className="header_icon"
          onClick={() => {
            setSelectedOption(request.fetchTopRated);
          }}>
          <MdHome size={"30px"} />
          <p>Home</p>
        </div>
        <div className="header_icon" onClick={() => {
            setSelectedOption(request.fetchTrending);
          }}>
          <MdTrendingUp size={"30px"} />
          <p>Trending</p>
        </div>
        <div className="header_icon"
         onClick={() => {
          setSelectedOption(request.fetchAnimation);
        }}>
          <MdLiveTv size={"30px"} />
          <p>Verified</p>
        </div>
        <div className="header_icon">
          <MdCollectionsBookmark size={"30px"} />
          <p>Collections</p>
        </div>
        <div className="header_icon">
    <Dropdown
            overlay={menu}
            placement="bottomLeft"
            overlayStyle={{ background: "transparent" }}
            open={open}
            onVisibleChange={(visible) => setOpen(visible)}
            arrow={{ pointAtCenter: true }}
          >
             
             <div> {/* Wrap the MdSearch icon with a div */}
              <MdSearch size={"30px"} />
            </div>
           
          </Dropdown>
         
        </div>
        <div className="header_icon">
          <MdPerson size={"30px"} />
          <p>Account</p>
        </div>
      </div>

      <img src={process.env.PUBLIC_URL + "/assets/hulu.png"} alt="hulu" />
    </div>
  );
}

export default Header;
