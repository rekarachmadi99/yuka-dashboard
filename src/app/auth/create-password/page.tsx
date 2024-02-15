"use client"

import Auth from "@/components/auth"
import { Button, Form, Input } from "antd"
import React, { useState } from "react"

const ForgetPassword: React.FC = () => {
  return (
    <Auth>
      <Form>
        <h1 className="text-2xl font-bold mb-2">Set a password</h1>
        <p className="text-lg text-slate-500 mb-5">
          Your previous password has been reseted. Please set a new password for
          your account.
        </p>
        <Form.Item>
          <Input.Password placeholder="Create password" />
        </Form.Item>
        <Form.Item>
          <Input.Password placeholder="Re-enter Password" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            size="large"
            className="bg-blue-500 w-full font-semibold"
          >
            Set Password
          </Button>
        </Form.Item>
      </Form>
    </Auth>
  )
}

export default ForgetPassword
