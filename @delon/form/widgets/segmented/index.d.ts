import * as i2 from '@delon/form';
import { SFUISchemaItem, SFValue, ControlUIWidget, WidgetRegistry, SFWidgetProvideConfig } from '@delon/form';
import * as i3 from 'ng-zorro-antd/segmented';
import { NzSegmentedOptions } from 'ng-zorro-antd/segmented';
import { Observable } from 'rxjs';
import * as i0 from '@angular/core';
import * as i1 from '@angular/forms';

interface SFSegmentedWidgetSchema extends SFUISchemaItem {
    /**
     * 异步数据源
     */
    asyncData?: () => Observable<NzSegmentedOptions>;
    /**
     * Option to fit width to its parent's width
     */
    block?: boolean;
    /**
     * Emits when index of the currently selected option changes
     */
    valueChange?: (data: {
        index: string | number;
        item: SFValue;
    }) => void;
}

declare class SegmentedWidget extends ControlUIWidget<SFSegmentedWidgetSchema> {
    static readonly KEY = "segmented";
    private _list?;
    get list(): NzSegmentedOptions;
    reset(value: SFValue): void;
    valueChange(index: string | number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SegmentedWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SegmentedWidget, "sf-segmented", never, {}, {}, never, never, true, never>;
}

declare class SegmentedWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<SegmentedWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SegmentedWidgetModule, never, [typeof i1.FormsModule, typeof i2.DelonFormModule, typeof i3.NzSegmentedModule, typeof SegmentedWidget], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SegmentedWidgetModule>;
}

declare function withSegmentedWidget(): SFWidgetProvideConfig;

export { SegmentedWidget, SegmentedWidgetModule, withSegmentedWidget };
export type { SFSegmentedWidgetSchema };
