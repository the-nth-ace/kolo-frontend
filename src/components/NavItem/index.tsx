import React from "react";
import { Button, Link } from "@chakra-ui/react";

interface INavItem {
  text: string;
  link: string;
}

const NavItem: React.FC<INavItem> = (props) => {
  return (
    <Link
      href={props.link}
      color="white"
      opacity="0.4"
      fontSize="16px"
      _hover={{
        opacity: "1",
        color: "white",
      }}
    >
      <Button variant="nav">{props.text}</Button>
    </Link>
  );
};

export default NavItem;
