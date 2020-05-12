import React from "react";
import styled from "styled-components";

const Credits = styled.div`
  font-size: 0.8rem;
  border-top: 2px solid #222;
  padding-top: 1rem;
  margin-top: 1rem;
`;

const Credit = styled.div`
  font-size: 0.8rem;
  text-align: center;
`;

export default function Footer() {
  return (
    <React.Fragment>
      <Credits>
        <Credit>
          <h4>Credits</h4>
        </Credit>
        <Credit>
          Thank you to{" "}
          <a href="https://github.com/wesbos/rona/" title="Wes Bos Rona Github project">
            Wes Bos
          </a>{" "}
          for the tutorial
        </Credit>
        <Credit>
          Stats provided by:{" "}
          <a href="https://covid19.mathdro.id/api/" title="Covid-19 api">
            @mathdroid
          </a>
        </Credit>
      </Credits>
    </React.Fragment>
  );
}
