import { OnInit, ChangeDetectorRef } from '@angular/core';
import { UploadFile, UploadChangeParam, NzModalService } from 'ng-zorro-antd';
import { ControlWidget } from '../../widget';
export declare class UploadWidget extends ControlWidget implements OnInit {
    private modalSrv;
    i: any;
    fileList: UploadFile[];
    btnType: string;
    constructor(cd: ChangeDetectorRef, modalSrv: NzModalService);
    ngOnInit(): void;
    change(args: UploadChangeParam): void;
    reset(value: any): void;
    private notify;
    handlePreview: (file: UploadFile) => void;
}
