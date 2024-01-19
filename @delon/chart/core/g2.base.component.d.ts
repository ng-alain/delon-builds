import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import type { Chart, Types } from '@antv/g2';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { G2Service } from './g2.servicce';
import * as i0 from "@angular/core";
export declare abstract class G2BaseComponent implements OnInit, OnChanges, OnDestroy {
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
    static ɵdir: i0.ɵɵDirectiveDeclaration<G2BaseComponent, never, never, { "repaint": { "alias": "repaint"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; }, { "ready": "ready"; }, never, never, false, never>;
    static ngAcceptInputType_repaint: unknown;
    static ngAcceptInputType_delay: unknown;
}
