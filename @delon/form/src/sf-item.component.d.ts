import { OnChanges, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { FormProperty } from './model/form.property';
import { SFUISchemaItem } from './schema/ui';
import { TerminatorService } from './terminator.service';
import { Widget } from './widget';
import { WidgetFactory } from './widget.factory';
export declare class SFItemComponent implements OnInit, OnChanges, OnDestroy {
    private widgetFactory;
    private terminator;
    private ref;
    readonly unsubscribe$: Subject<void>;
    widget: Widget<FormProperty, SFUISchemaItem> | null;
    formProperty: FormProperty;
    container: ViewContainerRef;
    constructor(widgetFactory: WidgetFactory, terminator: TerminatorService);
    onWidgetInstanciated(widget: Widget<FormProperty, SFUISchemaItem>): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
