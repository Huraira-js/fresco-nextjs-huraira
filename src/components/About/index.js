import React from "react";
import classes from "./About.module.css";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Link from "next/link";
const About = () => {
  return (
    <div className={classes.mainAboutBody}>
      <div className={classes.bannerMint3}>
        <Image src="/images/mint3.png" alt="Mint image" fill />
      </div>
      <Container>
        <div className={classes.bannerHeadText}>
          <p className={classes.aboutFresco}>About Fresco</p>
          <p className={classes.aboutFrescoDesc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={classes.mainVegeDiv}>
          <div className={classes.vegeDiv2}>
            <div className={classes.vegeDivImg}>
              <Image src="/images/Mask group.png" alt="Mask group" fill />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href={"/"}>Read More</Link>
          </div>
          <div className={classes.vegeDiv}>
            <div className={classes.vegeDivImg}>
              <Image src="/images/Mask group2.png" alt="Mask group2" fill />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href={"/"}>Read More</Link>
          </div>
          <div className={classes.vegeDiv}>
            <div className={classes.vegeDivImg}>
              <Image src="/images/Mask group3.png" alt="Mask group3" fill />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href={"/"}>Read More</Link>
          </div>
          <div className={classes.vegeDiv2}>
            <div className={classes.vegeDivImg}>
              <Image src="/images/Mask group4.png" alt="Mask group4" fill />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href={"/"}>Read More</Link>
          </div>
        </div>
        <div className={classes.mainBGImg}>
          <Image src="/images/bg-item.png" alt="Mint image" fill />
        </div>
      </Container>
      <div className={classes.bannerMint4}>
        <Image src="/images/mint4.png" alt="Mint image" fill />
      </div>
    </div>
  );
};

export default About;
