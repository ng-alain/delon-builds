import * as _angular_core from '@angular/core';
import { OnDestroy, ElementRef, DestroyRef, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { AlainChartConfig } from '@delon/util/config';
import { Types, Chart } from '@antv/g2';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

type G2InteractionType = 'none' | 'element-active' | 'active-region' | 'brush' | 'drag-move';

type G2Time = Date | string | number;

declare class G2Service implements OnDestroy {
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
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2Service, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<any>;
}

declare abstract class G2BaseComponent implements OnDestroy {
    protected readonly srv: G2Service;
    protected readonly el: ElementRef<HTMLElement>;
    protected readonly destroyRef: DestroyRef;
    /** 图表容器 */
    protected readonly node: Signal<ElementRef<HTMLElement>>;
    readonly delay: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly repaint: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly theme: _angular_core.InputSignal<string | Types.LooseObject>;
    readonly ready: _angular_core.OutputEmitterRef<Chart>;
    private readonly _loaded;
    /** 是否已进入安装流程（模板据此切换骨架屏） */
    readonly loaded: Signal<boolean>;
    protected _chart?: Chart;
    get chart(): Chart;
    get winG2(): NzSafeAny;
    /** 约定：名为 `data` 的输入即数据输入（全包唯一一处字符串） */
    private dataInput?;
    private destroyed;
    constructor();
    private dispatchInputChanges;
    /** 输入变更前置钩子；等价旧 `onChanges(changes)` */
    protected onInputChanges(_changed: ReadonlyArray<Signal<unknown>>): void;
    /**
     * 本次变更是否可以只调用 `changeData()` 而不重建图表。
     * 默认：变更集里只有名为 `data` 的输入 —— 等价旧 `onlyChangeData` 的默认实现。
     *
     * `Object.is` 与 `===` 对信号对象按引用比较完全等价；写成 `===` 会被
     * `@angular-eslint/no-uncalled-signals` 误判为「忘记调用信号」。
     */
    protected isDataOnly(changed: ReadonlyArray<Signal<unknown>>): boolean;
    /** 创建并渲染图表 */
    abstract install(): void;
    /** 仅数据变更时调用（G2 平滑过渡） */
    changeData(): void;
    /** 等同旧 `ngOnInit`，但在首次渲染后调用 */
    onInit(): void;
    /** 安装入口：幂等；delay 未到时组件已销毁则不会安装 */
    private load;
    protected destroyChart(): this;
    ngOnDestroy(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2BaseComponent, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<G2BaseComponent, never, never, { "delay": { "alias": "delay"; "required": false; "isSignal": true; }; "repaint": { "alias": "repaint"; "required": false; "isSignal": true; }; "theme": { "alias": "theme"; "required": false; "isSignal": true; }; }, { "ready": "ready"; }, never, never, true, never>;
}

declare function genMiniTooltipOptions(type: 'mini' | 'default', options?: Types.TooltipCfg): Types.TooltipCfg;

interface G2Input {
    name: string;
    signal: Signal<unknown>;
}
/**
 * 读取组件（含继承链）上声明的 signal input。
 *
 * `reflectComponentType` 是 Angular 公共 API，`inputs[].isSignal` 直接来自框架元数据
 * （`InputFlags.SignalBased`），因此清单与旧 `SimpleChanges` 的覆盖范围完全一致：
 * 框架声明了哪些输入就 diff 哪些输入，子类新增 `input()` 自动生效，无需登记。
 *
 * **副作用**：读 `host[propName]`，因此必须在子类字段初始化完成之后调用
 * （见 `watchInputs` 的懒解析注释）。
 */
declare function resolveInputs(host: object): readonly G2Input[];
/**
 * 监听本组件全部 signal input 的变更；首次执行只建立基线、不回调。
 *
 * 必须在注入上下文中调用（内部创建 effect）。副作用已用 `untracked` 隔离，
 * 避免 `install()` 读取 `viewChild` 查询等信号时污染依赖图。
 *
 * 懒解析：`resolveInputs` 读的是 `host[propName]`，而子类的 `input()` 字段在 `super()`
 * 之后才初始化；放进字段初始化器会拿到 `undefined`。effect 首次执行发生在 CD 期间，
 * 此时子类构造已完成，因此安全。
 */
declare function watchInputs(host: object, handler: (changed: ReadonlyArray<Signal<unknown>>, inputs: readonly G2Input[]) => void): void;

export { G2BaseComponent, G2Service, genMiniTooltipOptions, resolveInputs, watchInputs };
export type { G2Input, G2InteractionType, G2Time };
