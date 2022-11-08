import { SidebarItem } from "../../types/nav-item";
import { AiOutlineDashboard, AiOutlinePoweroff } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { SlBriefcase } from "react-icons/sl";

export const navData: Array<SidebarItem> = [
  {
    type: "Link",
    href: "/",
    icon: AiOutlineDashboard,
    label: "Dashboard",
  },
  {
    type: "Link",
    href: "/",
    icon: IoWalletOutline,
    label: "Accounts",
  },
  {
    type: "Link",
    href: "/",
    icon: SlBriefcase,
    label: "Transactions",
  },
];
