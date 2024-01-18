import { AfterViewInit, EventEmitter, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import type Plyr from 'plyr';
import * as i0 from "@angular/core";
export type MediaType = 'html5' | 'youtube' | 'video' | 'audio';
export declare class MediaComponent implements OnChanges, AfterViewInit, OnDestroy {
    private readonly destroy$;
    private readonly el;
    private readonly renderer;
    private readonly ngZone;
    private readonly srv;
    private readonly platform;
    private _p?;
    private videoEl?;
    type: MediaType;
    source?: string | Plyr.SourceInfo;
    options?: Plyr.Options;
    delay: number;
    readonly ready: EventEmitter<Plyr>;
    get player(): Plyr | undefined | null;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<MediaComponent, "media, [media]", ["mediaComponent"], { "type": { "alias": "type"; "required": false; }; "source": { "alias": "source"; "required": false; }; "options": { "alias": "options"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; }, { "ready": "ready"; }, never, ["*"], true, never>;
    static ngAcceptInputType_delay: unknown;
}
