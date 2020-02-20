import React, { Component } from 'react';
import Chart from 'chart.js'

class ChartComponent extends Component{
    render() {
        settings = this.props.settings
        return <canvas id={this.props.id} width={this.props.width} height={this.props.height} onLoad={this.setChart(this,settings)}></canvas>
    }

    setChart(component, settings) {
        ctx = component.getContext('2d');
        myChart = new Chart(ctx, settings);
    }
}

export default ChartComponent