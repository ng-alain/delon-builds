import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooleanInput, NumberInput } from '@delon/util';
import { FullContentService } from './full-content.service';
import * as i0 from "@angular/core";
export declare class FullContentComponent implements AfterViewInit, OnInit, OnChanges, OnDestroy {
    private el;
    private cdr;
    private srv;
    private router;
    private doc;
    static ngAcceptInputType_fullscreen: BooleanInput;
    static ngAcceptInputType_hideTitle: BooleanInput;
    static ngAcceptInputType_padding: NumberInput;
    private bodyEl;
    private inited;
    private srv$;
    private route$;
    private id;
    private scroll$;
    _height: number;
    fullscreen: boolean;
    hideTitle: boolean;
    padding: number;
    readonly fullscreenChange: EventEmitter<boolean>;
    constructor(el: ElementRef<HTMLElement>, cdr: ChangeDetectorRef, srv: FullContentService, router: Router, doc: any);
    private updateCls;
    private update;
    private updateHeight;
    private removeInBody;
    ngOnInit(): void;
    toggle(): void;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<FullContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FullContentComponent, "full-content", ["fullContent"], { "fullscreen": "fullscreen"; "hideTitle": "hideTitle"; "padding": "padding"; }, { "fullscreenChange": "fullscreenChange"; }, never, ["*"]>;
}
