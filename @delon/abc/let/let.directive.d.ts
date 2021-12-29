import { TemplateRef, ViewContainerRef } from '@angular/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class LetContext<T> {
    private readonly dir;
    constructor(dir: LetDirective<T>);
    get $implicit(): T;
    get let(): T;
}
export declare class LetDirective<T> {
    let: T;
    constructor(vc: ViewContainerRef, ref: TemplateRef<LetContext<T>>);
    static ngTemplateContextGuard<T>(_dir: LetDirective<T>, _ctx: NzSafeAny): _ctx is LetDirective<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LetDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LetDirective<any>, "[let]", never, { "let": "let"; }, {}, never>;
}
