import { OnInit } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';
import { SFUploadWidgetSchema } from './schema';
export declare class UploadWidget extends ControlUIWidget<SFUploadWidgetSchema> implements OnInit {
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
}
