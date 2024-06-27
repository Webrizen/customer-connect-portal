"use client";
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


function formatLargeNumber(number) {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(1) + "b";
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(1) + "m";
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(1) + "k";
  }
  return number.toString();
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}

const overviews = [
  {
    id: 1,
    title: "Support Tickets",
    number: 470879,
  },
  {
    id: 2,
    title: "Projects",
    number: 1466796,
  },
  {
    id: 3,
    title: "Meetings",
    number: 4080,
  },
  {
    id: 4,
    title: "Billings",
    number: 43678
  },
];

export default function page() {
  return (
    <>
      <section className="w-full">
        <div className="w-full flex justify-center flex-col mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {overviews.map((overview, index) => (
              <div
                className="bg-white card rounded-lg overflow-hidden relative border dark:border-rgba(225,225,225,0.1) border-[rgba(0,0,0,0.1)]"
                key={index}
              >
                <div className="absolute w-56 h-48 bg-[#00aeef] blur-[200px] -left-1/2 -bottom-1/2"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {overview.title}
                  </h3>
                  <span className="bg-gradient-to-r from-blue-600 via-[#00aeef] to-indigo-400 font-bold text-5xl text-transparent bg-clip-text">{formatLargeNumber(overview.number || 0)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart className="aspect-[16/9]" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Customer Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart className="aspect-[16/9]" />
                </CardContent>
              </Card>
            </div>
      </section>
    </>
  );
}