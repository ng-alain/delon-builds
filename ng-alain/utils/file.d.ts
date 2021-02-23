import { Rule, Tree } from '@angular-devkit/schematics';
export declare function tryDelFile(tree: Tree, filePath: string): void;
export declare function tryAddFile(tree: Tree, filePath: string, content: string): void;
export declare function readContent(tree: Tree, filePath: string): string;
export interface OverWriteFileOptions {
    tree: Tree;
    filePath: string;
    content?: string;
    /** `true` is force, default: `false` */
    overwrite?: boolean;
    /** default: `false` */
    contentIsString?: boolean;
}
/**
 * Overwrite files to the project
 */
export declare function overwriteFile(options: OverWriteFileOptions): Tree;
export declare function overwriteIfExists(tree: Tree): Rule;
export declare function writeFile(tree: Tree, filePath: string, content: string): void;
