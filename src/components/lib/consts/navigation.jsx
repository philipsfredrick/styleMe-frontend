import {
  HiOutlineViewGrid,
  HiOutlineCog,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";
import { MdDryCleaning, MdFeedback } from "react-icons/md";
import { BiCloset } from "react-icons/bi";
import { FcGallery } from "react-icons/fc";
import { AiOutlineShop } from "react-icons/ai";
import { RiInboxArchiveFill } from "react-icons/ri";
import { GiLoveHowl } from "react-icons/gi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/home",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "wardrobe",
    label: "Wardrobe",
    path: "/home/wardrobe",
    icon: <BiCloset />,
  },
  {
    key: "gallery",
    label: "Gallery",
    path: "/home/gallery",
    icon: <FcGallery />,
  },
  {
    key: "marketplace",
    label: "Marketplace",
    path: "/home/marketplace",
    icon: <AiOutlineShop />,
  },
  {
    key: "drycleaning",
    label: "DryCleaning",
    path: "/home/drycleaning",
    icon: <MdDryCleaning />,
  },
  {
    key: "preloved",
    label: "Preloved",
    path: "/home/preloved",
    icon: <GiLoveHowl />,
  },
  {
    key: "feed",
    label: "Feed",
    path: "/home/feed",
    icon: <MdFeedback />,
  },
  {
    key: "inbox",
    label: "Inbox",
    path: "/home/inbox",
    icon: <RiInboxArchiveFill />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/home/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/home/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
