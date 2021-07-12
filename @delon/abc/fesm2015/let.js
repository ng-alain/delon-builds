import { Directive, ViewContainerRef, Inject, TemplateRef, Input, NgModule } from '@angular/core';

class LetContext {
    constructor(dir) {
        this.dir = dir;
    }
    get $implicit() {
        return this.dir.let;
    }
    get let() {
        return this.dir.let;
    }
}
class LetDirective {
    constructor(vc, ref) {
        vc.createEmbeddedView(ref, new LetContext(this));
    }
    static ngTemplateContextGuard(_dir, _ctx) {
        return true;
    }
}
LetDirective.decorators = [
    { type: Directive, args: [{ selector: '[let]' },] }
];
LetDirective.ctorParameters = () => [
    { type: ViewContainerRef, decorators: [{ type: Inject, args: [ViewContainerRef,] }] },
    { type: TemplateRef, decorators: [{ type: Inject, args: [TemplateRef,] }] }
];
LetDirective.propDecorators = {
    let: [{ type: Input }]
};

const DIRECTIVES = [LetDirective];
class LetModule {
}
LetModule.decorators = [
    { type: NgModule, args: [{
                declarations: DIRECTIVES,
                exports: DIRECTIVES,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { LetContext, LetDirective, LetModule };
//# sourceMappingURL=let.js.map
