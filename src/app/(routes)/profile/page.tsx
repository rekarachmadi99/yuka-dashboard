"use client"
import MenuContent from "@/components/menu"
import { Breadcrumb, Card } from "antd"
import React from "react"

const Profile = () => {
  return (
    <MenuContent>
      <Breadcrumb
        className="py-2 font-medium text-base"
        items={[{ title: "Examples" }, { title: "Profile" }]}
      />
      <div>
        <Card></Card>
      </div>
    </MenuContent>
  )
}

export default Profile
