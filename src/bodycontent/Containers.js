import { Card, Input } from "react-rainbow-components";
import "./Containers.css";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const Containers = () => {
    const [v1, setV1] = useState(0);
    const [v2, setV2] = useState(0);
    const [v3, setV3] = useState(0);
    const [i1, setI1] = useState(0);
    const [i2, setI2] = useState(0);
    const [i3, setI3] = useState(0);
    const [chartOptions, setChartOptions] = useState({
        series: [],
        options: {
            chart: {
                id: "current-power-chart",
                toolbar: {
                    show: false
                }
            },
            xaxis: {
                categories: ["Current (i1)", "Current (i2)", "Current (i3)"]
            },
            yaxis: [
                {
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#008FFB"
                    },
                    labels: {
                        style: {
                            colors: "#008FFB"
                        }
                    },
                    title: {
                        text: "Power (W)",
                        style: {
                            color: "#008FFB"
                        }
                    }
                }
            ],
            colors: ["#008FFB"],
            dataLabels: {
                enabled: false
            }
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch("https://dc-board.onrender.com/api/sensordata");
                const data = await result.json();
                setV1(data.v1);
                setV2(data.v2);
                setV3(data.v3);
                setI1(data.i1);
                setI2(data.i2);
                setI3(data.i3);

                const powerData = [data.i1 * data.v1, data.i2 * data.v2, data.i3 * data.v3];
                setChartOptions({
                    ...chartOptions,
                    series: [
                        { name: "Power (W)", data: powerData }
                    ]
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

        const interval = setInterval(fetchData, 2000);
        return () => clearInterval(interval);
    }, []);

    const handleButtonClick = async () => {
        try {
            const result = await fetch("https://dc-board.onrender.com/api/sensordata");
            const data = await result.json();
            setV1(data.v1);
            setV2(data.v2);
            setV3(data.v3);
            setI1(data.i1);
            setI2(data.i2);
            setI3(data.i3);

            const powerData = [data.i1 * data.v1, data.i2 * data.v2, data.i3 * data.v3];
            setChartOptions({
                ...chartOptions,
                series: [
                    { name: "Power (W)", data: powerData }
                ]
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Card className="child">
                <div className="row row__card">
                    <div className="down">
                        <div className="arrange">
                            <div className="col-6">
                                <p className="col__text">Voltage(v1)</p>
                            </div>
                            <div className="col-6">
                                <Input label="" value={v1} className="xy " />
                            </div>
                        </div>
                        <div className="arrange">
                            <div className="col-6">
                                <p className="col__text">Voltage(v2)</p>
                            </div>
                            <div className="col-6">
                                <Input label="" value={v2} className="xy" />
                            </div>
                        </div>
                        <div className="arrange">
                            <div className="col-6">
                                <p className="col__text">Voltage(v3)</p>
                            </div>
                            <div className="col-6">
                                <Input label="" value={v3} className="xy" />
                            </div>
                        </div><div className="bvc">
                        <button onClick={handleButtonClick}>Generate Graph</button></div>
                    </div>
                    <div className="side">
                        <div className="arrange">
                            <div className="col-6">
                                <p className="col__text">Current(i1)</p>
                            </div>
                            <div className="col-6">
                                <Input label="" value={i1} className="xy black" style={{ color: "black" }} />
                            </div>
                        </div>
                        <div className="arrange">
                            <div className="col-6">
                                <p className="col__text">Current(i2)</p>
                            </div>
                            <div className="col-6">
                                <Input label="" value={i2} className="xy" />
                            </div>
                        </div>
                        <div className="arrange">
                            <div className="col-6">
                                <p className="col__text">Current(i3)</p>
                            </div>
                            <div className="col-6">
                                <Input label="" value={i3} className="xy" />
                            </div>
                        </div>
                    </div>
                    <div className="three">
                        <div className="arrange">
                            <div className="col-6">
                                <p className="col__text">power(w1)</p>
                            </div>
                            <div className="col-6">
                                <Input label="" value={i1 * v1} className="xy" />
                            </div>
                        </div>
                        <div className="arrange">
                            <div className="col-6">
                                <p className="col__text">power(w2)</p>
                            </div>
                            <div className="col-6">
                                <Input label="" value={i2 * v2} className="xy" />
                            </div>
                        </div>
                        <div className="arrange">
                            <div className="col-6">
                                <p className="col__text">power(w3)</p>
                            </div>
                            <div className="col-6">
                                <Input label="" value={i3 * v3} className="xy" />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            
            <Card className="child">
                <div className="chart-container">
                    <Chart
                        options={chartOptions.options}
                        series={chartOptions.series}
                        type="line"
                        width="100%"
                        height="500"
                    />
                </div>
            </Card>
        </div>
    );
};

export default Containers;
