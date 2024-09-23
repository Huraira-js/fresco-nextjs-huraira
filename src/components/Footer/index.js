import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import moment from "moment/moment";
import classes from "./Footer.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa6";
import { FaMapMarker, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import ShowMoreShowLessText from "../Core/ShowMoreShowLess";

const Footer = ({ mainWrapper }) => {
  const links = {
    quickLinks: [
      {
        label: "Home",
        value: "/",
      },
      {
        label: "About",
        value: "/about",
      },
      {
        label: "Service Providers",
        value: "/service-provider",
      },
      {
        label: "FAQs",
        value: "/faqs",
      },
      {
        label: "Contact",
        value: "/contact",
      },
    ],
    contactUs: [
      {
        value: "mailto:johndoe@gmail.com",
        label: "johndoe@gmail.com",
        icon: <FaEnvelope />,
      },
      { value: "tel:123456789", label: "123-456-789", icon: <FaPhoneAlt /> },
      {
        value: "#",
        label: "180 Montgomery St, Suite 650 San Francisco, CA 94104, USA",
        icon: <FaMapMarker />,
      },
    ],
    MyAccount: [
      {
        value: "/contact",
        label: "Contact Us",
      },
    ],
    socialLinks: [
      {
        label: "facebook",
        value: "https://www.facebook.com",
        icon: <FaFacebook />,
      },
      {
        label: "twitter",
        value: "https://www.twitter.com",
        icon: <FaTwitter />,
      },
      {
        label: "instagram",
        value: "https://www.instagram.com",
        icon: <FaLinkedin />,
      },
    ],
  };

  return (
    <>
      <div className={`${[classes.footerMain, mainWrapper].join(" ")}`}>
        <div className={classes.footerMint2}>
          <Image src="/images/mint4.png" alt="Mint image" fill />
        </div>
        <div className={classes.footer__wrapper}>
          <Container>
            <div className={classes.grid__wrapper}>
              <div className={classes.descriptionWrapper}>
                <div className={classes.logo__wrapper}>
                  <Image
                    src="/images/fresco---farmer-market-logo 1.png"
                    height={100}
                    width={217}
                    style={{ objectFit: "contain" }}
                    quality={100}
                  />
                </div>
                <p className={classes.desc}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className={classes.social__links}>
                <div className={classes.social__links__wrapper}>
                  <span>
                    <FaFacebook color="#FFFFFF" size={22} />
                  </span>
                  <span>
                    <FaTwitter color="#FFFFFF" size={22} />
                  </span>
                  <span>
                    <FaLinkedin color="#FFFFFF" size={22} />
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className={classes.bottom__wrapper}>
            <p>&copy; {moment().format("YYYY")}, All Rights Reserved.</p>
            <div className={classes.bottom__links}>
              <Link href="/terms-and-conditions">Terms & Condition</Link>
              <Link href="/privacy-policy">Privacy Policy </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
