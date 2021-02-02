import React, { useState, useEffect } from "react";
import ScrollchorItem from "./scrollchor-item";
import Scrollspy from "react-scrollspy";
import "./navigator.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


const Navigator = () => {
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseCollapse = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrolledDownEnough = bodyScrollTop > 75 ? true : false;
      setScrolledDownEnough(scrolledDownEnough);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledDownEnough]);

  const whiteBackground = scrolledDownEnough
    ? "white-background navbar-border"
    : "";
  const fontColor = scrolledDownEnough ? "blue-font" : "white-font";


  return (

    <Navbar className="text-info" color="auto" style={{ backgroundColor: 'black', padding: '0.5em' }} fixed={"top"} expand="md">
      <NavbarBrand href="https://www.minhdnguyen.com/"><img className='logo' style={{ width: 60, height: 60 }} alt='' src='https://res.cloudinary.com/djhte2ard/image/upload/c_thumb,w_200,g_face/v1603238705/logo_tfsahk.png'></img></NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)}>
        <i className={`fa fa-navicon ${fontColor}`} />
      </NavbarToggler>
      <Collapse isOpen={isOpen} className={`${fontColor}`} navbar>
        <Scrollspy
          items={["profile", "skill", "project", "blog", "contact"]}
          currentClassName="active"
          className={`${fontColor} ml-auto navbar-nav`}
          navbar
        >
          <NavItem onClick={handleCloseCollapse}>
            <ScrollchorItem to="#" className="nav-link">
              HOME
            </ScrollchorItem>
          </NavItem>

          <NavItem onClick={handleCloseCollapse}>
            <ScrollchorItem to="#profile" className="nav-link">
              PROFILE
            </ScrollchorItem>
          </NavItem>

          <NavItem onClick={handleCloseCollapse}>
            <ScrollchorItem to="#skill" className="nav-link">
              SKILL
            </ScrollchorItem>
          </NavItem>

          <NavItem onClick={handleCloseCollapse}>
            <ScrollchorItem to="#project" className="nav-link">
              PROJECT
            </ScrollchorItem>
          </NavItem>

          <NavItem onClick={handleCloseCollapse}>
            <ScrollchorItem to="#blog" className="nav-link">
              BLOG
            </ScrollchorItem>
          </NavItem>

          <NavItem onClick={handleCloseCollapse}>
            <ScrollchorItem to="#contact" className="nav-link">
              CONTACT
            </ScrollchorItem>
          </NavItem>
        </Scrollspy>
      </Collapse>
    </Navbar>

  );
};


export default Navigator;


