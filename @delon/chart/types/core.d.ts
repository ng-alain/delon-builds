import { Chart, G2Spec, Theme, TooltipComponent } from "@antv/g2";
import { NzSafeAny } from "ng-zorro-antd/core/types";
import * as i0 from "@angular/core";
import { DestroyRef, ElementRef, OnDestroy, Signal } from "@angular/core";
import { Observable } from "rxjs";
import { AlainChartConfig } from "@delon/util/config";
/** 交互类型词汇表（自 v4 保留的公开 API）；v5 的名称不同，映射见 `toInteraction()` */
export type G2InteractionType = 'none' | 'element-active' | 'active-region' | 'brush' | 'drag-move';
/** `G2InteractionType` → v5 `interaction` spec；无忠实对应物的值降级为无交互 */
export declare function toInteraction(type: G2InteractionType | undefined): G2Spec['interaction'];
/** G2 v5 未导出事件类型，这里给出图表交互事件的最小结构约定，供各组件的 `ev` 字段使用 */
export interface G2Event {
  /** 命中元素对应的数据项 */
  data?: {
    data?: NzSafeAny;
  };
  /** 被命中的元素（`@antv/g` DisplayObject），不得依赖其内部结构 */
  target?: NzSafeAny;
  /** 画布坐标 */
  x?: number;
  y?: number;
  nativeEvent?: NzSafeAny;
  [key: string]: NzSafeAny;
}
export type G2Time = Date | string | number;
export declare class G2Service implements OnDestroy {
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
  static ɵfac: i0.ɵɵFactoryDeclaration<G2Service, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export declare abstract class G2BaseComponent implements OnDestroy {
  protected readonly srv: G2Service;
  protected readonly el: ElementRef<any>;
  protected readonly destroyRef: DestroyRef;
  protected readonly node: Signal<ElementRef<HTMLElement>>;
  readonly delay: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly repaint: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly theme: import("@angular/core").InputSignal<string | Record<string, unknown>>;
  /** 首帧渲染完成后 emit 一次 */
  readonly ready: import("@angular/core").OutputEmitterRef<Chart>;
  /** 渲染失败（含未加载 G2、`buildSpec()` 抛错） */
  readonly error: import("@angular/core").OutputEmitterRef<unknown>;
  private readonly _loaded;
  readonly loaded: Signal<boolean>;
  protected _chart?: Chart;
  get chart(): Chart;
  get winG2(): NzSafeAny;
  /** 约定：名为 `data` 的输入即数据输入 */
  private dataInput?;
  private destroyed;
  private installed;
  private readySettled;
  /** 串行链：所有 v5 调用串行执行，保证不交错 */
  private pending;
  /** 帧序号：超过当前值的帧一律丢弃 */
  private epoch;
  constructor();
  changeData(): void;
  /** 组件声明的 v5 spec */
  protected buildSpec(): G2Spec;
  protected chartOptions(): G2Spec;
  protected containerOf(): HTMLElement;
  protected dataOf(): unknown;
  protected afterCreate(_chart: Chart): void;
  protected onRendered(): void;
  protected onDataChange(): void;
  protected onInputChanges(_changed: ReadonlyArray<Signal<unknown>>): void;
  /** 本次变更是否可以只调用 `changeData()` 而不重下 spec；默认仅名为 `data` 的输入 */
  protected isDataOnly(changed: ReadonlyArray<Signal<unknown>>): boolean;
  protected repaintSpec(): Promise<void>;
  private dispatchInputChanges;
  /** 安装入口：幂等；delay 未到时组件已销毁则不会安装 */
  private load;
  /** 安装入口：默认创建 v5 Chart 并应用 spec；自行管理图表的组件可覆盖本方法 */
  protected install(): void;
  /** 标记首次渲染完成（收起骨架屏）；覆盖 `install()` 的组件需自行调用 */
  protected markLoaded(): void;
  private settleReady;
  private applySpec;
  private applyData;
  private enqueue;
  ngOnDestroy(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<G2BaseComponent, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<G2BaseComponent, never, never, {
    "delay": {
      "alias": "delay";
      "required": false;
      "isSignal": true;
    };
    "repaint": {
      "alias": "repaint";
      "required": false;
      "isSignal": true;
    };
    "theme": {
      "alias": "theme";
      "required": false;
      "isSignal": true;
    };
  }, {
    "ready": "ready";
    "error": "error";
  }, never, never, true, never>;
}
/** mini tooltip 的 spec 片段：外观由 theme 承担，位置/偏移/指示线由 `interaction.tooltip` 承担 */
export declare function genMiniTooltipOptions(type: 'mini' | 'default', options?: {
  crosshairs?: boolean;
}): {
  tooltip: TooltipComponent;
  interaction: G2Spec['interaction'];
};
export type G2Padding = number | number[] | 'auto';
export interface G2ViewSpecOptions {
  theme: Theme | undefined;
  padding?: G2Padding;
  height?: number;
  width?: number;
  animate?: boolean;
  autoFit?: boolean;
  interaction?: G2InteractionType;
}
/** 主题归一化：空值（`undefined` 或空串）统一取内置默认主题 `{ type: 'classic' }`，对象按 v5 `Theme` 结构透传 */
export declare function toTheme(theme: Theme | undefined): Theme;
/** 内边距归一化：四元数组需拆成 `paddingTop/Right/Bottom/Left`（v5 的 `Padding` 只接受 `number | 'auto'`） */
export declare function toPadding(padding: G2Padding | undefined): Record<string, unknown>;
/** 组件共用：产出 v5 view 的公共片段，组件再补 `data` / `children` 等 */
export type G2ViewSpecFragment = G2Spec & {
  animate?: boolean;
  autoFit?: boolean;
  interaction?: G2Spec['interaction'];
};
export declare function viewSpec(options: G2ViewSpecOptions): G2ViewSpecFragment;
/** 一个 signal input 的登记项：输入名 + 读取它的 signal。
 *
 * @internal
 */
export interface G2Input {
  name: string;
  signal: Signal<unknown>;
}
/** 读取组件（含继承链）上声明的 signal input；读 `host[propName]`，须待子类字段初始化完成。
 *
 * @internal
 */
export declare function resolveInputs(host: object): readonly G2Input[];
/** 监听本组件全部 signal input 的变更；须在注入上下文中调用，首次执行只建立基线、不回调。
 *
 * @internal
 */
export declare function watchInputs(host: object, handler: (changed: ReadonlyArray<Signal<unknown>>, inputs: readonly G2Input[]) => void): void;