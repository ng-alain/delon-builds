import * as i0 from '@angular/core';
import { AfterViewInit, OnChanges } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import * as i1 from '@angular/common';
import * as i2 from '@angular/cdk/observers';
import * as i3 from 'ng-zorro-antd/tooltip';

declare class EllipsisComponent implements AfterViewInit, OnChanges {
    private readonly el;
    private readonly ngZone;
    private readonly dom;
    private readonly doc;
    private readonly cdr;
    private isSupportLineClamp;
    private orgEl;
    private shadowOrgEl;
    private shadowTextEl;
    private inited;
    orgHtml: SafeHtml;
    type: string;
    cls: {};
    text: string;
    targetCount: number;
    tooltip: boolean;
    length?: number;
    lines?: number;
    fullWidthRecognition: boolean;
    tail: string;
    get linsWord(): string;
    private get win();
    private getStrFullLength;
    private cutStrByFullLength;
    private bisection;
    private genType;
    private gen;
    private getEl;
    private executeOnStable;
    refresh(): void;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EllipsisComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EllipsisComponent, "ellipsis", ["ellipsis"], { "tooltip": { "alias": "tooltip"; "required": false; }; "length": { "alias": "length"; "required": false; }; "lines": { "alias": "lines"; "required": false; }; "fullWidthRecognition": { "alias": "fullWidthRecognition"; "required": false; }; "tail": { "alias": "tail"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_tooltip: unknown;
    static ngAcceptInputType_length: unknown;
    static ngAcceptInputType_lines: unknown;
    static ngAcceptInputType_fullWidthRecognition: unknown;
}

declare class EllipsisModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<EllipsisModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<EllipsisModule, never, [typeof i1.CommonModule, typeof i2.ObserversModule, typeof i3.NzTooltipModule, typeof EllipsisComponent], [typeof EllipsisComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<EllipsisModule>;
}

export { EllipsisComponent, EllipsisModule };
