import { ControlUIWidget, SFValue } from '@delon/form';
import { NzSegmentedOptions } from 'ng-zorro-antd/segmented';
import type { SFSegmentedWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class SegmentedWidget extends ControlUIWidget<SFSegmentedWidgetSchema> {
    static readonly KEY = "segmented";
    private _list?;
    get list(): NzSegmentedOptions;
    reset(value: SFValue): void;
    valueChange(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SegmentedWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SegmentedWidget, "sf-segmented", never, {}, {}, never, never, false, never>;
}
