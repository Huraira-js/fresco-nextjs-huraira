"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./ContactUs.module.css";
import Image from "next/image";
import {
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaPhone,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa6";
import { Input } from "../Core/Input";
import PhoneNumberInput from "../Core/CustomPhoneInput";
import { TextArea } from "../Core/TextArea";
import { Button } from "../Core/Button";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [text, setText] = useState("");
  return (
    <div className={classes.mainContactUsDiv}>
      <Container>
        <div className={classes.headWrapper}>
          <div className={classes.ContactUsHeadingDiv}>
            <div className={classes.downloadMint2}>
              <Image src="/images/mint6.png" alt="Mint image" fill />
            </div>
            <div className={classes.downloadMint3}>
              <Image src="/images/mint7.png" alt="Mint image" fill />
            </div>
            <p>Contact Us</p>
          </div>
        </div>
        <div className={classes.emailCall}>
          <div className={classes.emailDiv}>
            <span>
              <FaEnvelope />
            </span>
            <div className={classes.emailTextDiv}>
              <p className={classes.emailBold}>Email US</p>
              <p>contact@gmail.com</p>
            </div>
          </div>
          <div className={classes.callDiv}>
            <span>
              <FaPhone />
            </span>
            <div className={classes.callTextDiv}>
              <p className={classes.callBold}>Call Us</p>
              <p>+00 (254) 789456</p>
            </div>
          </div>
        </div>
        <div className={classes.form}>
          <Container>
            <form>
              <Row>
                <Col md={6}>
                  <Input
                    type={"text"}
                    label={"First Name"}
                    placeholder={"First Name"}
                    value={firstName}
                    setter={setFirstName}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    type={"text"}
                    label={"Last Name"}
                    placeholder={"Last Name"}
                    value={lastName}
                    setter={setLastName}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Input
                    type={"email"}
                    label={"Email"}
                    placeholder={"Email"}
                    value={email}
                    setter={setEmail}
                  />
                </Col>
                <Col md={6}>
                  <PhoneNumberInput
                    label={"Phone"}
                    placeholder="Phone"
                    value={phone}
                    setter={setPhone}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <TextArea
                    label={"Message"}
                    placeholder={"Text Here..."}
                    value={text}
                    setter={setText}
                  />
                </Col>
              </Row>
              <div className={classes.btnDiv}>
                <Button label={"Submit"} background={"#A58962"} />
              </div>
            </form>
          </Container>
        </div>
        <div className={classes.socials}>
          <span>Our Socials:</span>
          <div className={classes.facebookIcon}>
            <span>
              <FaFacebook />
            </span>
          </div>
          <div className={classes.twitterIcon}>
            <span>
              <FaTwitter />
            </span>
          </div>
          <div className={classes.linkedInIcon}>
            <span>
              <FaLinkedin />
            </span>
          </div>
          <div className={classes.googleIcon}>
            <span>
              <FaGoogle />
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
