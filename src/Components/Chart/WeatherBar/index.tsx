import React from "react";

import { ResponsiveBar } from "@nivo/bar";
import { ChartWrapper } from "./style";
import { IWeatherChartModel } from "./weatherChartModel";

interface IProps {
  data: IWeatherChartModel[];
}

const WeatherBar: React.FC<IProps> = ({ data }) => {
  return (
    <ChartWrapper>
      <ResponsiveBar
        data={data}
        layout="vertical"
        keys={["Temperatura Máxima", "Temperatura Mínima"]}
        indexBy="city"
        margin={{ top: 50, right: 50, bottom: 150, left: 150 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "set1" }}
        groupMode="grouped"
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Cidades",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Temperatura",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-left",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 65,
            itemsSpacing: 50,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </ChartWrapper>
  );
};
export default WeatherBar;
