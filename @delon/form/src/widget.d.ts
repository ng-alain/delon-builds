import { AfterViewInit, ChangeDetectorRef, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LocaleData } from '@delon/theme';
import { NgClassType, NzSafeAny } from 'ng-zorro-antd/core/types';
import type { SFValue } from './interface';
import { ArrayProperty } from './model/array.property';
import { FormProperty } from './model/form.property';
import { ObjectProperty } from './model/object.property';
import type { SFSchema } from './schema';
import type { SFOptionalHelp, SFUISchemaItem } from './schema/ui';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
import type { SFArrayWidgetSchema, SFObjectWidgetSchema } from './widgets';
import * as i0 from "@angular/core";
export declare abstract class Widget<T extends FormProperty, UIT extends SFUISchemaItem> implements AfterViewInit {
    readonly cd: ChangeDetectorRef;
    readonly injector: Injector;
    readonly sfItemComp?: SFItemComponent | undefined;
    readonly sfComp?: SFComponent | undefined;
    formProperty: T;
    error?: string;
    showError: boolean;
    id: string;
    schema: SFSchema;
    ui: UIT;
    get cls(): NgClassType;
    get disabled(): boolean;
    get l(): LocaleData;
    get oh(): SFOptionalHelp;
    get dom(): DomSanitizer;
    get cleanValue(): boolean;
    constructor(cd: ChangeDetectorRef, injector: Injector, sfItemComp?: SFItemComponent | undefined, sfComp?: SFComponent | undefined);
    ngAfterViewInit(): void;
    setValue(value: SFValue): void;
    get value(): NzSafeAny;
    detectChanges(onlySelf?: boolean): void;
    abstract reset(value: SFValue): void;
    abstract afterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Widget<any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Widget<any, any>, never, never, {}, {}, never, never, false, never>;
}
export declare class ControlWidget extends Widget<FormProperty, SFUISchemaItem> {
    reset(_value: SFValue): void;
    afterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlWidget, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ControlWidget, never, never, {}, {}, never, never, false, never>;
}
export declare class ControlUIWidget<UIT extends SFUISchemaItem> extends Widget<FormProperty, UIT> {
    reset(_value: SFValue): void;
    afterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlUIWidget<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ControlUIWidget<any>, never, never, {}, {}, never, never, false, never>;
}
export declare class ArrayLayoutWidget extends Widget<ArrayProperty, SFArrayWidgetSchema> implements AfterViewInit {
    reset(_value: SFValue): void;
    afterViewInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArrayLayoutWidget, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ArrayLayoutWidget, never, never, {}, {}, never, never, false, never>;
}
export declare class ObjectLayoutWidget extends Widget<ObjectProperty, SFObjectWidgetSchema> implements AfterViewInit {
    reset(_value: SFValue): void;
    afterViewInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ObjectLayoutWidget, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ObjectLayoutWidget, never, never, {}, {}, never, never, false, never>;
}
