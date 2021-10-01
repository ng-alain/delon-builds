import type * as _echarts from 'echarts';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
export declare type ChartECharts = _echarts.ECharts;
export declare type ChartEChartsOption = _echarts.EChartsCoreOption;
export declare type ChartEChartsEventType = 'ready' | 'init' | 'destroy' | 'set-option';
export interface ChartEChartsEvent {
    type: ChartEChartsEventType;
    chart?: ChartECharts;
    option?: ChartEChartsOption;
}
export interface ChartEChartsOn {
    eventName: string;
    query?: string | object;
    handler: (options: {
        event: NzSafeAny;
        chart: ChartECharts;
    }) => void;
}
