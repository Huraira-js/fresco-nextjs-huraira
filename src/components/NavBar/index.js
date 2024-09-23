import React from "react";
import classes from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className={classes.navBody}>
      <div className={classes.imageHeader}>
        <Image
          src="/images/fresco---farmer-market-logo 1.png"
          alt="Description of the image"
          fill
          className={classes.image}
        />
      </div>
      <div className={classes.navLeavesImg}>
        <Image
          src="/images/mint 5.png"
          alt="Mint image"
          fill
          className={classes.image}
        />
      </div>
      <div className={classes.navRightItems}>
        <div className={classes.logSign}>
          <Link href={"/"}>Login</Link>
          <hr />
          <Link href={"/"}>Signup</Link>
        </div>
        <div className={classes.contactUsBtnDiv}>
          <button href={"/ContactUS"} className={classes.contactUsBtn}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
