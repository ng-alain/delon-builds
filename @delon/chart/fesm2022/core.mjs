import * as i0 from '@angular/core';
import { inject, Injectable, reflectComponentType, effect, untracked, ElementRef, DestroyRef, viewChild, input, numberAttribute, booleanAttribute, output, signal, afterNextRender, Directive } from '@angular/core';
import { Subject } from 'rxjs';
import { AlainConfigService } from '@delon/util/config';
import { LazyService } from '@delon/util/other';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

class G2Service {
    cogSrv = inject(AlainConfigService);
    lazySrv = inject(LazyService);
    _cog;
    loading = false;
    loaded = false;
    notify$ = new Subject();
    get cog() {
        return this._cog;
    }
    set cog(val) {
        this._cog = this.cogSrv.merge('chart', {
            theme: '',
            libs: [
                'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.46/dist/g2.min.js',
                'https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.8/dist/data-set.js'
            ]
        }, val);
    }
    constructor() {
        this.cog = { theme: '' };
    }
    libLoad() {
        if (this.loading) {
            if (this.loaded) {
                this.notify$.next();
            }
            return this;
        }
        this.loading = true;
        this.lazySrv.load(this.cog.libs).then(() => {
            this.loaded = true;
            this.notify$.next();
        });
        return this;
    }
    get notify() {
        return this.notify$.asObservable();
    }
    ngOnDestroy() {
        this.notify$.unsubscribe();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2Service, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2Service, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });

// 内部模块：仅供 @delon/chart 内部（chart-echarts、water-wave 等入口点）使用，不是稳定的公开 API。
// ⚠️ 不要给本文件的声明加 JSDoc 的 at-internal 标记，也不要改用按声明生效的 stripInternal 配置：
// packages/tsconfig.lib.json 的 "stripInternal": true 会把被标注的声明从 types/core.d.ts 中删除，
// 而其他入口点需要跨入口点导入本模块的 resolveInputs / watchInputs，声明缺失会让库构建以 TS2305 失败。
// （详见 public_api.ts 的说明：该标记即便只在注释里被提及也会生效，已实测。）
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
function resolveInputs(host) {
    const type = host.constructor;
    const mirror = reflectComponentType(type);
    if (!mirror) {
        throw new Error(`[chart] "${type.name}" extends G2BaseComponent but is not a @Component.`);
    }
    return mirror.inputs
        .filter(i => i.isSignal)
        .map(({ propName }) => ({ name: propName, signal: host[propName] }));
}
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
function watchInputs(host, handler) {
    let inputs = null;
    let prev = null;
    effect(() => {
        inputs ??= resolveInputs(host);
        const next = [];
        const changed = [];
        inputs.forEach(({ signal }, index) => {
            const value = signal();
            next[index] = value;
            if (prev && !Object.is(value, prev[index])) {
                changed.push(signal);
            }
        });
        const isFirst = prev === null;
        prev = next;
        if (isFirst || changed.length === 0) {
            return;
        }
        untracked(() => handler(changed, inputs));
    });
}

class G2BaseComponent {
    srv = inject(G2Service);
    el = inject((ElementRef));
    destroyRef = inject(DestroyRef);
    /** 图表容器 */
    node = viewChild.required('container', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "node" }] : /* istanbul ignore next */ []));
    delay = input(0, { ...(ngDevMode ? { debugName: "delay" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    repaint = input(true, { ...(ngDevMode ? { debugName: "repaint" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    theme = input(this.srv.cog.theme, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "theme" }] : /* istanbul ignore next */ []));
    ready = output();
    _loaded = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_loaded" }] : /* istanbul ignore next */ []));
    /** 是否已进入安装流程（模板据此切换骨架屏） */
    loaded = this._loaded.asReadonly();
    _chart;
    get chart() {
        return this._chart;
    }
    get winG2() {
        return window.G2;
    }
    /** 约定：名为 `data` 的输入即数据输入（全包唯一一处字符串） */
    dataInput;
    destroyed = false;
    constructor() {
        // ① 输入变更分发：等价旧 ngOnChanges + onlyChangeData
        watchInputs(this, (changed, inputs) => {
            this.dataInput ??= inputs.find(i => i.name === 'data');
            this.dispatchInputChanges(changed);
        });
        // ② G2 类库就绪后启动（常驻订阅；load() 幂等，故无需 filter 双保险）
        this.srv.notify.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.load());
        // ③ 首次渲染后引导；SSR 下不执行，故无需 platform.isBrowser 判断
        afterNextRender(() => {
            this.onInit();
            if (this.winG2) {
                this.load();
            }
            else {
                this.srv.libLoad();
            }
        });
    }
    dispatchInputChanges(changed) {
        this.onInputChanges(changed);
        // 首次安装由 load() 负责；install() 末尾的 changeData() 会兜住此前的变更
        if (!this._chart) {
            return;
        }
        if (this.isDataOnly(changed)) {
            this.changeData();
            return;
        }
        if (!this.repaint()) {
            return;
        }
        this.destroyChart().install();
    }
    /** 输入变更前置钩子；等价旧 `onChanges(changes)` */
    onInputChanges(_changed) { }
    /**
     * 本次变更是否可以只调用 `changeData()` 而不重建图表。
     * 默认：变更集里只有名为 `data` 的输入 —— 等价旧 `onlyChangeData` 的默认实现。
     *
     * `Object.is` 与 `===` 对信号对象按引用比较完全等价；写成 `===` 会被
     * `@angular-eslint/no-uncalled-signals` 误判为「忘记调用信号」。
     */
    isDataOnly(changed) {
        const dataInput = this.dataInput?.signal;
        return !!dataInput && changed.length > 0 && changed.every(s => Object.is(s, dataInput));
    }
    /** 仅数据变更时调用（G2 平滑过渡） */
    changeData() { }
    /** 等同旧 `ngOnInit`，但在首次渲染后调用 */
    onInit() { }
    /** 安装入口：幂等；delay 未到时组件已销毁则不会安装 */
    load() {
        if (this._loaded()) {
            return;
        }
        this._loaded.set(true);
        // 此处用 zone 补丁的 setTimeout 而非 rxjs timer：afterNextRender 回调可能落在测试的
        // fakeAsync 区之外，rxjs 的 asyncScheduler 不经过 zone 补丁，flush() 便不会触发安装
        setTimeout(() => {
            if (this.destroyed) {
                return;
            }
            this.install();
        }, this.delay());
    }
    destroyChart() {
        this._chart?.destroy();
        return this;
    }
    ngOnDestroy() {
        this.destroyed = true;
        this.destroyChart();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2BaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.2.0", version: "22.1.7", type: G2BaseComponent, isStandalone: true, inputs: { delay: { classPropertyName: "delay", publicName: "delay", isSignal: true, isRequired: false, transformFunction: null }, repaint: { classPropertyName: "repaint", publicName: "repaint", isSignal: true, isRequired: false, transformFunction: null }, theme: { classPropertyName: "theme", publicName: "theme", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { ready: "ready" }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], descendants: true, isSignal: true }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2BaseComponent, decorators: [{
            type: Directive
        }], ctorParameters: () => [], propDecorators: { node: [{ type: i0.ViewChild, args: ['container', { isSignal: true }] }], delay: [{ type: i0.Input, args: [{ isSignal: true, alias: "delay", required: false }] }], repaint: [{ type: i0.Input, args: [{ isSignal: true, alias: "repaint", required: false }] }], theme: [{ type: i0.Input, args: [{ isSignal: true, alias: "theme", required: false }] }], ready: [{ type: i0.Output, args: ["ready"] }] } });

function genMiniTooltipOptions(type, options) {
    const res = {
        showTitle: false,
        showMarkers: true,
        enterable: true,
        domStyles: {
            'g2-tooltip': { padding: '0px' },
            'g2-tooltip-title': { display: 'none' },
            'g2-tooltip-list-item': { margin: '4px' }
        },
        ...options
    };
    if (type === 'mini') {
        res.position = 'top';
        res.domStyles['g2-tooltip'] = { padding: '0px', backgroundColor: 'transparent', boxShadow: 'none' };
        res.itemTpl = `<li>{value}</li>`;
        res.offset = 8;
    }
    return res;
}

/**
 * Generated bundle index. Do not edit.
 */

export { G2BaseComponent, G2Service, genMiniTooltipOptions, resolveInputs, watchInputs };
//# sourceMappingURL=core.mjs.map
