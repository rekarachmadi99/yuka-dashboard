"use client"

import Auth from "@/components/auth"
import { Button, Checkbox, Form, Input, Modal } from "antd"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

type FieldType = {
  email?: string
}

const ForgetPassword: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")

  const [terms, setTerms] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const router = useRouter()

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <Auth>
      <Form>
        <h1 className="text-2xl font-bold mb-2">Sign Up</h1>
        <p className="text-lg text-slate-500 mb-5">
          Let's get you all set up so you cant access your personal account.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Form.Item
            name="firstName"
            rules={[
              { required: true, message: "Please input your First Name!" },
            ]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              { required: true, message: "Please input your Last Name!" },
            ]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your Email!" },
              {
                type: "email",
                message: "Please input ",
              },
            ]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            rules={[
              { required: true, message: "Please input your Phone Number!" },
            ]}
          >
            <Input
              type="number"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Item>
        </div>
        <Form.Item>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item className="mb-2">
          <Checkbox
            className="font-semibold"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <p>
              I aggre to all the <span className="text-red-300"> Terms </span>{" "}
              and
              <span className="text-red-300"> Privacy Polices</span>
            </p>
          </Checkbox>
        </Form.Item>
        <Form.Item className="mb-3">
          <Button
            type="primary"
            size="large"
            className="bg-blue-500 w-full font-semibold"
          >
            Create Account
          </Button>
        </Form.Item>
        <div
          className="font-semibold flex justify-center cursor-pointer"
          onClick={() => router.back()}
        >
          <p>
            Already have an account? <span className="text-red-300">Login</span>
          </p>
        </div>
      </Form>
      <Modal
        title="Terms And Condition"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Auth>
  )
}

export default ForgetPassword
