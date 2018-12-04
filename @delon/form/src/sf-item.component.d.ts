import { OnChanges, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { FormProperty } from './model/form.property';
import { TerminatorService } from './terminator.service';
import { Widget } from './widget';
import { WidgetFactory } from './widget.factory';
export declare class SFItemComponent implements OnInit, OnChanges, OnDestroy {
    private widgetFactory;
    private terminator;
    private ref;
    widget: Widget<FormProperty>;
    formProperty: FormProperty;
    container: ViewContainerRef;
    constructor(widgetFactory: WidgetFactory, terminator: TerminatorService);
    onWidgetInstanciated(widget: Widget<FormProperty>): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
