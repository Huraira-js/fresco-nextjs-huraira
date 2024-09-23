import React from "react";
import classes from "./Banner.module.css";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { FaApple } from "react-icons/fa";

const Banner = () => {
  return (
    <div className={classes.mainBannerBody}>
      <div className={classes.bannerMint2}>
        <Image src="/images/mint 2.png" alt="Mint image" fill />
      </div>

      <div className={classes.bannerTomato}>
        <Image src="/images/icon-12 1.png" alt="Tomato image" fill />
      </div>
      <div className={classes.bannerLemon}>
        <Image src="/images/icon-7 1.png" alt="Lemon image" fill />
      </div>
      <Container>
        {/* <span>A Taste of Real Food</span> */}
        <div className={classes.content}>
          {" "}
          <div className={classes.refImage}>
            <div className={classes.bannerMint1}>
              <Image src="/images/mint 2.png" alt="Mint image" fill />
            </div>
            <div className={classes.bannerHeadText}>
              <span> A Taste of Real Food</span>
            </div>
            <p> Organic & Fresh</p>
          </div>
          <span className={classes.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s...
            <div className={classes.btns}>
              <button>
                <div className={classes.btnContentDiv1}>
                  <FaApple />
                  <div className={classes.btnTextContent}>
                    <p>Download On The</p>
                    <p>App Store</p>
                  </div>
                </div>
              </button>
              <button>
                <div className={classes.btnContentDiv1}>
                  <div className={classes.playImg}>
                    <Image src="/images/fi_300218.svg" alt="Mint image" fill />
                  </div>
                  <div className={classes.btnTextContent}>
                    <p>Get it on</p>
                    <p>Google Play</p>
                  </div>
                </div>
              </button>
            </div>
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
