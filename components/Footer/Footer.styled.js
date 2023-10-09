import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  color: #ffffff;
  background: #191b1d;
  @media screen and (max-width: 52em) {
    padding: 40px 16px;
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    margin: 0;
  }

  @media screen and (max-width: 52em){
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    margin: 0;
    line-height: 20px;
    > h3 {
      font-weight: 700;
      font-size: 16px;
      margin: 0;
      color: #5a80b7;
    }
  }
`;

const CopyrightContainer = styled.div`
  text-align: center;
`;

export { FooterContainer, ContentContainer, CopyrightContainer, Content };
