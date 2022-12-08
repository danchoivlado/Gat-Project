import * as React from "react";
import BigCard from "../components/BigCard";
import Layout from "../components/layout";
import { Container, Row, Col } from "react-bootstrap";
import cardImage from "../images/womenImage.png";
import calendar from "../images/calendar.png";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { useStaticQuery, graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const womenImage = getImage(data.file.childrenImageSharp[0]);
  const { buttonText, cardDescription, cardHeadingInfo, cardTitle } =
    data.allPseudoCmsCsv.nodes[0];

  return (
    <Layout>
      <Container>
        <Row>
          <Col md={4}>
            <BigCard
              cardHeadingInfo={cardHeadingInfo}
              cardImage={womenImage}
              cardTitle={cardTitle}
              cardDescription={cardDescription}
              calendarImage={calendar}
              buttonText={buttonText}
            />
          </Col>
          <Col md={4}>
            <BigCard
              cardHeadingInfo={cardHeadingInfo}
              cardImage={womenImage}
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

export const query = graphql`
  query {
    allPseudoCmsCsv {
      nodes {
        buttonText
        cardDescription
        cardHeadingInfo
        cardTitle
      }
    }

    file(relativePath: { eq: "womenImage.png" }) {
      childrenImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
