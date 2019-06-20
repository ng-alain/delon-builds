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
}
export declare function addValueToVariable(host: Tree, filePath: string, variableName: string, text: string): void;
export declare function buildAlain(schema: CommonSchema): Rule;
export declare function tryDelFile(host: Tree, filePath: string): void;
export declare function tryAddFile(host: Tree, filePath: string, content: string): void;
