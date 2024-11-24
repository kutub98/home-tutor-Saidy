"use client";
import React from "react";
import Chart from "chart.js";
import { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { TicketCheck } from "lucide-react";

export default function AdminHomePage() {
  const [allJobs, setAllJobs] = useState(null);

  // Fetch jobs on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/jobs.json");
        const data = await res.json();
        setAllJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, []);
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#4a5568",
            borderColor: "#4a5568",
            data: [30, 78, 56, 34, 100, 45, 13],
            fill: false,
            barThickness: 8
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            data: [27, 68, 86, 74, 10, 4, 87],
            barThickness: 8
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart"
        },
        tooltips: {
          mode: "index",
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: true
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)"
          },
          align: "end",
          position: "bottom"
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month"
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value"
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
              }
            }
          ]
        }
      }
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);

  const BookedJobs = allJobs?.filter((item) => item.slot === "Booked").length;
  const AvailableJobs = allJobs?.filter(
    (item) => item.slot === "Available"
  ).length;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {[
          {
            title: "Total Jobs",
            count: allJobs?.length || 0,
            icon: <FaBriefcase />
          },
          {
            title: "Total Users",
            count: allJobs?.length || 0,
            icon: <FaRegUser />
          },
          {
            title: "Booked Jobs",
            count: BookedJobs,
            icon: <TicketCheck className="w-12 h-12" />
          },
          {
            title: "Available Jobs",
            count: AvailableJobs,
            icon: <MdEventAvailable />
          }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-md p-6 flex flex-col items-start justify-between h-auto relative group hover:shadow-lg transition-shadow"
          >
            <div className="text-gray-500 text-5xl absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
              {item.icon}
            </div>
            <h2 className="text-gray-700 font-medium text-lg mb-2">
              {item.title}
            </h2>
            <p className="text-gray-900 font-bold text-2xl">{item.count}</p>
          </div>
        ))}
      </div>

      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Activity
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Total User
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
