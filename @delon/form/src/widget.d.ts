import { AfterViewInit, ChangeDetectorRef, Injector } from '@angular/core';
import { SFValue } from './interface';
import { ArrayProperty } from './model/array.property';
import { FormProperty } from './model/form.property';
import { ObjectProperty } from './model/object.property';
import { SFSchema } from './schema';
import { SFUISchemaItem } from './schema/ui';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
export declare abstract class Widget<T extends FormProperty> implements AfterViewInit {
    readonly cd: ChangeDetectorRef;
    readonly injector: Injector;
    readonly sfItemComp?: SFItemComponent | undefined;
    readonly sfComp?: SFComponent | undefined;
    formProperty: T;
    error: string;
    showError: boolean;
    id: string;
    schema: SFSchema;
    ui: SFUISchemaItem;
    firstVisual: boolean;
    readonly cls: string | string[];
    readonly disabled: boolean | null;
    constructor(cd: ChangeDetectorRef, injector: Injector, sfItemComp?: SFItemComponent | undefined, sfComp?: SFComponent | undefined);
    ngAfterViewInit(): void;
    setValue(value: SFValue): void;
    readonly value: any;
    detectChanges(onlySelf?: boolean): void;
    abstract reset(value: SFValue): any;
}
export declare class ControlWidget extends Widget<FormProperty> {
    reset(_value: SFValue): void;
}
export declare class ArrayLayoutWidget extends Widget<ArrayProperty> implements AfterViewInit {
    reset(_value: SFValue): void;
    ngAfterViewInit(): void;
}
export declare class ObjectLayoutWidget extends Widget<ObjectProperty> implements AfterViewInit {
    reset(_value: SFValue): void;
    ngAfterViewInit(): void;
}
