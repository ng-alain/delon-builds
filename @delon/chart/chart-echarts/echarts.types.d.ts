import type * as _echarts from 'echarts';
export declare type ChartECharts = _echarts.ECharts;
export declare type ChartEChartsOption = _echarts.EChartsCoreOption;
export declare type ChartEChartsEventType = 'ready' | 'init' | 'destroy' | 'set-option';
export interface ChartEChartsEvent {
    type: ChartEChartsEventType;
    chart?: ChartECharts;
    option?: ChartEChartsOption;
}
