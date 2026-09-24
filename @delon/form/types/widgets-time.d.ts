import * as i2 from '@delon/form';
import { SFUISchemaItem, SFDLSSize, ControlUIWidget, SFValue, WidgetRegistry, SFWidgetProvideConfig } from '@delon/form';
import * as i0 from '@angular/core';
import { OnInit } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i1 from '@angular/forms';
import * as i3 from 'ng-zorro-antd/time-picker';

interface SFTimeWidgetSchema extends SFUISchemaItem {
    size?: SFDLSSize;
    placeholder?: string;
    /**
     * **Just only support date-fns**
     *
     * Return the formatted date string in the given format, [Accepted tokens](https://date-fns.org/v2.12.0/docs/format), like this:
     * - `yyyy-MM-dd HH:mm:ss` Date time
     * - `t` Seconds timestamp
     * - `T` Milliseconds timestamp
     */
    format?: string;
    /**
     * To set the date format (equar [nzFormat](https://ng.ant.design/components/date-picker/zh#api))
     *
     * **TIPS** [nzFormat special instructions](https://ng.ant.design/components/date-picker/en#api)
     */
    displayFormat?: string;
    /**
     * 是否UTC新纪元（表示从 `1970` 开始计毫秒数），当 `type='number'` 时有效，默认：`false`
     */
    utcEpoch?: boolean;
    /**
     * Allow clearing text, default: `true`
     */
    allowEmpty?: boolean;
    /**
     * Clear tooltip of icon, default: `清除`
     */
    clearText?: string;
    /**
     * Default open panel value, default: `new Date()`
     */
    defaultOpenValue?: Date;
    /**
     * To specify the hours that cannot be selected
     */
    disabledHours?: () => number[];
    /**
     * To specify the minutes that cannot be selected
     */
    disabledMinutes?: (hour: number) => number[];
    /**
     * To specify the seconds that cannot be selected
     */
    disabledSeconds?: (hour: number, minute: number) => number[];
    /**
     * Hide the options that can not be selected, default: `false`
     */
    hideDisabledOptions?: boolean;
    /**
     * Display as 12 hours format, with default format, default: `h:mm:ss a`
     */
    use12Hours?: boolean;
    /**
     * Interval between hours in picker, default: `1`
     */
    hourStep?: number;
    /**
     * Interval between minutes in picker, default: `1`
     */
    minuteStep?: number;
    /**
     * Interval between seconds in picker, default: `1`
     */
    secondStep?: number;
    /**
     * ClassName of panel
     */
    popupClassName?: string;
    /**
     * text of the Now button
     *
     * 此刻按钮文本
     */
    nowText?: string;
    /**
     * text of the Ok button
     *
     * 确认按钮文本
     */
    okText?: string;
    /**
     * a callback function, can be executed when the selected time is changing
     */
    change?: (value: Date | null) => void;
    /**
     * a callback function which will be called while panel opening/closing
     */
    openChange?: (status: boolean) => void;
}

declare class TimeWidget extends ControlUIWidget<SFTimeWidgetSchema> implements OnInit {
    static readonly KEY = "time";
    private valueFormat;
    displayValue: Date | null;
    i: NzSafeAny;
    ngOnInit(): void;
    reset(value: SFValue): void;
    _change(value: Date | null): void;
    _openChange(status: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeWidget, "sf-time", never, {}, {}, never, never, true, never>;
}

declare class TimeWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TimeWidgetModule, never, [typeof i1.FormsModule, typeof i2.DelonFormModule, typeof i3.NzTimePickerModule, typeof TimeWidget], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TimeWidgetModule>;
}

declare function withTimeWidget(): SFWidgetProvideConfig;

export { TimeWidget, TimeWidgetModule, withTimeWidget };
export type { SFTimeWidgetSchema };
