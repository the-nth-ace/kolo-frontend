import { IconType } from "react-icons/lib";
import Sidebar from "../components/Sidebar/index";

export type SidebarItem = {
  type: "Link";
  icon: IconType;
  href: string;
  label: string;
};
