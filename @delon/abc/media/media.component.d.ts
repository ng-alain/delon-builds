import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, Renderer2, SimpleChange } from '@angular/core';
import type Plyr from 'plyr';
import { NumberInput } from '@delon/util/decorator';
import { MediaService } from './media.service';
import * as i0 from "@angular/core";
export type MediaType = 'html5' | 'youtube' | 'video' | 'audio';
export declare class MediaComponent implements OnChanges, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private srv;
    private ngZone;
    private platform;
    static ngAcceptInputType_delay: NumberInput;
    private _p?;
    private videoEl?;
    private destroy$;
    type: MediaType;
    source?: string | Plyr.SourceInfo;
    options?: Plyr.Options;
    delay: number;
    readonly ready: EventEmitter<Plyr>;
    get player(): Plyr | undefined | null;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<MediaComponent, "media", ["mediaComponent"], { "type": { "alias": "type"; "required": false; }; "source": { "alias": "source"; "required": false; }; "options": { "alias": "options"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; }, { "ready": "ready"; }, never, ["*"], false, never>;
}
