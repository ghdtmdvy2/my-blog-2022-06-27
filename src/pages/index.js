import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>개비지를 통해 내가 만든 블로그이다.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/me.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
