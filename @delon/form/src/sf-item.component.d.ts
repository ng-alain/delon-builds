import { OnInit, OnChanges, ViewContainerRef, OnDestroy } from '@angular/core';
import { FormProperty } from './model/form.property';
import { Widget } from './widget';
import { WidgetFactory } from './widget.factory';
import { TerminatorService } from './terminator.service';
export declare class SFItemComponent implements OnInit, OnChanges, OnDestroy {
    private widgetFactory;
    private terminator;
    private ref;
    widget: Widget<any>;
    formProperty: FormProperty;
    container: ViewContainerRef;
    constructor(widgetFactory: WidgetFactory, terminator: TerminatorService);
    onWidgetInstanciated(widget: Widget<any>): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
