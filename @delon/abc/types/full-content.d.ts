import * as i0 from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import * as i1 from '@angular/common';

declare class FullContentComponent implements OnDestroy {
    private readonly el;
    private readonly srv;
    private readonly router;
    private readonly doc;
    private bodyEl;
    private id;
    _height: i0.WritableSignal<number>;
    readonly hideTitle: i0.InputSignalWithTransform<boolean, unknown>;
    readonly padding: i0.InputSignalWithTransform<number, unknown>;
    readonly fullscreen: i0.ModelSignal<boolean | undefined>;
    constructor();
    private updateCls;
    private update;
    private updateHeight;
    private removeInBody;
    toggle(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FullContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FullContentComponent, "full-content", ["fullContent"], { "hideTitle": { "alias": "hideTitle"; "required": false; "isSignal": true; }; "padding": { "alias": "padding"; "required": false; "isSignal": true; }; "fullscreen": { "alias": "fullscreen"; "required": false; "isSignal": true; }; }, { "fullscreen": "fullscreenChange"; }, never, ["*"], true, never>;
}

declare class FullContentService {
    private _change;
    /** 切换全屏工作区状态 */
    toggle(): void;
    get change(): Observable<boolean | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FullContentService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FullContentService>;
}

declare class FullContentToggleDirective {
    private readonly parent;
    protected _click(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FullContentToggleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FullContentToggleDirective, "[full-toggle]", ["fullToggle"], {}, {}, never, never, true, never>;
}

declare class FullContentModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FullContentModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FullContentModule, never, [typeof i1.CommonModule, typeof FullContentComponent, typeof FullContentToggleDirective], [typeof FullContentComponent, typeof FullContentToggleDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FullContentModule>;
}

export { FullContentComponent, FullContentModule, FullContentService, FullContentToggleDirective };
