import * as i0 from '@angular/core';
import { OnDestroy, OnInit, OnChanges, ElementRef, NgZone, ChangeDetectorRef, EventEmitter, SimpleChanges } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { AlainChartConfig } from '@delon/util/config';
import { Platform } from '@angular/cdk/platform';
import { Chart, Types } from '@antv/g2';
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
    static ɵfac: i0.ɵɵFactoryDeclaration<G2Service, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<G2Service>;
}

declare abstract class G2BaseComponent implements OnInit, OnChanges, OnDestroy {
    protected readonly srv: G2Service;
    protected readonly el: ElementRef<HTMLElement>;
    protected readonly ngZone: NgZone;
    protected readonly platform: Platform;
    protected readonly cdr: ChangeDetectorRef;
    get chart(): Chart;
    get winG2(): NzSafeAny;
    constructor();
    repaint: boolean;
    protected node: ElementRef;
    protected resize$?: Subscription;
    protected destroy$: Subject<void>;
    protected _chart: Chart;
    loaded: boolean;
    delay: number;
    theme: string | Types.LooseObject;
    readonly ready: EventEmitter<Chart>;
    /** 检查是否只变更数据 */
    onlyChangeData?: (changes: SimpleChanges) => boolean;
    abstract install(): void;
    /** G2数据变更 */
    changeData(): void;
    /** 等同 `ngOnInit` */
    onInit(): void;
    /** 等同 `ngOnChanges` */
    onChanges(_: SimpleChanges): void;
    private load;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    protected destroyChart(): this;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<G2BaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<G2BaseComponent, never, never, { "repaint": { "alias": "repaint"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; }, { "ready": "ready"; }, never, never, true, never>;
    static ngAcceptInputType_repaint: unknown;
    static ngAcceptInputType_delay: unknown;
}

declare function genMiniTooltipOptions(type: 'mini' | 'default', options?: Types.TooltipCfg): Types.TooltipCfg;

export { G2BaseComponent, G2Service, genMiniTooltipOptions };
export type { G2InteractionType, G2Time };
