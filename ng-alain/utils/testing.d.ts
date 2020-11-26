import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { Schema as NgAddSchema } from '../ng-add/schema';
/** Path to the collection file for the Material schematics */
export declare const collectionPath: string;
/** Path to the migration file for the Material update schematics */
export declare const migrationCollection: string;
export declare const APPNAME = "foo";
export declare const FILE_PREFIX: string;
export interface AppResult {
    runner: SchematicTestRunner;
    tree: UnitTestTree;
}
export declare function createNgRunner(): SchematicTestRunner;
export declare function createAlainRunner(): SchematicTestRunner;
export declare function createAlainApp(ngAddOptions?: NgAddSchema): Promise<AppResult>;
export declare function createAlainAndModuleApp(name?: string, ngAddOptions?: object): Promise<AppResult>;
export declare function createTestApp(): Promise<UnitTestTree>;
