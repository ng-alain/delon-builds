import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, Renderer2 } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { MediaService } from './media.service';
export declare class MediaComponent implements OnChanges, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private srv;
    private ngZone;
    private cdr;
    private _p;
    private videoEl;
    src: string;
    type: 'video' | 'audio';
    options: NzSafeAny;
    delay: number;
    get player(): NzSafeAny;
    constructor(el: ElementRef<HTMLElement>, renderer: Renderer2, srv: MediaService, ngZone: NgZone, cdr: ChangeDetectorRef);
    private initDelay;
    private init;
    private ensureElement;
    private destroy;
    private uploadSource;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
