import { AfterViewInit, ChangeDetectorRef, Injector } from '@angular/core';
import { LocaleData } from '@delon/theme';
import { SFValue } from './interface';
import { ArrayProperty } from './model/array.property';
import { FormProperty } from './model/form.property';
import { ObjectProperty } from './model/object.property';
import { SFSchema } from './schema';
import { SFUISchemaItem, SFOptionalHelp } from './schema/ui';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
import { SFArrayWidgetSchema, SFObjectWidgetSchema } from './widgets';
export declare abstract class Widget<T extends FormProperty, UIT extends SFUISchemaItem> implements AfterViewInit {
    readonly cd: ChangeDetectorRef;
    readonly injector: Injector;
    readonly sfItemComp?: SFItemComponent | undefined;
    readonly sfComp?: SFComponent | undefined;
    formProperty: T;
    error: string;
    showError: boolean;
    id: string;
    schema: SFSchema;
    ui: UIT;
    firstVisual: boolean;
    readonly cls: string | string[];
    readonly disabled: boolean | null;
    readonly l: LocaleData;
    readonly oh: SFOptionalHelp;
    constructor(cd: ChangeDetectorRef, injector: Injector, sfItemComp?: SFItemComponent | undefined, sfComp?: SFComponent | undefined);
    ngAfterViewInit(): void;
    setValue(value: SFValue): void;
    readonly value: any;
    detectChanges(onlySelf?: boolean): void;
    abstract reset(value: SFValue): void;
}
export declare class ControlWidget extends Widget<FormProperty, SFUISchemaItem> {
    reset(_value: SFValue): void;
}
export declare class ControlUIWidget<UIT extends SFUISchemaItem> extends Widget<FormProperty, UIT> {
    reset(_value: SFValue): void;
}
export declare class ArrayLayoutWidget extends Widget<ArrayProperty, SFArrayWidgetSchema> implements AfterViewInit {
    reset(_value: SFValue): void;
    ngAfterViewInit(): void;
}
export declare class ObjectLayoutWidget extends Widget<ObjectProperty, SFObjectWidgetSchema> implements AfterViewInit {
    reset(_value: SFValue): void;
    ngAfterViewInit(): void;
}
