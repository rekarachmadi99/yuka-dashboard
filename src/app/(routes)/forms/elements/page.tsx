"use client"
import MenuContent from "@/components/menu"
import {
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Upload,
} from "antd"

import React, { useState } from "react"
import { FaFile, FaUpload } from "react-icons/fa"

const Elements = () => {
  const [checked, setChecked] = useState<number>(1)

  //HTML5 inputs
  const [text, setText] = useState<string>("John Snow")
  const [search, setSearch] = useState<string>("Tell me your secret ...")
  const [url, setUrl] = useState<string>("yuka-dashboard.com")
  const [phone, setPhone] = useState<string>("+62 823-1112-9049")
  const [password, setPassword] = useState<string>("Password")
  const [number, setNumber] = useState<string>("23")
  const [dateTime, setDateTime] = useState<Date>()
  const [date, setDate] = useState<Date>()
  const [month, setMonth] = useState<Date>()
  const [week, setWeek] = useState<Date>()
  const [time, setTime] = useState<Date>()

  const { TextArea } = Input

  return (
    <MenuContent>
      <Breadcrumb
        className="py-2 font-medium text-base"
        separator=">"
        items={[{ title: "Forms" }, { title: "Form Elements" }]}
      />
      <div className="space-y-3">
        <Card
          className="shadow shadow-blue-200"
          title={
            <span className="text-lg text-slate-600">Form group in grid</span>
          }
        >
          {/* One of three cols */}
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-500">
                One of three cols
              </label>
              <Input placeholder="One of three cols" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-500">
                One of three cols
              </label>
              <Input placeholder="One of three cols" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-500">
                One of three cols
              </label>
              <Input placeholder="One of three cols" />
            </div>
          </div>
          {/* One of four cols */}
          <div className="grid grid-cols-4 gap-3 pt-3">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-500">
                One of four cols
              </label>
              <Input placeholder="One of four cols" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-500">
                One of four cols
              </label>
              <Input placeholder="One of four cols" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-500">
                One of four cols
              </label>
              <Input placeholder="One of four cols" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-500">
                One of four cols
              </label>
              <Input placeholder="One of four cols" />
            </div>
          </div>
          {/* One of two cols */}
          <div className="grid grid-cols-2 gap-3 pt-3">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-500">
                One of two cols
              </label>
              <Input placeholder="One of two cols" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-500">
                One of two cols
              </label>
              <Input placeholder="One of two cols" />
            </div>
          </div>
        </Card>
        <div className="grid grid-cols-12 gap-3">
          {/* Grid 1 */}
          <div className="col-span-6 space-y-3">
            <Card
              className="shadow shadow-blue-200"
              title={
                <span className="text-lg text-slate-600">Form controls</span>
              }
            >
              <div className="space-y-1 mb-3">
                <label className="text-sm font-medium text-slate-500">
                  Email address
                </label>
                <Input type="email" placeholder="name@example.com" />
              </div>
              <div className="space-y-1 mb-3">
                <label className="text-sm font-medium text-slate-500">
                  Example select
                </label>
                <Select
                  defaultValue="lucy"
                  className="w-full"
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
              </div>
              <div className="space-y-1 mb-3">
                <label className="text-sm font-medium text-slate-500">
                  Example multiple select
                </label>
                <Select
                  defaultValue="lucy"
                  className="w-full"
                  mode="multiple"
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-500">
                  Example textarea
                </label>
                <TextArea />
              </div>
            </Card>
            <Card
              className="shadow shadow-blue-200"
              title={
                <span className="text-lg text-slate-600">HTML5 inputs</span>
              }
            >
              <Form.Item
                label={<span className="text-slate-600 font-medium">Text</span>}
              >
                <Input value={text} onChange={(e) => setText(e.target.value)} />
              </Form.Item>
              <Form.Item
                label={
                  <span className="text-slate-600 font-medium">Search</span>
                }
              >
                <Input value={text} onChange={(e) => setText(e.target.value)} />
              </Form.Item>
              <Form.Item
                label={
                  <span className="text-slate-600 font-medium">Email</span>
                }
              >
                <Input value={text} onChange={(e) => setText(e.target.value)} />
              </Form.Item>
              <Form.Item
                label={<span className="text-slate-600 font-medium">URL</span>}
              >
                <Input value={text} onChange={(e) => setText(e.target.value)} />
              </Form.Item>
              <Form.Item
                label={
                  <span className="text-slate-600 font-medium">Phone</span>
                }
              >
                <Input value={text} onChange={(e) => setText(e.target.value)} />
              </Form.Item>
              <Form.Item
                label={
                  <span className="text-slate-600 font-medium">Password</span>
                }
              >
                <Input.Password
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span className="text-slate-600 font-medium">Number</span>
                }
              >
                <Input value={text} onChange={(e) => setText(e.target.value)} />
              </Form.Item>
              <Form.Item
                label={
                  <span className="text-slate-600 font-medium">Datetime</span>
                }
              >
                <DatePicker showTime className="w-full" />
              </Form.Item>
              <Form.Item
                label={<span className="text-slate-600 font-medium">Date</span>}
              >
                <DatePicker className="w-full" />
              </Form.Item>
              <Form.Item
                label={
                  <span className="text-slate-600 font-medium">Month</span>
                }
              >
                <DatePicker picker="month" className="w-full" />
              </Form.Item>
              <Form.Item
                label={<span className="text-slate-600 font-medium">Week</span>}
              >
                <DatePicker picker="week" className="w-full" />
              </Form.Item>
              <Form.Item
                label={<span className="text-slate-600 font-medium">Time</span>}
              >
                <DatePicker picker="time" className="w-full" />
              </Form.Item>
            </Card>
          </div>
          {/* Grid 2 */}
          <div className="col-span-6 space-y-3">
            <Card
              className="shadow shadow-blue-200"
              title={<span className="text-lg text-slate-600">Sizes</span>}
            >
              <div className="space-y-1 mb-3">
                <label className="text-sm font-medium text-slate-500">
                  Large input
                </label>
                <Input size="large" placeholder="Large" />
              </div>
              <div className="space-y-1 mb-3">
                <label className="text-sm font-medium text-slate-500">
                  Default input
                </label>
                <Input size="middle" placeholder="Default" />
              </div>
              <div className="space-y-1 mb-3">
                <label className="text-sm font-medium text-slate-500">
                  Small input
                </label>
                <Input size="small" placeholder="Small" />
              </div>
            </Card>
            <Card
              className="shadow shadow-blue-200"
              title={
                <span className="text-lg text-slate-600">Text inputs</span>
              }
            >
              <div className="space-y-1 mb-3">
                <label className="text-sm font-medium text-slate-500">
                  Basic textarea
                </label>
                <TextArea rows={5} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-500">
                  Unresizable textarea
                </label>
                <TextArea autoSize={{ minRows: 5, maxRows: 8 }} />
              </div>
            </Card>
            <Card
              className="shadow shadow-blue-200"
              title={<span className="text-lg text-slate-600">Select</span>}
            >
              <div className="space-y-1 mb-3">
                <label className="text-sm font-medium text-slate-500">
                  Unresizable textarea
                </label>
                <Select
                  defaultValue="lucy"
                  className="w-full"
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
              </div>
              <div className="space-y-1 mb-3">
                <label className="text-sm font-medium text-slate-500">
                  Unresizable textarea
                </label>
                <Select
                  defaultValue="lucy"
                  className="w-full"
                  disabled={true}
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
              </div>
              <div className="space-y-1 mb-3">
                <label className="text-sm font-medium text-slate-500">
                  Unresizable textarea
                </label>
                <Select
                  defaultValue="lucy"
                  className="w-full"
                  mode="multiple"
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
              </div>
              <div className="space-y-1 mb-3">
                <label className="text-sm font-medium text-slate-500">
                  Unresizable textarea
                </label>
                <Select
                  defaultValue="lucy"
                  mode="multiple"
                  className="w-full"
                  disabled={true}
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
              </div>
            </Card>
            <Card
              className="shadow shadow-blue-200"
              title={
                <span className="text-lg text-slate-600">File browser</span>
              }
            >
              <Upload>
                <Button icon={<FaUpload />}>Click to Upload</Button>
              </Upload>
            </Card>
            <Card
              className="shadow shadow-blue-200"
              title={
                <span className="text-lg text-slate-600">
                  Checkboxes and radios
                </span>
              }
            >
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-6 space-y-3">
                  <Checkbox className="w-full">Unchecked</Checkbox>
                  <Checkbox className="w-full" checked={true}>
                    Checked
                  </Checkbox>
                  <Checkbox className="w-full" disabled={true}>
                    Disabled Unchecked
                  </Checkbox>
                  <Checkbox className="w-full" checked={true} disabled={true}>
                    Disabled Checked
                  </Checkbox>
                </div>
                <div className="col-span-6 space-y-3">
                  <Radio.Group
                    className="w-full space-y-3"
                    onChange={(e) => setChecked(e.target.value)}
                    value={checked}
                  >
                    <Radio className="w-full" value={1}>
                      Checked
                    </Radio>
                    <Radio className="w-full" value={2}>
                      Unchecked
                    </Radio>
                  </Radio.Group>
                  <Radio.Group
                    className="w-full space-y-3"
                    value={1}
                    disabled={true}
                  >
                    <Radio className="w-full" value={1}>
                      Disabled Checked
                    </Radio>
                    <Radio className="w-full" value={2}>
                      Disabled Unchecked
                    </Radio>
                  </Radio.Group>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MenuContent>
  )
}

export default Elements
