import React from "react";
import Image from "next/image";

import {
  FooterContainer,
  ContentContainer,
  CopyrightContainer,
  Content,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <Content>
          <div>
            <Image src='' width={70} height={70} alt="a" />
          </div>
          <div>
            <h3>Head Office:</h3>
            <p>
              4, Birrel Avenue,
              <br />
              Opposite Magistrate Court, <br />
              Sabo, Yaba, <br />
              Lagos.
            </p>
          </div>
        </Content>
        <Content>
          <div>
            <p style={{color: '#5a80b7', fontWeight: '700'}}>Phone Number: </p>
            <p>+234 803 338 7492</p>
          </div>
          <div>
            <h3>Branch Office:</h3>
            <p>
              2, Ondo Close,
              <br />
              Off Odolowu Street, <br />
              Ijesha, Surulere, <br />
              Lagos.
            </p>
          </div>
        </Content>
      </ContentContainer>

      <CopyrightContainer>
        <p>Copyright @PSA Educational, 2023</p>
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
