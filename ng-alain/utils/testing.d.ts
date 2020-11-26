import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { Schema as NgAddSchema } from '../ng-add/schema';
export declare const APPNAME = "foo";
export interface AppResult {
    runner: SchematicTestRunner;
    tree: UnitTestTree;
}
export declare function createNgRunner(): SchematicTestRunner;
export declare function createAlainRunner(): SchematicTestRunner;
export declare function createAlainApp(ngAddOptions?: NgAddSchema): Promise<AppResult>;
export declare function createAlainAndModuleApp(name?: string, ngAddOptions?: object): Promise<AppResult>;
export declare function createTestApp(): Promise<UnitTestTree>;
