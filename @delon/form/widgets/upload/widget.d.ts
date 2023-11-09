import { OnInit } from '@angular/core';
import { ControlUIWidget, SFValue } from '@delon/form';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import type { SFUploadWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class UploadWidget extends ControlUIWidget<SFUploadWidgetSchema> implements OnInit {
    static readonly KEY = "upload";
    i: NzSafeAny;
    fileList: NzUploadFile[];
    btnType: string;
    ngOnInit(): void;
    change(args: NzUploadChangeParam): void;
    reset(value: SFValue): void;
    private _getValue;
    private pureValue;
    private _setValue;
    handleRemove: () => boolean;
    handlePreview: (file: NzUploadFile) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UploadWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UploadWidget, "sf-upload", never, {}, {}, never, never, false, never>;
}
