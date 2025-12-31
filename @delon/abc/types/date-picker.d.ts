import * as i0 from '@angular/core';
import { OnDestroy, AfterViewInit, TemplateRef } from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from '@angular/forms';
import * as i3 from 'ng-zorro-antd/date-picker';
import { AlainDateRangePickerShortcut, AlainDateRangePickerShortcutItem } from '@delon/util/config';

declare class RangePickerDirective implements OnDestroy, AfterViewInit {
    private readonly dom;
    private readonly vcr;
    private readonly nativeComp;
    private readonly cogSrv;
    private defaultShortcuts;
    private _shortcut;
    private shortcutFactory;
    start: Date | null;
    end: Date | null;
    private locale;
    readonly shortcut: i0.InputSignalWithTransform<AlainDateRangePickerShortcut | null, string | AlainDateRangePickerShortcut | null>;
    readonly ngModelEnd: i0.ModelSignal<any>;
    private get dp();
    private get srv();
    constructor();
    private cd;
    private overrideNative;
    private refreshShortcut;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RangePickerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RangePickerDirective, "nz-range-picker[extend]", ["extendRangePicker"], { "shortcut": { "alias": "shortcut"; "required": false; "isSignal": true; }; "ngModelEnd": { "alias": "ngModelEnd"; "required": true; "isSignal": true; }; }, { "ngModelEnd": "ngModelEndChange"; }, never, never, true, never>;
}

declare class RangePickerShortcutTplComponent {
    readonly tpl: i0.Signal<TemplateRef<void>>;
    list: AlainDateRangePickerShortcutItem[];
    click(_: AlainDateRangePickerShortcutItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RangePickerShortcutTplComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RangePickerShortcutTplComponent, "ng-component", never, {}, {}, never, never, true, never>;
}

declare class DatePickerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatePickerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DatePickerModule, never, [typeof i1.CommonModule, typeof i2.FormsModule, typeof i3.NzDatePickerModule, typeof RangePickerDirective, typeof RangePickerShortcutTplComponent], [typeof RangePickerDirective, typeof RangePickerShortcutTplComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DatePickerModule>;
}

export { DatePickerModule, RangePickerDirective, RangePickerShortcutTplComponent };
