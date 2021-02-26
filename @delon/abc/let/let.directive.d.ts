import { TemplateRef, ViewContainerRef } from '@angular/core';
export declare class LetContext<T> {
    private readonly internalDirectiveInstance;
    constructor(internalDirectiveInstance: LetDirective<T>);
    get $implicit(): T;
    get let(): T;
}
export declare class LetDirective<T> {
    static ngTemplateContextGuard<T>(_dir: LetDirective<T>, _ctx: any): _ctx is LetDirective<T>;
    let: T;
    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<LetContext<T>>);
}
