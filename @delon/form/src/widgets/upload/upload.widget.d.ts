import { OnInit } from '@angular/core';
import { UploadChangeParam, UploadFile } from 'ng-zorro-antd';
import { SFValue } from '../../interface';
import { ControlWidget } from '../../widget';
export declare class UploadWidget extends ControlWidget implements OnInit {
    i: any;
    fileList: UploadFile[];
    btnType: string;
    ngOnInit(): void;
    change(args: UploadChangeParam): void;
    reset(value: SFValue): void;
    private _getValue;
    private _setValue;
    handlePreview: (file: UploadFile) => void;
}
