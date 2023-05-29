import React from "react";
import "./Navbar.css";
import {
  FiSearch,
  FiUser,
  FiPlus,
  FiHome,
  FiMessageCircle,
  FiHeart,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <div className="navbar">
        <Link to={"/"}><img src={props.logo} width="100px" alt="OLX-LOGO" /></Link>
        <ul className="collections">
          {props.links.map((item, id) => (
            <li key={id} className="item">
              {item.text}
            </li>
          ))}
          <li className="button">Подать объявление</li>
        </ul>
      </div>

      <div className="section__search">
        <div className="search">
          <input type="search" name="" id="" placeholder="Что ищете?" />
          <button type="button">
            <FiSearch />
          </button>
        </div>
      </div>
      <div className="subnavbar">
        <div className="bottom__navbar">
          <ul className="collections">
            <li className="item">
              <FiHome />
              Bosh sahifa
            </li>
            <li className="item">
              <FiHeart />
              Sevimli
            </li>
            <li className="item">
              <FiPlus />
              E'lon qo'shish
            </li>
            <li className="item">
              <FiMessageCircle />
              Xabarlar
            </li>
            <li className="item">
              <FiUser />
              Account
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
