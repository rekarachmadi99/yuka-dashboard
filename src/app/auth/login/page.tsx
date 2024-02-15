"use client"
import React, { useState } from "react"
import Auth from "@/components/auth"
import { Button, Checkbox, Form, Input } from "antd"
import { useRouter } from "next/navigation"

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [remember, setRemember] = useState<boolean>(false)

  const router = useRouter()
  return (
    <Auth>
      {" "}
      <Form>
        <label className="font-semibold text-lg">Username</label>
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            size="large"
            className="mt-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>

        <label className="font-semibold text-lg">Password</label>
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            size="large"
            className="mt-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <div className="flex justify-between">
          <Form.Item<FieldType> name="remember">
            <Checkbox
              className="text-base"
              checked={remember}
              onClick={() => {
                return setRemember(remember == false ? true : false)
              }}
            >
              Remember me
            </Checkbox>
          </Form.Item>
          <Button
            type="link"
            className="text-base"
            onClick={() => {
              router.push("/auth/forget-password")
            }}
          >
            Forget Password !
          </Button>
        </div>

        <Form.Item>
          <Button
            type="primary"
            size="large"
            className="bg-blue-500 w-full font-semibold"
          >
            Login
          </Button>
        </Form.Item>
        <div
          className="font-semibold flex justify-center cursor-pointer"
          onClick={() => router.push("/auth/register")}
        >
          <p>
            Don't have an account?{" "}
            <span className="text-red-300"> Sign Up</span>
          </p>
        </div>
      </Form>
    </Auth>
  )
}

export default Login
