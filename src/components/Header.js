import React from "react";
import { Link } from "react-router-dom";

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList
} from "baseui/header-navigation";

import { Avatar } from "baseui/avatar";

const Header = ({ history }) => {
  return (
    <HeaderNavigation>
      <NavigationList $align={ALIGN.left}>
        <NavigationItem>
          <Link to="/">
            <Avatar name="PG Manager" size="scale900" src="" />
          </Link>
        </NavigationItem>
      </NavigationList>
      {/* <NavigationList align={ALIGN.center} /> */}
      {/* <NavigationList align={ALIGN.right}>
        <NavigationItem />
      </NavigationList> */}
    </HeaderNavigation>
  );
};
export default Header;
