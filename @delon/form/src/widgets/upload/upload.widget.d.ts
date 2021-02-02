import { OnInit } from '@angular/core';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';
import { SFUploadWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class UploadWidget extends ControlUIWidget<SFUploadWidgetSchema> implements OnInit {
    i: any;
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
    static ɵfac: i0.ɵɵFactoryDef<UploadWidget, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UploadWidget, "sf-upload", never, {}, {}, never, never>;
}
