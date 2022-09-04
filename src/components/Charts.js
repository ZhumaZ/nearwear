import React from "react";
import { AreaChart, Grid, YAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";

class PointsChart extends React.PureComponent {
    render() {
        const data = [50, 10, 40, 95, 85, 91, 35, 53, 24, 50];
        return (
            <AreaChart
                style={{ height: 200 }}
                data={data}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: "rgba(134, 65, 244, 0.4)" }}
            >
                <Grid />
            </AreaChart>
        );
    }
}

export default PointsChart;
