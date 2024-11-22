// const AdminHomePage = () => {
//   return (
//     <div className="flex items-center justify-center gap-8 bg-black text-white p-6">
//       {/* Donut Chart */}
//       <div className="relative w-40 h-40">
//         <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
//           {/* Background Circle */}
//           <circle
//             cx="18"
//             cy="18"
//             r="15.915"
//             fill="none"
//             stroke="#1f2937"
//             strokeWidth="2.5"
//           />
//           {/* Segment 1: Module Finish On Time */}
//           <circle
//             cx="18"
//             cy="18"
//             r="15.915"
//             fill="none"
//             stroke="#f97316" /* Orange */
//             strokeWidth="2.5"
//             strokeDasharray="15, 85" /* Percentages: 15% */
//             strokeDashoffset="0"
//           />
//           {/* Segment 2: Module Progress */}
//           <circle
//             cx="18"
//             cy="18"
//             r="15.915"
//             fill="none"
//             stroke="#4f46e5" /* Indigo */
//             strokeWidth="2.5"
//             strokeDasharray="20, 100" /* 0% */
//             strokeDashoffset="-35" /* Offset starts after previous segment */
//           />
//           {/* Segment 3: Quiz Mark */}
//           <circle
//             cx="18"
//             cy="18"
//             r="15.915"
//             fill="none"
//             stroke="#a855f7" /* Purple */
//             strokeWidth="2.5"
//             strokeDasharray="0, 100" /* 0% */
//             strokeDashoffset="-15"
//           />
//           {/* Segment 4: Video Duration */}
//           <circle
//             cx="18"
//             cy="18"
//             r="15.915"
//             fill="none"
//             stroke="#22c55e" /* Green */
//             strokeWidth="2.5"
//             strokeDasharray="85, 15" /* Percentages: 85% */
//             strokeDashoffset="-15"
//           />
//         </svg>
//         {/* Center Percentage */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <span className="text-lg font-bold">15.05%</span>
//         </div>
//       </div>

//       {/* Legend */}
//       <div className="space-y-4 text-sm">
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-4 bg-[#f97316] rounded-full"></div>
//           <span>Module Finish On Time</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-4 bg-[#4f46e5] rounded-full"></div>
//           <span>Module Progress</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-4 bg-[#a855f7] rounded-full"></div>
//           <span>Quiz Mark</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-4 bg-[#22c55e] rounded-full"></div>
//           <span>Video Duration</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-4 bg-[#3b82f6] rounded-full"></div>
//           <span>Assignment Mark</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHomePage;

// const AdminHomePage = () => {
//   // Define data for each segment
//   const data = [
//     { percentage: 15, color: "#f97316", label: "Module Finish On Time" }, // Orange
//     { percentage: 20, color: "#4f46e5", label: "Module Progress" }, // Indigo
//     { percentage: 0, color: "#a855f7", label: "Quiz Mark" }, // Purple
//     { percentage: 65, color: "#22c55e", label: "Video Duration" } // Green
//   ];

//   return (
//     <div className="flex items-center justify-center gap-8 bg-black text-white p-6">
//       {/* Donut Chart */}
//       <div className="relative w-40 h-40">
//         <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
//           {/* Background Circle */}
//           <circle
//             cx="18"
//             cy="18"
//             r="15.915"
//             fill="none"
//             stroke="#1f2937"
//             strokeWidth="2.5"
//           />
//           {/* Dynamic Segments */}
//           {
//             data.reduce(
//               (acc, item, index) => {
//                 const prevPercentage = acc.total;
//                 const offset = -prevPercentage * (360 / 100); // Convert percentage to strokeDashoffset
//                 acc.total += item.percentage;

//                 return {
//                   total: acc.total,
//                   elements: [
//                     ...acc.elements,
//                     <circle
//                       key={index}
//                       cx="18"
//                       cy="18"
//                       r="15.915"
//                       fill="none"
//                       stroke={item.color}
//                       strokeWidth="2.5"
//                       strokeDasharray={`${item.percentage}, 100`}
//                       strokeDashoffset={offset}
//                     />
//                   ]
//                 };
//               },
//               { total: 0, elements: [] }
//             ).elements
//           }
//         </svg>

//         {/* Center Percentage */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <span className="text-lg font-bold">100%</span>
//         </div>
//       </div>

//       {/* Legends with Percentages */}
//       <div className="space-y-4 text-sm">
//         {data.map((item, index) => (
//           <div key={index} className="flex items-center space-x-2">
//             <div
//               className="w-4 h-4 rounded-full"
//               style={{ backgroundColor: item.color }}
//             ></div>
//             <span>
//               {item.label}: <strong>{item.percentage}%</strong>
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminHomePage;
"use client";
import React from "react";
import Chart from "chart.js";

export default function AdminHomePage() {
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
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Performance
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Total orders
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
