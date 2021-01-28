import { Tree } from '@angular-devkit/schematics';
import { Change } from '@schematics/angular/utility/change';
import * as ts from 'typescript';
/** Reads file given path and returns TypeScript source file. */
export declare function getSourceFile(tree: Tree, path: string): ts.SourceFile;
export declare function commitChanges(tree: Tree, src: string, changes: Change[]): void;
export declare function updateComponentMetadata(tree: Tree, src: string, callback: (node: ts.Node) => Change[], propertyName?: string): void;
