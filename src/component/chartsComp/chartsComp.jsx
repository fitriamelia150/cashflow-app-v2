import React, { Fragment } from "react";
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";

export const DoughnutChart = (props) => {
    console.log(props);

    return (
        <Fragment>
            <div className="chart">
                <Doughnut
                   data={{
                    labels: props.data.map((data) => data.label),
                    datasets: [{
                        // label: 'Monthly Cashflow',
                        data: props.data.map((data) => data.value),
                        backgroundColor: [
                            'rgba(253, 135, 135, 0.8)',
                            'rgba(250, 192, 19, 0.8)',
                            'rgba(43, 63, 229, 0.8)',
                        ],
                        borderColor: [
                            'rgba(253, 135, 135, 0.8)',
                            'rgba(250, 192, 19, 0.8)',
                            'rgba(43, 63, 229, 0.8)',
                        ]
                    }]
                   }}
                />
            </div>
        </Fragment>
    )
}

