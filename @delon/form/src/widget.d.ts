import { AfterViewInit, ChangeDetectorRef, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LocaleData } from '@delon/theme';
import { SFValue } from './interface';
import { ArrayProperty } from './model/array.property';
import { FormProperty } from './model/form.property';
import { ObjectProperty } from './model/object.property';
import { SFSchema } from './schema';
import { SFOptionalHelp, SFUISchemaItem } from './schema/ui';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
import { SFArrayWidgetSchema, SFObjectWidgetSchema } from './widgets';
import * as i0 from "@angular/core";
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
    get cls(): string | string[];
    get disabled(): boolean | null;
    get l(): LocaleData;
    get oh(): SFOptionalHelp;
    get dom(): DomSanitizer;
    get cleanValue(): boolean;
    constructor(cd: ChangeDetectorRef, injector: Injector, sfItemComp?: SFItemComponent | undefined, sfComp?: SFComponent | undefined);
    ngAfterViewInit(): void;
    setValue(value: SFValue): void;
    get value(): any;
    detectChanges(onlySelf?: boolean): void;
    abstract reset(value: SFValue): void;
    abstract afterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<Widget<any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<Widget<any, any>, never, never, {}, {}, never>;
}
export declare class ControlWidget extends Widget<FormProperty, SFUISchemaItem> {
    reset(_value: SFValue): void;
    afterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<ControlWidget, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ControlWidget, never, never, {}, {}, never>;
}
export declare class ControlUIWidget<UIT extends SFUISchemaItem> extends Widget<FormProperty, UIT> {
    reset(_value: SFValue): void;
    afterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<ControlUIWidget<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ControlUIWidget<any>, never, never, {}, {}, never>;
}
export declare class ArrayLayoutWidget extends Widget<ArrayProperty, SFArrayWidgetSchema> implements AfterViewInit {
    reset(_value: SFValue): void;
    afterViewInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<ArrayLayoutWidget, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ArrayLayoutWidget, never, never, {}, {}, never>;
}
export declare class ObjectLayoutWidget extends Widget<ObjectProperty, SFObjectWidgetSchema> implements AfterViewInit {
    reset(_value: SFValue): void;
    afterViewInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<ObjectLayoutWidget, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ObjectLayoutWidget, never, never, {}, {}, never>;
}
