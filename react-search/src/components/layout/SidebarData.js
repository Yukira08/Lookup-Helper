import React from "react";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Tutorials",
    icon: <RiIcons.RiArticleLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Introduction to Information Literacy",
        path: "/tutorials/t0",
      },
      {
        title: "Identifying your information needs",
        path: "/tutorials/t1",
      },
      {
        title: "Preliminary Searching",
        path: "/tutorials/t2",
      },
      {
        title: "Types of sources and their roles",
        path: "/tutorials/t3",
      },
      {
        title: "Evaluating the reliability of sources",
        path: "/tutorials/t4",
      }
    ],
  },
  {
    title: "Resources",
    icon: <RiIcons.RiNewspaperLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Databases",
        path: "/resources/databases",
        icon : <RiIcons.RiDatabase2Line/>
      },
      {
        title: "Tools",
        path: "/resources/tools",
        icon :<RiIcons.RiToolsFill/>
      }
    ],
  },
  {
    title : "Search Paper",
    path : "/searchpaper",
    icon : <RiIcons.RiSearchLine />,
  }
];
