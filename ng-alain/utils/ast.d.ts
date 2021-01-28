import { Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';
/** Reads file given path and returns TypeScript source file. */
export declare function getSourceFile(tree: Tree, path: string): ts.SourceFile;
