import * as i0 from '@angular/core';
import { OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { AlainChartConfig } from '@delon/util/config';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as _echarts from 'echarts';
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartEChartsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ChartEChartsService>;
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

declare class ChartEChartsComponent implements OnInit, OnDestroy {
    private readonly srv;
    private readonly cdr;
    private readonly ngZone;
    private readonly platform;
    private node;
    private destroy$;
    private _chart;
    private _theme?;
    private _initOpt?;
    private _option;
    _width: string;
    _height: string;
    set width(val: number | string | null | undefined);
    set height(val: number | string | null | undefined);
    set theme(value: string | Record<string, unknown> | null | undefined);
    set initOpt(value: NzSafeAny);
    set option(value: ChartEChartsOption);
    on: ChartEChartsOn[];
    readonly events: EventEmitter<ChartEChartsEvent>;
    get chart(): ChartECharts | null;
    loaded: boolean;
    constructor();
    private emit;
    private load;
    install(): this;
    destroy(): this;
    setOption(option: ChartEChartsOption, notMerge?: boolean, lazyUpdate?: boolean): this;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartEChartsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChartEChartsComponent, "chart-echarts, [chart-echarts]", ["chartECharts"], { "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; "initOpt": { "alias": "initOpt"; "required": false; }; "option": { "alias": "option"; "required": false; }; "on": { "alias": "on"; "required": false; }; }, { "events": "events"; }, never, never, true, never>;
}

declare class ChartEChartsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartEChartsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ChartEChartsModule, never, [typeof i1.CommonModule, typeof i2.NzSkeletonModule, typeof ChartEChartsComponent], [typeof ChartEChartsComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ChartEChartsModule>;
}

export { ChartEChartsComponent, ChartEChartsModule, ChartEChartsService };
export type { ChartECharts, ChartEChartsEvent, ChartEChartsEventType, ChartEChartsOn, ChartEChartsOption };
