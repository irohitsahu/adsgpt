import { useUIController } from "../../../context/context";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANT } from "../../uiElements/animations/framerMotionVaraints";
import PieChartLoading from "./pieChartLoading";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";
import { useEffect, useRef } from "react";

export default function PieChart({ analyticsChartBottom }) {
  const [controller] = useUIController();
  const { isDarkMode } = controller;
  const pieChart = useRef(null);

  useEffect(() => {
    let data = [
      {
        category: "Lithuania",
        value: 501.9,
      },
      {
        category: "Czechia",
        value: 301.9,
      },
      {
        category: "Ireland",
        value: 201.1,
      },
      {
        category: "Germany",
        value: 165.8,
      },
    ];

    const customColors = isDarkMode
      ? [
          am5.color(0xc798d8),
          am5.color(0xb0bce0),
          am5.color(0x2873b8),
          am5.color(0x518dba),
          am5.color(0x7c61cc),
        ]
      : [
          am5.color(0xefc6fd),
          am5.color(0xd8e7ff),
          am5.color(0x3aa0ff),
          am5.color(0x79c7ff),
          am5.color(0xa586ff),
        ];

    let root = am5.Root.new(pieChart.current);
    let responsive = am5themes_Responsive.newEmpty(root);

    root._logo.dispose();

    responsive.addRule({
      relevant: am5themes_Responsive.widthL,
      applying: function () {
        chart.set("layout", root.verticalLayout);
        legend.set("layout", root.horizontalLayout);
      },
      removing: function () {
        chart.set("layout", root.horizontalLayout);
      },
    });

    root.setThemes([am5themes_Animated.new(root), responsive]);

    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270,
        radius: am5.percent(90),
      })
    );

    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270,
        alignLabels: true,
      })
    );

    let legend = chart.children.push(
      am5.Legend.new(root, {
        height: am5.percent(100),
        verticalScrollbar: am5.Scrollbar.new(root, {
          orientation: "vertical",
        }),
      })
    );

    series.get("colors").set("colors", customColors);

    series.states.create("hidden", {
      endAngle: -90,
    });

    series.labels.template.setAll({
      maxWidth: 150,
      oversizedBehavior: "truncate",
      fontSize: 12,
      fontFamily: "QuickSand",
    });

    legend.labels.template.setAll({
      fontSize: 14,
      fontFamily: "QuickSand",
    });

    legend.valueLabels.template.setAll({
      fontSize: 14,
      fontFamily: "QuickSand",
      fontWeight: 500,
    });

    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
    });

    series.data.setAll(data);
    legend.data.setAll(series.dataItems);

    // Dark & Light Mode Color
    if (isDarkMode) {
      legend.labels.template.setAll({
        fill: am5.color("#ccc"),
      });
      legend.valueLabels.template.setAll({
        fill: am5.color("#ccc"),
      });
      series.labels.template.setAll({
        fill: am5.color("#ccc"),
      });
      series.ticks.template.setAll({
        stroke: am5.color("#ccc"),
      });
    } else {
      legend.labels.template.setAll({
        fill: am5.color("#000"),
      });
      legend.valueLabels.template.setAll({
        fill: am5.color("#000"),
      });
      series.labels.template.setAll({
        fill: am5.color("#000"),
      });
      series.ticks.template.setAll({
        stroke: am5.color("#000"),
      });
    }

    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [isDarkMode]);

  return (
    <>
      {true ? (
        <motion.div
          className="card chart-card-gradient chart-card flex flex-col justify-center items-center gap-3 p-3"
          variants={FADE_UP_ANIMATION_VARIANT}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <h1 className="gradient-text text-xl heading-text">
            DUMMY TEXT TO SHOW HERE ?
          </h1>
          <div ref={pieChart} className="pie-chart-container"></div>
        </motion.div>
      ) : (
        <PieChartLoading />
      )}
    </>
  );
}
