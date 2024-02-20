"use client"
import MenuContent from "@/components/menu"
import {
  CloseCircleOutlined,
  DollarCircleOutlined,
  FrownOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  SmileOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons"
import {
  Breadcrumb,
  Button,
  Card,
  DatePicker,
  Input,
  Select,
  Slider,
  Switch,
  Tag,
  TimePicker,
  Tooltip,
  Upload,
} from "antd"
import React, { useState } from "react"
import { HiOutlineMapPin } from "react-icons/hi2"

const Components = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false)
  const [content, setContent] = useState("")
  return (
    <MenuContent>
      <Breadcrumb
        className="py-2 font-medium text-base"
        separator=">"
        items={[{ title: "Forms" }, { title: "Form Components" }]}
      />
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-6 space-y-3">
          <Card
            title={<span className="text-slate-600 text-xl">Input groups</span>}
          >
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-6 space-y-3">
                <Input
                  placeholder="Your name"
                  size="large"
                  prefix={<UserOutlined />}
                  suffix={
                    <Tooltip title="Extra information">
                      <InfoCircleOutlined
                        style={{ color: "rgba(0,0,0,.45)" }}
                      />
                    </Tooltip>
                  }
                />
                <Input
                  placeholder="Location"
                  size="large"
                  suffix={<HiOutlineMapPin />}
                />
                <Input
                  placeholder="Payment method"
                  size="large"
                  prefix={<DollarCircleOutlined />}
                  suffix={<span className="text-sm font-medium">USD</span>}
                />
              </div>
              <div className="col-span-6 space-y-3">
                <Input
                  placeholder="Email address"
                  size="large"
                  prefix={<MailOutlined />}
                />
                <Input.Password
                  placeholder="input password"
                  size="large"
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                />
                <Input
                  placeholder="Phone number"
                  size="large"
                  prefix={<GlobalOutlined />}
                  suffix={<PhoneOutlined />}
                />
              </div>
            </div>
          </Card>
          <Card
            title={<span className="text-slate-600 text-xl">Dropdowns</span>}
          >
            <Select
              showSearch
              className="w-full mb-3"
              placeholder="Select an option"
              optionFilterProp="children"
            >
              <Select.Option value="option1">Option 1</Select.Option>
              <Select.Option value="option2">Option 2</Select.Option>
              <Select.Option value="option3">Option 3</Select.Option>
            </Select>
            <Select
              mode="multiple"
              className="w-full"
              placeholder="Select an option"
              optionFilterProp="children"
            >
              <Select.Option value="option1">Option 1</Select.Option>
              <Select.Option value="option2">Option 2</Select.Option>
              <Select.Option value="option3">Option 3</Select.Option>
            </Select>
          </Card>
          <Card
            title={<span className="text-slate-600 text-xl">Datepicker</span>}
          >
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-6 space-y-3">
                <DatePicker className="w-full" />
                <DatePicker className="w-full" picker="week" />
                <DatePicker className="w-full" picker="month" />
                <DatePicker className="w-full" picker="quarter" />
                <DatePicker className="w-full" picker="year" />
              </div>
              <div className="col-span-6 space-y-3">
                <DatePicker.RangePicker className="w-full" />
                <DatePicker.RangePicker className="w-full" showTime />
                <DatePicker.RangePicker className="w-full" picker="week" />
                <DatePicker.RangePicker className="w-full" picker="month" />
                <DatePicker.RangePicker className="w-full" picker="quarter" />
                <DatePicker.RangePicker className="w-full" picker="year" />
              </div>
            </div>
          </Card>
          <Card
            title={<span className="text-slate-600 text-xl">Timepicker</span>}
          >
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-6 space-y-3">
                <TimePicker className="w-full" />
              </div>
              <div className="col-span-6 space-y-3">
                <TimePicker.RangePicker className="w-full" />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-6 space-y-3">
          <Card title={<span className="text-slate-600 text-xl">Tags</span>}>
            <Tag>Tag 1</Tag>
            <Tag>
              <a href="http://localhost:3000/">Link</a>
            </Tag>
            <Tag
              closeIcon
              onClose={(e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault()
                console.log("Clicked! But prevent default.")
              }}
            >
              Prevent Default
            </Tag>
            <Tag
              closeIcon={<CloseCircleOutlined />}
              onClose={(e: React.MouseEvent<HTMLElement>) => {
                console.log(e)
              }}
            >
              Tag 2
            </Tag>
          </Card>
          <Card
            title={
              <span className="text-slate-600 text-xl">Toggle buttons</span>
            }
          >
            <Switch defaultChecked />
          </Card>
          <Card title={<span className="text-slate-600 text-xl">Sliders</span>}>
            <Slider />
          </Card>
          <Card
            title={<span className="text-slate-600 text-xl">Dropzone</span>}
          >
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Card>
        </div>
      </div>
    </MenuContent>
  )
}

export default Components
