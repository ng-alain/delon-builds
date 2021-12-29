import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, Renderer2, SimpleChange } from '@angular/core';
import { NumberInput } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { MediaService } from './media.service';
import { PlyrMediaSource, PlyrMediaType } from './plyr.types';
import * as i0 from "@angular/core";
export declare class MediaComponent implements OnChanges, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private srv;
    ngZone: NgZone;
    private platform;
    static ngAcceptInputType_delay: NumberInput;
    private _p;
    private videoEl;
    private time;
    private notify$;
    type: PlyrMediaType;
    source: string | PlyrMediaSource;
    options: NzSafeAny;
    delay: number;
    readonly ready: EventEmitter<any>;
    get player(): NzSafeAny;
    constructor(el: ElementRef<HTMLElement>, renderer: Renderer2, srv: MediaService, ngZone: NgZone, platform: Platform);
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
    static ɵfac: i0.ɵɵFactoryDeclaration<MediaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MediaComponent, "media", ["mediaComponent"], { "type": "type"; "source": "source"; "options": "options"; "delay": "delay"; }, { "ready": "ready"; }, never, ["*"]>;
}
