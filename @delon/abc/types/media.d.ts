import * as i0 from '@angular/core';
import { OnChanges, AfterViewInit, OnDestroy, EventEmitter, SimpleChange } from '@angular/core';
import * as Plyr from 'plyr';
import { Observable } from 'rxjs';
import { AlainMediaConfig } from '@delon/util/config';
import * as i1 from '@angular/common';

type MediaType = 'html5' | 'youtube' | 'video' | 'audio';
declare class MediaComponent implements OnChanges, AfterViewInit, OnDestroy {
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

declare class MediaService {
    private readonly cogSrv;
    private readonly lazySrv;
    private _cog;
    private loading;
    private loaded;
    private notify$;
    get cog(): AlainMediaConfig;
    set cog(val: AlainMediaConfig);
    load(): this;
    notify(): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MediaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MediaService>;
}

declare class MediaModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MediaModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MediaModule, never, [typeof i1.CommonModule, typeof MediaComponent], [typeof MediaComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MediaModule>;
}

export { MediaComponent, MediaModule, MediaService };
export type { MediaType };
