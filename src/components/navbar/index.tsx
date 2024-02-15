import React from "react"
import { Avatar, Dropdown, Layout, Menu } from "antd"
import { FaAngleDown } from "react-icons/fa6"

const { Header } = Layout

type NavbarProps = {
  menuNavbar: any
}

const Navbar: React.FC<NavbarProps> = ({ menuNavbar }) => {
  return (
    <Header className="bg-white shadow-2xl shadow-slate-950">
      <div className="flex justify-between items-center h-full px-4 ">
        <div className="text-lg font-bold text-blue-900">Yuka Dashboard</div>
        <Dropdown overlay={menuNavbar} className="space-x-2">
          <div className="flex items-center cursor-pointer">
            <Avatar />
            <span className="text-sm font-medium text-slate-500 hover:text-slate-400">
              Reka Rachmadi A
            </span>
          </div>
        </Dropdown>
      </div>
    </Header>
  )
}

export default Navbar
