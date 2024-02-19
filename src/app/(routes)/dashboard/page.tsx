"use client"

import MenuContent from "@/components/menu"
import { Breadcrumb, Button, Card } from "antd"
import React from "react"
import {
  FaArrowDown,
  FaArrowUp,
  FaChartPie,
  FaPercent,
  FaUsers,
} from "react-icons/fa"
import { defaults } from "chart.js/auto"
import { VscGraph } from "react-icons/vsc"
import { Bar, Line } from "react-chartjs-2"

import revenueData from "@/json/revenueData.json"

defaults.maintainAspectRatio = false
defaults.responsive = true

const Dashboard: React.FC = () => {
  return (
    <MenuContent>
      <Breadcrumb
        className="py-2 font-medium text-base"
        items={[{ title: "Dashboard" }]}
      />

      {/* ============================================================================= */}
      {/* Card Data */}
      {/* ============================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-2">
        <Card className="shadow shadow-blue-200">
          <div className="flex justify-between">
            <div>
              <span className="text-slate-500 font-medium text-sm uppercase">
                TRAFFIC
              </span>
              <p className="font-semibold text-xl">350,897</p>
              <p className="pt-3 flex gap-1 items-center text-slate-500">
                <FaArrowUp className="text-green-500 text-sm" />
                <span className="text-green-500">3.48% </span> Since last month
              </p>
            </div>
            <div>
              <div className="rounded-full bg-red-500 w-14 h-14 items-center flex justify-center">
                <VscGraph className="text-white text-xl" />
              </div>
            </div>
          </div>
        </Card>

        <Card className="shadow shadow-blue-200">
          <div className="flex justify-between">
            <div>
              <span className="text-slate-500 font-medium text-sm uppercase">
                NEW USERS
              </span>
              <p className="font-semibold text-xl">2,356</p>
              <p className="pt-3 flex gap-1 items-center text-slate-500">
                <FaArrowDown className="text-red-500 text-sm" />
                <span className="text-red-500">3.48% </span> Since last week
              </p>
            </div>
            <div>
              <div className="rounded-full bg-orange-500 w-14 h-14 items-center flex justify-center">
                <FaChartPie className="text-white text-xl" />
              </div>
            </div>
          </div>
        </Card>

        <Card className="shadow shadow-blue-200">
          <div className="flex justify-between">
            <div>
              <span className="text-slate-500 font-medium text-sm uppercase">
                SALES
              </span>
              <p className="font-semibold text-xl">924</p>
              <p className="pt-3 flex gap-1 items-center text-slate-500">
                <FaArrowDown className="text-red-500 text-sm" />
                <span className="text-red-500">1.10% </span> Since yesterday
              </p>
            </div>
            <div>
              <div className="rounded-full bg-yellow-500 w-14 h-14 items-center flex justify-center">
                <FaUsers className="text-white text-xl" />
              </div>
            </div>
          </div>
        </Card>

        <Card className="shadow shadow-blue-200">
          <div className="flex justify-between">
            <div>
              <span className="text-slate-500 font-medium text-sm uppercase">
                PERFORMANCE
              </span>
              <p className="font-semibold text-xl">49,65%</p>
              <p className="pt-3 flex gap-1 items-center text-slate-500">
                <FaArrowUp className="text-green-500 text-sm" />
                <span className="text-green-500">12% </span> Since last month
              </p>
            </div>
            <div>
              <div className="rounded-full bg-blue-500 w-14 h-14 items-center flex justify-center">
                <FaPercent className="text-white text-xl" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* ============================================================================= */}
      {/* Chart */}
      {/* ============================================================================= */}
      <div className="grid grid-cols-5 gap-3 pt-2">
        <Card
          className="col-span-3 shadow shadow-blue-200"
          title={
            <div className="flex justify-between items-center py-3">
              <div>
                <span className="text-slate-500 font-medium text-xs uppercase">
                  OVERVIEW
                </span>
                <p className="font-semibold text-xl">Sales value</p>
              </div>
              <div className="space-x-2">
                <Button type="primary" className="bg-blue-500">
                  Month
                </Button>
                <Button type="primary" className="bg-blue-500">
                  Week
                </Button>
              </div>
            </div>
          }
        >
          <div className="h-80">
            <Line
              data={{
                labels: revenueData.map((data) => data.label),
                datasets: [
                  {
                    label: "Revenue",
                    data: revenueData.map((data) => data.revenue),
                    backgroundColor: "#064FF0",
                    borderColor: "#064FF0",
                  },
                  {
                    label: "Cost",
                    data: revenueData.map((data) => data.cost),
                    backgroundColor: "#FF3030",
                    borderColor: "#FF3030",
                  },
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0.5,
                  },
                },
                plugins: {
                  title: {
                    text: "Monthly Revenue & Cost",
                  },
                },
                scales: {
                  y: {
                    grid: {
                      display: false,
                    },
                  },
                  x: {
                    grid: {
                      display: false,
                    },
                  },
                },
              }}
            />
          </div>
        </Card>
        <Card
          className="col-span-2 shadow shadow-blue-200"
          title={
            <div className="flex justify-between items-center py-3">
              <div>
                <span className="text-slate-500 font-medium text-xs uppercase">
                  PERFORMANCE
                </span>
                <p className="font-semibold text-xl">Total orders</p>
              </div>
            </div>
          }
        >
          <div className="h-80">
            <Bar
              data={{
                labels: revenueData.map((data) => data.label),

                datasets: [
                  {
                    label: "Revenue",
                    data: revenueData.map((data) => data.revenue),
                    backgroundColor: "#064FF0",
                    borderColor: "#064FF0",
                  },
                  {
                    label: "Cost",
                    data: revenueData.map((data) => data.cost),
                    backgroundColor: "#FF3030",
                    borderColor: "#FF3030",
                  },
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0,
                  },
                },
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                plugins: {
                  title: {
                    text: "Monthly Revenue & Cost",
                  },
                },
              }}
            />
          </div>
        </Card>
      </div>

      {/* ============================================================================= */}
      {/* Team Member & To Do List & Progress Track */}
      {/* ============================================================================= */}
      <div className="grid grid-cols-3 gap-3 pt-3">
        <Card
          className="shadow shadow-blue-200"
          title={<div className="text-lg">Team members</div>}
        >
          <div className="grid grid-cols-12 p-1 items-center">
            <div className="col-span-2">
              <div className="bg-blue-500 rounded-full h-12 w-12 flex justify-center items-center">
                img
              </div>
            </div>
            <div className="col-span-8 space-x-2">
              <span className="font-medium">Reka Rachmadi Apriansyah</span>
              <p>
                <span className="text-green-500">●</span> Online
              </p>
            </div>
            <div className="col-span-2">
              <Button
                type="primary"
                className="bg-blue-500 text-white font-medium"
              >
                Add
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-12 p-1 items-center">
            <div className="col-span-2">
              <div className="bg-blue-500 rounded-full h-12 w-12 flex justify-center items-center">
                img
              </div>
            </div>
            <div className="col-span-8 space-x-2">
              <span className="font-medium">Raka Rachmadi</span>
              <p>
                <span className="text-red-500">●</span> In a meeting
              </p>
            </div>
            <div className="col-span-2">
              <Button
                type="primary"
                className="bg-blue-500 text-white font-medium"
              >
                Add
              </Button>
            </div>
          </div>
        </Card>
        <Card
          className="shadow shadow-blue-200"
          title={<div className="text-lg">To do list</div>}
        >
          <div className="">Data</div>
        </Card>
        <Card
          className="shadow shadow-blue-200"
          title={<div className="text-lg">Progress track</div>}
        ></Card>
      </div>
    </MenuContent>
  )
}

export default Dashboard
