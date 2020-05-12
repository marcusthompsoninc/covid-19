import React from "react";
import { createGlobalStyle } from "styled-components";
import StatsImage from "../components/StatsImage";
import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelector";
import Footer from "../components/Footer";

const GlobalStyle = createGlobalStyle`

* { margin: 0; padding:0 }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1,h2,h3 {
      margin:1rem 0;
      @media (max-width: 768px) {
        text-align:center
      }
  }

  .wrapper { padding:1rem; }

  .countrySelector {
      text-align:center;
      margin: 0 auto;
  }

  .countrySelector select {
      margin:1rem 0;
      padding:0.5rem;
      border-radius:0.5rem;
      width:100%;
  }

  .globalStatsImg {
      width:100%;
      @media (max-width:768px) {
          display:none
      }
  }

  .globalStatsImg + div {
      @media (min-width:769px) {
          display:none;
      }
  }
}

`;

export default function IndexPage() {
  return (
    <div className="wrapper">
      <GlobalStyle />
      <h1>Covid-19 Global Stats</h1>
      <StatsImage url="https://covid19.mathdro.id/api/og"></StatsImage>
      <Stats className="globalStats" url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
      <Footer></Footer>
    </div>
  );
}
