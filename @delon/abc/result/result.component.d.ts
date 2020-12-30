import { TemplateRef } from '@angular/core';
export declare class ResultComponent {
    _type: string;
    _icon: string;
    set type(value: string);
    title: string | TemplateRef<void>;
    description: string | TemplateRef<void>;
    extra: string | TemplateRef<void>;
}
