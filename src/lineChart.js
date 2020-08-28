import React from 'react'
import { Line } from "react-chartjs-2";

const label = ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
const myData = [22, 99, 66, 53, 37, 73, 22, 83]
const myData2 = [63, 42, 73, 14, 55, 92, 49, 88]

const datasets1 = {
    label : "My First Dataset",
    backgroundColor : 'rgba(237, 242, 238)',
    borderColor : 'rgba(194, 255, 208)',
    borderWidth : 5,
    fill : false,
    hoverBackgroundColor : 'rgba(221, 240, 225)',
    hoverBorderColor : 'rgba(222, 23, 4)',
    data : myData,
}
const datasets2 = {
    label : "My Second Dataset",
    backgroundColor : 'rgba(237, 242, 238)',
    borderColor : 'rgba(158, 221, 255)',
    borderWidth : 5,
    fill : false,
    hoverBackgroundColor : 'rgba(221, 240, 225)',
    hoverBorderColor : 'rgba(222, 23, 4)',
    data : myData2,
}
const data = {
    labels : label,
    datasets : [datasets1, datasets2],
}

function LineChart()
{
    return(
        <div>
            <Line
            data={data}
            width={1000}
            height={70}
            options={{
                maintainAspectRatio : false,
            }}
            />
        </div>
    )
}

export default LineChart