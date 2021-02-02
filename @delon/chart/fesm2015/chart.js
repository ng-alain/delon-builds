import { G2BarModule } from '@delon/chart/bar';
export { G2BarComponent, G2BarModule } from '@delon/chart/bar';
import { G2CardModule } from '@delon/chart/card';
export { G2CardComponent, G2CardModule } from '@delon/chart/card';
import { G2CustomModule } from '@delon/chart/custom';
export { G2CustomComponent, G2CustomModule } from '@delon/chart/custom';
import { G2GaugeModule } from '@delon/chart/gauge';
export { G2GaugeComponent, G2GaugeModule } from '@delon/chart/gauge';
import { G2MiniAreaModule } from '@delon/chart/mini-area';
export { G2MiniAreaComponent, G2MiniAreaModule } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
export { G2MiniBarComponent, G2MiniBarModule } from '@delon/chart/mini-bar';
import { G2MiniProgressModule } from '@delon/chart/mini-progress';
export { G2MiniProgressComponent, G2MiniProgressModule } from '@delon/chart/mini-progress';
import { G2PieModule } from '@delon/chart/pie';
export { G2PieComponent, G2PieModule } from '@delon/chart/pie';
import { G2RadarModule } from '@delon/chart/radar';
export { G2RadarComponent, G2RadarModule } from '@delon/chart/radar';
import { G2TagCloudModule } from '@delon/chart/tag-cloud';
export { G2TagCloudComponent, G2TagCloudModule } from '@delon/chart/tag-cloud';
import { G2TimelineModule } from '@delon/chart/timeline';
export { G2TimelineComponent, G2TimelineModule } from '@delon/chart/timeline';
import { G2WaterWaveModule } from '@delon/chart/water-wave';
export { G2WaterWaveComponent, G2WaterWaveModule } from '@delon/chart/water-wave';
import { NumberInfoModule } from '@delon/chart/number-info';
export { NumberInfoComponent, NumberInfoModule } from '@delon/chart/number-info';
import { TrendModule } from '@delon/chart/trend';
export { TrendComponent, TrendModule } from '@delon/chart/trend';
import { G2SingleBarModule } from '@delon/chart/single-bar';
export { G2SingleBarComponent, G2SingleBarModule } from '@delon/chart/single-bar';
import { NgModule } from '@angular/core';
import { warnDeprecation } from '@delon/util/other';

/**
 * @fileoverview added by tsickle
 * Generated from: chart.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
 * @deprecated Use secondary entry eg: `import { G2BarModule } from '\@delon/chart/bar';`.
 */
class DelonChartModule {
    constructor() {
        warnDeprecation("The `DelonChartModule` has been deprecated and will be removed in 12.0.0. Please use secondary entry instead.\ne.g. `import { G2BarModule } from '@delon/chart/bar';`");
    }
}
DelonChartModule.decorators = [
    { type: NgModule, args: [{ exports: MODULES },] }
];
/** @nocollapse */
DelonChartModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: chart.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DelonChartModule };
//# sourceMappingURL=chart.js.map
