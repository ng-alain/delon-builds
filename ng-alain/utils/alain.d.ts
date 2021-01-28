import { Rule, Tree } from '@angular-devkit/schematics';
export interface CommonSchema {
    [key: string]: any;
    _filesPath?: string;
    schematicName?: string;
    name?: string;
    path?: string;
    module?: string;
    target?: string;
    componentName?: string;
    importModulePath?: string;
    routerModulePath?: string;
    selector?: string;
    prefix?: string;
    withoutPrefix?: boolean;
    project?: string;
}
export declare function addImportToModule(host: Tree, filePath: string, symbolName: string, fileName: string): void;
export declare function addValueToVariable(host: Tree, filePath: string, variableName: string, text: string, needWrap?: boolean): void;
export declare function buildAlain(schema: CommonSchema): Rule;
