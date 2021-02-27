import { Rule, SchematicContext } from '@angular-devkit/schematics';
export declare function updateToV11(): Rule;
export declare function updateToV117(): Rule;
export declare function updateToV12(): Rule;
/** Post-update schematic to be called when update is finished. */
export declare function postUpdate(context: SchematicContext, targetVersion: any, hasFailures: boolean): void;
