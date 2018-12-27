import { ChangeDetectorRef, OnInit } from '@angular/core';
import { NzModalService, UploadChangeParam, UploadFile } from 'ng-zorro-antd';
import { SFValue } from '../../interface';
import { ControlWidget } from '../../widget';
export declare class UploadWidget extends ControlWidget implements OnInit {
    private modalSrv;
    i: any;
    fileList: UploadFile[];
    btnType: string;
    constructor(cd: ChangeDetectorRef, modalSrv: NzModalService);
    ngOnInit(): void;
    change(args: UploadChangeParam): void;
    reset(value: SFValue): void;
    private notify;
    handlePreview: (file: UploadFile) => void;
}
