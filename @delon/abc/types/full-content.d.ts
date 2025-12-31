import * as i0 from '@angular/core';
import { AfterViewInit, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import * as i1 from '@angular/common';

declare class FullContentComponent implements AfterViewInit, OnInit, OnChanges, OnDestroy {
    private readonly destroy$;
    private readonly el;
    private readonly cdr;
    private readonly srv;
    private readonly router;
    private readonly doc;
    private bodyEl;
    private inited;
    private id;
    _height: number;
    hideTitle: i0.InputSignalWithTransform<boolean, unknown>;
    padding: i0.InputSignalWithTransform<number, unknown>;
    fullscreen: i0.ModelSignal<boolean | undefined>;
    private updateCls;
    private update;
    private updateHeight;
    private removeInBody;
    ngOnInit(): void;
    toggle(): void;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
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
    _click(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FullContentToggleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FullContentToggleDirective, "[full-toggle]", ["fullToggle"], {}, {}, never, never, true, never>;
}

declare class FullContentModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FullContentModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FullContentModule, never, [typeof i1.CommonModule, typeof FullContentComponent, typeof FullContentToggleDirective], [typeof FullContentComponent, typeof FullContentToggleDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FullContentModule>;
}

export { FullContentComponent, FullContentModule, FullContentService, FullContentToggleDirective };
