"use client"
import MenuContent from "@/components/menu"
import { Breadcrumb } from "antd"
import React from "react"

const Components = () => {
  return (
    <MenuContent>
      <Breadcrumb
        className="py-2 font-medium text-base"
        items={[{ title: "Forms" }, { title: "Form Component" }]}
      />
      <div>s</div>
    </MenuContent>
  )
}

export default Components
