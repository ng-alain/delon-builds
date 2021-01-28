import { Tree } from '@angular-devkit/schematics';
export declare const PACCKAGE_PATH = "package.json";
export declare function readPackage(tree: Tree, type?: string): any;
export declare function writePackage(tree: Tree, json: any): any;
/**
 * Adds a package to the package.json
 *
 * ```
 * addPackage(host, [ '＠delon/abc＠^1.0.0' ])
 * addPackage(host, [ '＠delon/abc＠^1.0.0' ], 'devDependencies')
 * ```
 */
export declare function addPackage(tree: Tree, pkg: string | string[], type?: 'dependencies' | 'devDependencies' | 'scripts'): Tree;
/**
 * Removes a package to the package.json
 *
 * ```
 * removePackage(host, [ '＠delon/abc' ])
 * removePackage(host, [ '＠delon/abc' ], 'devDependencies')
 * ```
 */
export declare function removePackage(tree: Tree, pkg: string | string[], type?: 'dependencies' | 'devDependencies' | 'scripts'): Tree;
