import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Chart, Types } from '@antv/g2';
import { NumberInput } from '@delon/util';
import { Subject, Subscription } from 'rxjs';
import { G2Service } from './g2.servicce';
export declare abstract class G2BaseComponent implements OnInit, OnChanges, OnDestroy {
    protected srv: G2Service;
    protected ngZone: NgZone;
    protected platform: Platform;
    private cdr;
    static ngAcceptInputType_delay: NumberInput;
    protected resize$: Subscription;
    protected destroy$: Subject<void>;
    protected _chart: Chart;
    loaded: boolean;
    delay: number;
    theme: string | Types.LooseObject;
    get chart(): Chart;
    abstract install(): void;
    abstract attachChart(): void;
    constructor(srv: G2Service, ngZone: NgZone, platform: Platform, cdr: ChangeDetectorRef);
    private load;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
