import * as i0 from "@angular/core";
import { OnDestroy } from "@angular/core";
import { Observable } from "rxjs";
import { AlainChartConfig } from "@delon/util/config";
import * as _echarts from "echarts";
import { NzSafeAny } from "ng-zorro-antd/core/types";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/skeleton";
export declare class ChartEChartsService implements OnDestroy {
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
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export type ChartECharts = _echarts.ECharts;
export type ChartEChartsOption = _echarts.EChartsCoreOption;
export type ChartEChartsEventType = 'ready' | 'init' | 'destroy' | 'set-option';
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
declare namespace echarts_component_d_exports {
  export { ChartEChartsComponent };
}
export declare class ChartEChartsComponent implements OnDestroy {
  private readonly srv;
  private readonly destroyRef;
  private readonly node;
  readonly width: import("@angular/core").InputSignalWithTransform<string | number | null, string | number | null | undefined>;
  readonly height: import("@angular/core").InputSignalWithTransform<string | number | null, string | number | null | undefined>;
  readonly theme: import("@angular/core").InputSignal<string | Record<string, unknown> | null | undefined>;
  readonly initOpt: import("@angular/core").InputSignal<any>;
  readonly option: import("@angular/core").InputSignal<import("echarts").EChartsCoreOption | undefined>;
  /** 事件绑定 */
  readonly on: import("@angular/core").InputSignal<ChartEChartsOn[]>;
  readonly events: import("@angular/core").OutputEmitterRef<ChartEChartsEvent>;
  private _chart;
  private readonly _loaded;
  readonly loaded: import("@angular/core").Signal<boolean>;
  private prev?;
  get chart(): ChartECharts | null;
  constructor();
  /** theme / initOpt 变更则重建，option 变更则增量更新 */
  private dispatch;
  private emit;
  private load;
  install(): this;
  destroy(): this;
  setOption(option: ChartEChartsOption, notMerge?: boolean, lazyUpdate?: boolean): this;
  ngOnDestroy(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<ChartEChartsComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<ChartEChartsComponent, "chart-echarts, [chart-echarts]", ["chartECharts"], {
    "width": {
      "alias": "width";
      "required": false;
      "isSignal": true;
    };
    "height": {
      "alias": "height";
      "required": false;
      "isSignal": true;
    };
    "theme": {
      "alias": "theme";
      "required": false;
      "isSignal": true;
    };
    "initOpt": {
      "alias": "initOpt";
      "required": false;
      "isSignal": true;
    };
    "option": {
      "alias": "option";
      "required": false;
      "isSignal": true;
    };
    "on": {
      "alias": "on";
      "required": false;
      "isSignal": true;
    };
  }, {
    "events": "events";
  }, never, never, true, never>;
}
export declare class ChartEChartsModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<ChartEChartsModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<ChartEChartsModule, never, [typeof i1.CommonModule, typeof i2.NzSkeletonModule, typeof ChartEChartsComponent], [typeof ChartEChartsComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<ChartEChartsModule>;
}