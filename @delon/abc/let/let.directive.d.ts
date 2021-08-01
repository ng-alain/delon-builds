import { TemplateRef, ViewContainerRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
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
}
