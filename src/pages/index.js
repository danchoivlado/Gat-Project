import * as React from "react";
import BigCard from "../components/BigCard";
import Layout from "../components/layout";
import { Container, Row, Col } from "react-bootstrap";
import cardImage from "../images/womenImage.png";
import calendar from "../images/calendar.png";

import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
  const {
    allPseudoCmsCsv: { nodes },
  } = useStaticQuery(graphql`
    query {
      allPseudoCmsCsv {
        nodes {
          buttonText
          cardDescription
          cardHeadingInfo
          cardTitle
        }
      }
    }
  `);

  const { buttonText, cardDescription, cardHeadingInfo, cardTitle } = nodes[0];
  return (
    <Layout>
      <Container>
        <Row>
          <Col md={6}>
            <BigCard
              cardHeadingInfo={cardHeadingInfo}
              cardImage={cardImage}
              cardTitle={cardTitle}
              cardDescription={cardDescription}
              calendarImage={calendar}
              buttonText={buttonText}
            />
          </Col>
          <Col md={6}>
            <BigCard
              cardHeadingInfo={cardHeadingInfo}
              cardImage={cardImage}
              cardTitle={cardTitle}
              cardDescription={cardDescription}
              calendarImage={calendar}
              buttonText={buttonText}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
