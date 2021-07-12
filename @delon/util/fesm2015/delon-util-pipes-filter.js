import { Pipe, NgModule } from '@angular/core';

class FilterPipe {
    /**
     * Filter array
     *
     * 过滤数组
     */
    transform(array, matcher, ...args) {
        return array.filter(i => matcher(i, ...args));
    }
}
FilterPipe.decorators = [
    { type: Pipe, args: [{ name: 'filter' },] }
];

const PIPES = [FilterPipe];
class FilterPipeModule {
}
FilterPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: PIPES,
                exports: PIPES
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { FilterPipe, FilterPipeModule };
//# sourceMappingURL=delon-util-pipes-filter.js.map
