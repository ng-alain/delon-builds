import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Chart, Types } from '@antv/g2';
import { NumberInput } from '@delon/util/decorator';
import { Subject, Subscription } from 'rxjs';
import { G2Service } from './g2.servicce';
export declare abstract class G2BaseComponent implements OnInit, OnChanges, OnDestroy {
    protected srv: G2Service;
    protected el: ElementRef<HTMLElement>;
    protected ngZone: NgZone;
    protected platform: Platform;
    protected cdr: ChangeDetectorRef;
    static ngAcceptInputType_delay: NumberInput;
    protected node: ElementRef;
    protected resize$: Subscription;
    protected destroy$: Subject<void>;
    protected _chart: Chart;
    loaded: boolean;
    delay: number;
    theme: string | Types.LooseObject;
    get chart(): Chart;
    abstract install(): void;
    abstract attachChart(): void;
    onInit(): void;
    onChanges(): void;
    constructor(srv: G2Service, el: ElementRef<HTMLElement>, ngZone: NgZone, platform: Platform, cdr: ChangeDetectorRef);
    private load;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
