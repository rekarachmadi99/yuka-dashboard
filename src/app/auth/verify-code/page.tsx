"use client"

import Auth from "@/components/auth"
import { Button, Form, Input } from "antd"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { FaAngleLeft } from "react-icons/fa"

type FieldType = {
  code?: string
}

const VerifyCode: React.FC = () => {
  const [code, setCode] = useState<string>("")

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
        <h1 className="text-2xl font-bold mb-2">Verify Code</h1>
        <p className="text-lg text-slate-500 mb-3">
          An authentication code has been sent to your email.
        </p>
        <Form.Item<FieldType>
          name="code"
          className="mb-1"
          rules={[{ required: true, message: "Please input your code!" }]}
        >
          <Input.Password
            size="large"
            className="mt-2"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter Code"
          />
        </Form.Item>
        <div
          className="cursor-pointer font-medium mb-4"
          onClick={() => console.log(1)}
        >
          <p>
            Didn't receive a code? <text className="text-red-300">Resend</text>
          </p>
        </div>
        <Form.Item>
          <Button
            type="primary"
            size="large"
            className="bg-blue-500 w-full font-semibold"
          >
            Verify
          </Button>
        </Form.Item>
      </Form>
    </Auth>
  )
}

export default VerifyCode
