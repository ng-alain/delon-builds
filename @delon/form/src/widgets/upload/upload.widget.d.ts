import { OnInit } from '@angular/core';
import { UploadChangeParam, UploadFile } from 'ng-zorro-antd/upload';
import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';
import { SFUploadWidgetSchema } from './schema';
export declare class UploadWidget extends ControlUIWidget<SFUploadWidgetSchema> implements OnInit {
    i: any;
    fileList: UploadFile[];
    btnType: string;
    ngOnInit(): void;
    change(args: UploadChangeParam): void;
    reset(value: SFValue): void;
    private _getValue;
    private _setValue;
    handleRemove: () => boolean;
    handlePreview: (file: UploadFile) => void;
}
