import React from "react";
import classes from "./Download.module.css";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { FaApple } from "react-icons/fa6";
const Download = () => {
  return (
    <div className={classes.downloadMainDiv}>
      <Container>
        <Row>
          <Col md={6}>
            <div className={classes.phoneImgDiv}>
              <div className={classes.downloadMint2}>
                <Image src="/images/mint3.png" alt="Mint image" fill />
              </div>
              <Image src="/images/phones.png" alt="Mint image" fill />
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex flex-column h-100">
              <div className={classes.downloadSection}>
                <div className={classes.textDiv}>
                  <p className={classes.downloadHeading}>Download Our App</p>
                  <p className={classes.DownloadText}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
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
                        <Image
                          src="/images/fi_300218.svg"
                          alt="Mint image"
                          fill
                        />
                      </div>
                      <div className={classes.btnTextContent}>
                        <p>Get it on</p>
                        <p>Google Play</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Download;
