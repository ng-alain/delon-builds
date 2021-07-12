import { G2BarModule } from '@delon/chart/bar';
export * from '@delon/chart/bar';
import { G2CardModule } from '@delon/chart/card';
export * from '@delon/chart/card';
import { G2CustomModule } from '@delon/chart/custom';
export * from '@delon/chart/custom';
import { G2GaugeModule } from '@delon/chart/gauge';
export * from '@delon/chart/gauge';
import { G2MiniAreaModule } from '@delon/chart/mini-area';
export * from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
export * from '@delon/chart/mini-bar';
import { G2MiniProgressModule } from '@delon/chart/mini-progress';
export * from '@delon/chart/mini-progress';
import { G2PieModule } from '@delon/chart/pie';
export * from '@delon/chart/pie';
import { G2RadarModule } from '@delon/chart/radar';
export * from '@delon/chart/radar';
import { G2TagCloudModule } from '@delon/chart/tag-cloud';
export * from '@delon/chart/tag-cloud';
import { G2TimelineModule } from '@delon/chart/timeline';
export * from '@delon/chart/timeline';
import { G2WaterWaveModule } from '@delon/chart/water-wave';
export * from '@delon/chart/water-wave';
import { NumberInfoModule } from '@delon/chart/number-info';
export * from '@delon/chart/number-info';
import { TrendModule } from '@delon/chart/trend';
export * from '@delon/chart/trend';
import { G2SingleBarModule } from '@delon/chart/single-bar';
export * from '@delon/chart/single-bar';
export * from '@delon/chart/chart-echarts';
import { NgModule } from '@angular/core';
import { warnDeprecation } from '@delon/util/other';

const MODULES = [
    G2BarModule,
    G2CardModule,
    G2CustomModule,
    G2GaugeModule,
    G2MiniAreaModule,
    G2MiniBarModule,
    G2MiniProgressModule,
    G2PieModule,
    G2RadarModule,
    G2TagCloudModule,
    G2TimelineModule,
    G2WaterWaveModule,
    G2SingleBarModule,
    NumberInfoModule,
    TrendModule,
];
// #endregion
/**
 * @deprecated Use secondary entry eg: `import { G2BarModule } from '@delon/chart/bar';`.
 */
class DelonChartModule {
    constructor() {
        warnDeprecation("The `DelonChartModule` has been deprecated and will be removed in 12.0.0. Please use secondary entry instead.\ne.g. `import { G2BarModule } from '@delon/chart/bar';`");
    }
}
DelonChartModule.decorators = [
    { type: NgModule, args: [{ exports: MODULES },] }
];
DelonChartModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { DelonChartModule };
//# sourceMappingURL=chart.js.map
