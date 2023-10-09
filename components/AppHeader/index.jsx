import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";

import MobileNav from "../MobileNav";
import Hamburger from "../../public/assets/hamburger.svg";

import {
  WebNavBarContainer,
  NavBarContainer,
  MainLinkContainer,
  NavLink,
  NavBox,
  HamburgerContainer,
} from "./AppHeader.styled";

const AppHeader = () => {
  const router = useRouter();
  console.log(router)

  const [showRightDrawer, setShowRightDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);

  return (
    <>
      <WebNavBarContainer>
        <Link href="/">
          <Image src='' alt="Logo" width={80} height={80} />
        </Link>

        <MainLinkContainer>
          <Link href="#" passHref>
            <NavLink>
              About 
              Team Pads
            </NavLink>
          </Link>
          <Link href="/contact-us" passHref>
            <NavLink>Contact Us</NavLink>
          </Link>
          <Link href="#" passHref>
            <NavBox>Enroll</NavBox>
          </Link>
        </MainLinkContainer>
      </WebNavBarContainer>

      <NavBarContainer>
        <Image width={90} height={50} src='' alt={"logo"} />

        <HamburgerContainer onClick={() => setShowRightDrawer(true)}>
          <Image width={40} height={30} src={Hamburger} alt={"logo"} />
        </HamburgerContainer>
        <MobileNav
          showRightDrawer={showRightDrawer}
          closeRightDrawer={() => setShowRightDrawer(false)}
        />
      </NavBarContainer>
    </>
  );
};

export default AppHeader;
