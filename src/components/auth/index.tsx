import React from "react"
import { Card } from "antd"

interface AuthProps {
  children: React.ReactNode
}

const Auth: React.FC<AuthProps> = ({ children }) => {
  return (
    <main className="w-screen h-screen flex items-center justify-center px-3 bg-blue-50">
      <Card className="p-2 shadow-xl shadow-blue-100 w-full md:w-1/2 lg:w-1/3 fixed">
        {children}
      </Card>
    </main>
  )
}

export default Auth
