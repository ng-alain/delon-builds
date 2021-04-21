import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Chart, Types } from '@antv/g2';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
import { Subject, Subscription } from 'rxjs';
import { G2Service } from './g2.servicce';
export declare abstract class G2BaseComponent implements OnInit, OnChanges, OnDestroy {
    protected srv: G2Service;
    protected el: ElementRef<HTMLElement>;
    protected ngZone: NgZone;
    protected platform: Platform;
    protected cdr: ChangeDetectorRef;
    get chart(): Chart;
    constructor(srv: G2Service, el: ElementRef<HTMLElement>, ngZone: NgZone, platform: Platform, cdr: ChangeDetectorRef);
    static ngAcceptInputType_repaint: BooleanInput;
    static ngAcceptInputType_delay: NumberInput;
    repaint: boolean;
    protected node: ElementRef;
    protected resize$: Subscription;
    protected destroy$: Subject<void>;
    protected _chart: Chart;
    loaded: boolean;
    delay: number;
    theme: string | Types.LooseObject;
    onlyChangeData?: (changes: SimpleChanges) => boolean;
    abstract install(): void;
    changeData(): void;
    onInit(): void;
    onChanges(_: SimpleChanges): void;
    private load;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    protected destroyChart(): this;
    ngOnDestroy(): void;
}
