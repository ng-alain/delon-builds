import { AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SFValue } from './interface';
import { ArrayProperty } from './model/array.property';
import { FormProperty } from './model/form.property';
import { ObjectProperty } from './model/object.property';
import { SFSchema } from './schema';
import { SFUISchemaItem } from './schema/ui';
import { SFComponent } from './sf.component';
export declare abstract class Widget<T extends FormProperty> implements AfterViewInit {
    readonly cd: ChangeDetectorRef;
    readonly sfComp?: SFComponent;
    formProperty: T;
    error: string;
    showError: boolean;
    id: string;
    schema: SFSchema;
    ui: SFUISchemaItem;
    firstVisual: boolean;
    readonly cls: string | string[];
    readonly disabled: boolean;
    constructor(cd: ChangeDetectorRef, sfComp?: SFComponent);
    ngAfterViewInit(): void;
    setValue(value: SFValue): void;
    readonly value: any;
    detectChanges(): void;
    abstract reset(value: SFValue): any;
}
export declare class ControlWidget extends Widget<FormProperty> {
    reset(value: SFValue): void;
}
export declare class ArrayLayoutWidget extends Widget<ArrayProperty> implements AfterViewInit {
    reset(value: SFValue): void;
    ngAfterViewInit(): void;
}
export declare class ObjectLayoutWidget extends Widget<ObjectProperty> implements AfterViewInit {
    reset(value: SFValue): void;
    ngAfterViewInit(): void;
}
