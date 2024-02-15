import React, { useState, useEffect, ReactNode } from "react"
import { Layout, Menu } from "antd"
import { useRouter, usePathname } from "next/navigation"
import Sidebar from "@/components/sidebar"
import Navbar from "@/components/navbar"
import { CiLaptop, CiLogout, CiSettings, CiUser } from "react-icons/ci"
import {
  BarChartOutlined,
  CalendarOutlined,
  CompressOutlined,
  HeatMapOutlined,
  HomeOutlined,
  WindowsOutlined,
} from "@ant-design/icons"
import {
  FaCalendar,
  FaChartArea,
  FaFolder,
  FaHome,
  FaMap,
  FaMapSigns,
  FaTable,
  FaWindows,
} from "react-icons/fa"
import { FaGear, FaLaptop } from "react-icons/fa6"
const { Content } = Layout

interface MenuProps {
  children: ReactNode
}

const MenuContent: React.FC<MenuProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const isCollapsed = localStorage.getItem("sidebarCollapsed")
    if (isCollapsed && isCollapsed === "true") {
      setCollapsed(true)
    }
  }, [])

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
    localStorage.setItem("sidebarCollapsed", String(!collapsed))
  }

  const handleLogout = () => {
    console.log("Logout")
    // Tambahkan logika logout di sini
  }

  const menuNavbar = (
    <Menu>
      <Menu.Item
        key="profile"
        icon={<CiUser />}
        onClick={() => router.push("/profile")}
      >
        Profile
      </Menu.Item>
      <Menu.Item key="setting" icon={<CiSettings />}>
        Settings
      </Menu.Item>
      <Menu.Item key="logout" icon={<CiLogout />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  )

  const menuItems = [
    {
      key: "/dashboard",
      icon: <FaHome />,
      title: "Dashboard",
    },
    {
      key: "examples",
      icon: <FaLaptop />,
      title: "Examples",
      options: [
        {
          key: "/pricing",
          title: "Pricing",
        },
        {
          key: "/auth/login",
          title: "Login",
        },
        {
          key: "/auth/register",
          title: "Register",
        },
        {
          key: "/profile",
          title: "Profile",
        },
      ],
    },
    {
      key: "/components",
      icon: <FaGear />,
      title: "Components",
      options: [
        {
          key: "/components/buttons",
          title: "Buttons",
        },
        {
          key: "/components/cards",
          title: "Card",
        },
        {
          key: "/components/grids",
          title: "Grids",
        },
        {
          key: "/components/notifications",
          title: "Notifications",
        },
        {
          key: "/components/icons",
          title: "Icons",
        },
        {
          key: "/components/typography",
          title: "Typography",
        },
      ],
    },
    {
      key: "/forms",
      icon: <FaFolder />,
      title: "Forms",
      options: [
        {
          key: "/forms/elements",
          title: "Elements",
        },
        {
          key: "/forms/components",
          title: "Components",
        },
        {
          key: "/forms/validation",
          title: "Validation",
        },
      ],
    },
    {
      key: "/tables",
      icon: <FaTable />,
      title: "Tables",
      options: [
        {
          key: "/tables/tables",
          title: "Tables",
        },
        {
          key: "/tables/sortable",
          title: "Sortable",
        },
        {
          key: "/tables/reacttables",
          title: "React Tables",
        },
      ],
    },
    {
      key: "/maps",
      icon: <FaMap />,
      title: "Maps",
      options: [
        {
          key: "/maps/googlemaps",
          title: "Google",
        },
        {
          key: "/maps/vectormaps",
          title: "Vector",
        },
      ],
    },
    {
      key: "/widgets",
      icon: <FaWindows />,
      title: "Widgets",
    },
    {
      key: "/charts",
      icon: <FaChartArea />,
      title: "Charts",
    },
    {
      key: "/calendar",
      icon: <FaCalendar />,
      title: "Calendar",
    },
  ]

  const handleMenuItemClick = (key: string) => {
    router.push(key)
  }

  return (
    <Layout className="h-screen w-full">
      <Navbar menuNavbar={menuNavbar} />
      <Layout>
        <Sidebar
          collapsed={collapsed}
          toggleSidebar={toggleSidebar}
          pathname={pathname}
          menuItems={menuItems}
          handleMenuItemClick={handleMenuItemClick}
        />
        <Content className="w-full h-full overflow-y-auto bg-blue-50">
          <main className="p-3">{children}</main>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MenuContent
