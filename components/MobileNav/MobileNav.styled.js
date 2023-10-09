import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Typography,
  } from "@mui/material";
  import Drawer from "@mui/material/Drawer";
  import Link from "@mui/material/Link";
  import styled from "styled-components";
  // import { HeaderNavBtn } from "../header/header.styled";
  const StyledDrawer = styled(Drawer)`
    & .MuiPaper-root {
      width: 100%;
      height: 100%;
    }
  `;
  const StyledSideDrawer = styled.div`
    padding: 0;
  `;
  
  const CloseIconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color: black;
    margin: 1.5rem 1rem 1rem;
    & > .MuiSvgIcon-root {
      font-size: 2rem;
      cursor: pointer;
    }
  `;
  
  const SideNavLinkContainer = styled.div`
    padding: 1rem;
    margin-top: 1.43rem;
    @media screen and (max-width: 30rem) {
      padding: 0;
      margin: 0;
    }
  `;
  
  const SideNavLink = styled.a`
    display: block;
    margin: 0 1.5625rem 3.125rem;
    color: #363435;
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #5a80b7;
  `;
  
  const SideNavBtnLogin = styled(Button)`
    && {
      padding: 0.8rem 47px;
      font-weight: 500;
      font-size: 0.875rem;
      text-transform: none;
      margin: 0;
      background: #5a80b7;
      border-radius: 5px;
      color: #fff;
    }
  `;
  const SideNavBtnApply = styled(Button)`
    && {
      display: flex;
      background: #ab3356 !important;
      border-radius: 6px;
      padding: 0.8rem 47px;
      color: #ffffff;
      font-weight: 500;
      font-size: 0.875rem;
      text-transform: none;
      margin: 0;
    }
  `;
  
  const MobileAccordion = styled(Accordion)`
    && {
      padding: 0 0 2.1875rem;
      box-shadow: none;
      background: transparent;
      color: #363435;
      height: auto;
      > div {
        padding: 0;
      }
    }
  `;
  const SideNavBox = styled.div`
    && {
      display: flex;
      justify-content: space-around;
      width: 100%;
    }
  `;
  
  export {
    StyledDrawer,
    StyledSideDrawer,
    CloseIconContainer,
    SideNavLinkContainer,
    SideNavLink,
    SideNavBtnLogin,
    MobileAccordion,
    SideNavBox,
    SideNavBtnApply,
  };