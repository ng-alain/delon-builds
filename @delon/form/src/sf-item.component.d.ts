import { OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { FormProperty } from './model/form.property';
import { SFUISchemaItem } from './schema/ui';
import type { Widget } from './widget';
import * as i0 from "@angular/core";
export declare class SFItemComponent implements OnInit, OnChanges, OnDestroy {
    private readonly widgetFactory;
    private readonly terminator;
    private ref;
    readonly destroy$: Subject<void>;
    widget: Widget<FormProperty, SFUISchemaItem> | null;
    formProperty: FormProperty;
    footer: TemplateRef<void> | null;
    private container;
    onWidgetInstanciated(widget: Widget<FormProperty, SFUISchemaItem>): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SFItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SFItemComponent, "sf-item", ["sfItem"], { "formProperty": { "alias": "formProperty"; "required": false; }; "footer": { "alias": "footer"; "required": false; }; }, {}, never, never, false, never>;
}
