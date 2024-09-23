import React, { useState } from "react";
import classes from "./Faq.module.css";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle the clicked question
  };

  const questions = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ];

  return (
    <Container>
      <Row className={classes.mainFaqDiv}>
        <Col>
          <div className={classes.faq}>
            <p className={classes.faqHeading}>Frequently Asked Questions</p>
            <p className={classes.faqDesc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s...
            </p>
            {questions.map((question, index) => (
              <div className={classes.questions} key={index}>
                <div className={classes.q1} onClick={() => toggleAnswer(index)}>
                  <p>
                    <strong>Q: </strong> {question}
                  </p>
                  <p>
                    <strong>{openIndex === index ? "-" : "+"}</strong>
                  </p>
                </div>
                {openIndex === index && (
                  <p className={classes.answer}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                )}
              </div>
            ))}
          </div>
        </Col>
        <Col>
          <div className={classes.freshVegeContainer}>
            <div className={classes.freshVege}>
              <Image src="/images/fresh-vege.png" alt="Mint image" fill />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
