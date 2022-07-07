import React from "react";
import { Link } from "react-router-dom";

interface Props {
  routeName: any;
  routeLink: any;
  onClick?: () => any;
  show?: boolean;
}

const NavbarItem: React.FC<Props> = (props) => (
  <Link
    style={{ lineHeight: "48px" }}
    key={props.routeName}
    to={props.routeLink}
    onClick={props.onClick}
  >
    {props.routeName}
  </Link>
);

export default NavbarItem;
