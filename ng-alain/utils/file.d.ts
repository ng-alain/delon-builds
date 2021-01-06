import { Rule, Tree } from '@angular-devkit/schematics';
export declare function readContent(host: Tree, filePath: string): string;
/**
 * Overwrite files to the project
 *
 * @param [overwrite=false] `true` is force, default: `false`
 */
export declare function overwriteFile(host: Tree, filePath: string, sourcePath?: string, overwrite?: boolean, sourcePathIsString?: boolean): Tree;
/**
 * Overwrite files to the project
 *
 * @param [overwrite=false] `true` is force, default: `false`
 */
export declare function overwriteFiles(host: Tree, files: string[], _filePath: string, overwrite?: boolean): Tree;
/**
 * Add files to the project
 *
 * @param [overwrite=false] `true` is force, default: `false`
 */
export declare function addFiles(host: Tree, files: string[], _filePath: string, overwrite?: boolean): Tree;
export declare function overwriteIfExists(host: Tree): Rule;