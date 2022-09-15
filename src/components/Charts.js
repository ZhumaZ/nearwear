import React from "react";
import { LineChart, Grid, YAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { Flex, Box } from "native-base";

class PointsChart extends React.PureComponent {
    render() {
        const data1 = [
            50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80,
        ];
        const data2 = [
            -87, 66, -69, 92, -40, -61, 16, 62, 20, -93, -54, 47, -89, -44, 18,
        ];
        const data3 = [
            -44, 36, -5, 91, 43, -11, 54, 99, 130, -63, -44, 47, -79, -48, 32,
        ];

        const data = [
            {
                data: data1,
                svg: { stroke: "purple" },
            },
            {
                data: data2,
                svg: { stroke: "green" },
            },
            {
                data: data3,
                svg: { stroke: "red" },
            },
        ];
        const contentInset = { top: 20, bottom: 20 };
        return (
            <Flex direction="row">
                <Box mr={1}>
                    <YAxis
                        style={{
                            marginBottom: 30,
                            height: 200,
                        }}
                        data={[...data1, ...data2, ...data3]}
                        contentInset={contentInset}
                        svg={{
                            fill: "grey",
                            fontSize: 10,
                        }}
                        formatLabel={(value) => `${value} TK`}
                    />
                </Box>
                <Box flex={1}>
                    <LineChart
                        style={{ height: 200 }}
                        data={data}
                        contentInset={{ top: 20, bottom: 20 }}
                        curve={shape.curveCatmullRom.alpha()}
                    >
                        <Grid />
                    </LineChart>
                </Box>
            </Flex>
        );
    }
}

export default PointsChart;
