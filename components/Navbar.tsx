import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="flex space-x-8 items-center">
        <Logo />
        <NavMenu />
      </div>
      <div className="flex">
        <div className="mr-8 nav-box">
          <Button variant={"ghost"}>Contact Sales</Button>
        </div>
        <div className="space-x-2 nav-box">
          <Button variant={"ghost"}>Login</Button>
          <Button className="bg-gradient-primary">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
