import { ElementRef, ChangeDetectorRef, EventEmitter, OnChanges, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FullContentService } from './full-content.service';
export declare class FullContentComponent implements AfterViewInit, OnInit, OnChanges, OnDestroy {
    private el;
    private cd;
    private srv;
    private router;
    private doc;
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
    fullscreenChange: EventEmitter<boolean>;
    constructor(el: ElementRef, cd: ChangeDetectorRef, srv: FullContentService, router: Router, doc: any);
    private updateCls;
    private update;
    private updateHeight;
    private removeInBody;
    ngOnInit(): void;
    toggle(): void;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
