import * as i0 from '@angular/core';
import { OnDestroy } from '@angular/core';
import * as Plyr from 'plyr';
import { Observable } from 'rxjs';
import { AlainMediaConfig } from '@delon/util/config';
import * as i1 from '@angular/common';

type MediaType = 'html5' | 'youtube' | 'video' | 'audio';
declare class MediaComponent implements OnDestroy {
    private readonly el;
    private readonly renderer;
    private readonly ngZone;
    private readonly srv;
    private readonly platform;
    private _p?;
    private videoEl?;
    readonly type: i0.InputSignal<MediaType>;
    readonly source: i0.InputSignal<string | Plyr.SourceInfo | undefined>;
    readonly options: i0.InputSignal<Plyr.Options | undefined>;
    readonly delay: i0.InputSignalWithTransform<number, unknown>;
    readonly ready: i0.OutputEmitterRef<Plyr>;
    get player(): Plyr | undefined | null;
    constructor();
    private init;
    private ensureElement;
    private destroy;
    private uploadSource;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MediaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MediaComponent, "media, [media]", ["mediaComponent"], { "type": { "alias": "type"; "required": false; "isSignal": true; }; "source": { "alias": "source"; "required": false; "isSignal": true; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; "delay": { "alias": "delay"; "required": false; "isSignal": true; }; }, { "ready": "ready"; }, never, ["*"], true, never>;
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
