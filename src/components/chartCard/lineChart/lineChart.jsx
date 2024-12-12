import ReactApexChart from "react-apexcharts";
import { useUIController } from "../../../context/context";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANT } from "../../uiElements/animations/framerMotionVaraints";
import LineChartLoading from "./lineChartLoading";
import { useState } from "react";

const LineChart = ({ analyticsChartTop }) => {
  const [isDataPresent] = useState(true);
  const [controller] = useUIController();
  const { isDarkMode } = controller;
  const customColors = ["#3AA0FF", "#A586FF", "#EFC6FD", "#D8E7FF"];
  let series = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
    {
      name: "Ipad",
      data: [20, 43, 25, 21, 49, 22, 39, 81, 138],
    },
  ];

  const options = {
    chart: {
      width: "100%",
      type: "line",
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    colors: customColors,
    legend: {
      position: "top",
      fontFamily: "PublicSans",
      labels: {
        colors: isDarkMode ? "#fff" : "#282828",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          fontFamily: "PublicSans",
          colors: isDarkMode ? "#fff" : "#282828",
        },
      },
    },
    grid: {
      borderColor: isDarkMode ? "#555" : "#ddd",
      strokeDashArray: 10,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontFamily: "PublicSans",
          colors: isDarkMode ? "#fff" : "#282828",
        },
      },
    },
    tooltip: {
      theme: isDarkMode ? "dark" : "light",
      style: {
        fontSize: "12px",
        fontFamily: "PublicSans",
      },
    },
  };
  return (
    <>
      {isDataPresent ? (
        <motion.div
          className="card chart-card-gradient chart-card flex flex-col justify-center items-center gap-3 p-3"
          variants={FADE_UP_ANIMATION_VARIANT}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <h1 className="gradient-text text-xl heading-text">
            DUMMY TEXT TO SHOW HERE
          </h1>
          <div className="flex flex-col xl:flex-row justify-center items-center gap-5 w-full">
            <div className="line-chart-container h-full w-full xl:w-[70%]">
              <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={350}
              />
            </div>
            <div className="flex flex-wrap xl:flex-col justify-center items-center h-full w-full xl:w-[30%] gap-5">
              <motion.div
                className="info-box p-3 flex flex-col justify-center items-center"
                variants={FADE_UP_ANIMATION_VARIANT}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <h3 className="gradient-text">Facebook</h3>
                <span className="solid-text">DUMMY TEXT TO SHOW HERE ?</span>
              </motion.div>
              <motion.div
                className="info-box p-3 flex flex-col justify-center items-center"
                variants={FADE_UP_ANIMATION_VARIANT}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <h3 className="gradient-text">Instagram</h3>
                <span className="solid-text">DUMMY TEXT TO SHOW HERE ?</span>
              </motion.div>
              <motion.div
                className="info-box p-3 flex flex-col justify-center items-center"
                variants={FADE_UP_ANIMATION_VARIANT}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <h3 className="gradient-text">Samsung</h3>
                <span className="solid-text">DUMMY TEXT TO SHOW HERE ?</span>
              </motion.div>
              <motion.div
                className="info-box p-3 flex flex-col justify-center items-center"
                variants={FADE_UP_ANIMATION_VARIANT}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <h3 className="gradient-text">India</h3>
                <span className="solid-text">DUMMY TEXT TO SHOW HERE ?</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : (
        <LineChartLoading />
      )}
    </>
  );
};

export default LineChart;
