"use client"

import Auth from "@/components/auth"
import { Button, Form, Input } from "antd"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { FaAngleLeft } from "react-icons/fa"

type FieldType = {
  email?: string
}

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("")

  const router = useRouter()
  return (
    <Auth>
      <Form>
        <div
          className="flex items-center mb-3 cursor-pointer"
          onClick={() => router.push("/auth/login")}
        >
          <FaAngleLeft />{" "}
          <p className="text-base font-semibold">Back to login</p>
        </div>
        <h1 className="text-2xl font-bold mb-2">Forgot Password?</h1>
        <p className="text-lg text-slate-500 mb-5">
          To reset your password, enter your e-mail address below
        </p>
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            size="large"
            className="mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            size="large"
            className="bg-blue-500 w-full font-semibold"
          >
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </Auth>
  )
}

export default ForgetPassword
