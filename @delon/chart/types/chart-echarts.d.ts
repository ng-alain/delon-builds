import * as _angular_core from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AlainChartConfig } from '@delon/util/config';
import * as _echarts from 'echarts';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/skeleton';

declare class ChartEChartsService implements OnDestroy {
    private readonly cogSrv;
    private readonly lazySrv;
    private _cog;
    private loading;
    private loaded;
    private notify$;
    get cog(): AlainChartConfig;
    set cog(val: AlainChartConfig);
    constructor();
    libLoad(): this;
    get notify(): Observable<void>;
    ngOnDestroy(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ChartEChartsService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<any>;
}

type ChartECharts = _echarts.ECharts;
type ChartEChartsOption = _echarts.EChartsCoreOption;
type ChartEChartsEventType = 'ready' | 'init' | 'destroy' | 'set-option';
interface ChartEChartsEvent {
    type: ChartEChartsEventType;
    chart?: ChartECharts;
    option?: ChartEChartsOption;
}
interface ChartEChartsOn {
    eventName: string;
    query?: string | object;
    handler: (options: {
        event: NzSafeAny;
        chart: ChartECharts;
    }) => void;
}

declare class ChartEChartsComponent implements OnDestroy {
    private readonly srv;
    private readonly destroyRef;
    private readonly node;
    readonly width: _angular_core.InputSignalWithTransform<string | number | null, string | number | null | undefined>;
    readonly height: _angular_core.InputSignalWithTransform<string | number | null, string | number | null | undefined>;
    readonly theme: _angular_core.InputSignal<string | Record<string, unknown> | null | undefined>;
    readonly initOpt: _angular_core.InputSignal<any>;
    readonly option: _angular_core.InputSignal<_echarts.EChartsCoreOption | undefined>;
    /** 事件绑定；变更时不重建图表（与旧行为一致） */
    readonly on: _angular_core.InputSignal<ChartEChartsOn[]>;
    readonly events: _angular_core.OutputEmitterRef<ChartEChartsEvent>;
    private _chart;
    private readonly _loaded;
    readonly loaded: _angular_core.Signal<boolean>;
    private prev?;
    get chart(): ChartECharts | null;
    constructor();
    /** theme / initOpt 变更 → 重建；option 变更 → 增量更新 */
    private dispatch;
    private emit;
    private load;
    install(): this;
    destroy(): this;
    setOption(option: ChartEChartsOption, notMerge?: boolean, lazyUpdate?: boolean): this;
    ngOnDestroy(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ChartEChartsComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ChartEChartsComponent, "chart-echarts, [chart-echarts]", ["chartECharts"], { "width": { "alias": "width"; "required": false; "isSignal": true; }; "height": { "alias": "height"; "required": false; "isSignal": true; }; "theme": { "alias": "theme"; "required": false; "isSignal": true; }; "initOpt": { "alias": "initOpt"; "required": false; "isSignal": true; }; "option": { "alias": "option"; "required": false; "isSignal": true; }; "on": { "alias": "on"; "required": false; "isSignal": true; }; }, { "events": "events"; }, never, never, true, never>;
}

declare class ChartEChartsModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ChartEChartsModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<ChartEChartsModule, never, [typeof i1.CommonModule, typeof i2.NzSkeletonModule, typeof ChartEChartsComponent], [typeof ChartEChartsComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<ChartEChartsModule>;
}

export { ChartEChartsComponent, ChartEChartsModule, ChartEChartsService };
export type { ChartECharts, ChartEChartsEvent, ChartEChartsEventType, ChartEChartsOn, ChartEChartsOption };
