import { Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';
import { Change } from './devkit-utils/change';
/** Reads file given path and returns TypeScript source file. */
export declare function getSourceFile(host: Tree, path: string): ts.SourceFile;
export declare function commitChanges(host: Tree, src: string, changes: Change[]): void;
export declare function updateComponentMetadata(host: Tree, src: string, callback: (node: ts.Node) => Change[], propertyName?: string): void;
