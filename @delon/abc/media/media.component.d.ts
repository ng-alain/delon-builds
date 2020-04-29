import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, Renderer2, SimpleChange } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { MediaService } from './media.service';
import { PlyrMediaSource, PlyrMediaType } from './plyr.types';
export declare class MediaComponent implements OnChanges, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private srv;
    private ngZone;
    private _p;
    private videoEl;
    type: PlyrMediaType;
    source: string | PlyrMediaSource;
    options: NzSafeAny;
    delay: number;
    readonly ready: EventEmitter<any>;
    get player(): NzSafeAny;
    constructor(el: ElementRef<HTMLElement>, renderer: Renderer2, srv: MediaService, ngZone: NgZone);
    private initDelay;
    private init;
    private ensureElement;
    private destroy;
    private uploadSource;
    ngAfterViewInit(): void;
    ngOnChanges(changes: {
        [p in keyof MediaComponent]?: SimpleChange;
    }): void;
    ngOnDestroy(): void;
}