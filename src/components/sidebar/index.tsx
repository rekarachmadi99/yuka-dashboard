import React from "react"
import { Layout, Menu } from "antd"
import { usePathname } from "next/navigation"

const { Sider } = Layout
const { SubMenu } = Menu

type SidebarProps = {
  collapsed: boolean
  toggleSidebar: () => void
  pathname: string
  menuItems: any[]
  handleMenuItemClick: (key: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  toggleSidebar,
  pathname,
  menuItems,
  handleMenuItemClick,
}) => {
  return (
    <Sider
      className="shadow-lg shadow-blue-300 "
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={toggleSidebar}
    >
      <div className="h-full overflow-hidden hover:overflow-y-auto">
        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          className="text-sm text-slate-500"
        >
          {menuItems.map((item) =>
            item.options ? (
              <SubMenu key={item.key} icon={item.icon} title={item.title}>
                {item.options.map((option: any) => (
                  <Menu.Item
                    key={option.key}
                    onClick={() => handleMenuItemClick(option.key)}
                  >
                    {option.title}
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item
                key={item.key}
                icon={item.icon}
                onClick={() => handleMenuItemClick(item.key)}
              >
                {item.title}
              </Menu.Item>
            )
          )}
        </Menu>
      </div>
    </Sider>
  )
}

export default Sidebar
