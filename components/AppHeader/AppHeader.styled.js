import styled from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #191B1D;
  position: fixed;
  width: 100%;
  z-index: 99;
  height: 70px;
  padding: 0 4rem;
  color: #ffffff;
  @media screen and (min-width: 52em) {
    display: none;
  }
  @media screen and (max-width: 52em) {
    padding: 0 22px;
    width: 100%;
  }
`;
const HamburgerContainer = styled.div`
  display: flex;
  cursor: pointer;
`;
const WebNavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  height: 70px;
  padding: 0 4rem;
  align-items: center;
  background: #191B1D;
  z-index: 99;
  @media screen and (max-width: 52em) {
    display: none;
  }
`;
const MainLinkContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 50px;
  color: #5A80B7;
`;
const NavLink = styled.div`
  display: flex;
  cursor: pointer;
  color: ${props => props.active ? '#5A80B7' : '#fff'}
`;
const NavBox = styled.div`
  display: flex;
  gap: 22px;
  background: #5A80B7;
  color: #ffffff;
  padding: .5rem 2rem;
  border-radius: 5px;
`;
export {
  NavBarContainer,
  HamburgerContainer,
  WebNavBarContainer,
  MainLinkContainer,
  NavLink,
  NavBox,
};
