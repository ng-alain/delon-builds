import * as _angular_core from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import * as i1 from '@angular/common';
import * as i2 from '@angular/cdk/observers';
import * as i3 from 'ng-zorro-antd/tooltip';

declare class EllipsisComponent {
    private readonly el;
    private readonly injector;
    private readonly dom;
    private readonly doc;
    private isSupportLineClamp;
    private readonly orgEl;
    private readonly shadowOrgEl;
    private readonly shadowTextEl;
    protected orgHtml: _angular_core.WritableSignal<SafeHtml | null>;
    protected type: _angular_core.WritableSignal<string>;
    protected cls: _angular_core.WritableSignal<Record<string, any>>;
    readonly text: _angular_core.WritableSignal<string>;
    targetCount: number;
    readonly tooltip: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly length: _angular_core.InputSignalWithTransform<number | null, unknown>;
    readonly lines: _angular_core.InputSignalWithTransform<number | null, unknown>;
    readonly fullWidthRecognition: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly tail: _angular_core.InputSignal<string>;
    protected get linsWord(): string;
    private get win();
    constructor();
    private getStrFullLength;
    private cutStrByFullLength;
    private bisection;
    private genType;
    private gen;
    private getEl;
    protected refresh(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<EllipsisComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<EllipsisComponent, "ellipsis", ["ellipsis"], { "tooltip": { "alias": "tooltip"; "required": false; "isSignal": true; }; "length": { "alias": "length"; "required": false; "isSignal": true; }; "lines": { "alias": "lines"; "required": false; "isSignal": true; }; "fullWidthRecognition": { "alias": "fullWidthRecognition"; "required": false; "isSignal": true; }; "tail": { "alias": "tail"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class EllipsisModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<EllipsisModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<EllipsisModule, never, [typeof i1.CommonModule, typeof i2.ObserversModule, typeof i3.NzTooltipModule, typeof EllipsisComponent], [typeof EllipsisComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<EllipsisModule>;
}

export { EllipsisComponent, EllipsisModule };
