import { JsonValue } from '@angular-devkit/core';
import { ProjectDefinition, WorkspaceDefinition } from '@angular-devkit/core/src/workspace';
import { Rule, Tree } from '@angular-devkit/schematics';
export declare const BUILD_TARGET_BUILD = "build";
export declare const BUILD_TARGET_TEST = "test";
export declare const BUILD_TARGET_SERVE = "serve";
export declare function getProject(tree: Tree, projectName?: string): Promise<{
    project: ProjectDefinition;
    name: string;
}>;
export declare function addAssetsToTarget(resources: Array<{
    type: 'style' | 'script';
    value: string;
}>, behavior: 'add' | 'delete', types?: string[], projectName?: string, clean?: boolean): Rule;
export declare function addAllowedCommonJsDependencies(items: string[], projectName?: string): Rule;
export declare function removeAllowedCommonJsDependencies(key: string, projectName?: string): Rule;
export declare function getProjectFromWorkspace(workspace: WorkspaceDefinition, projectName?: string): ProjectDefinition;
export declare function getProjectTarget(project: ProjectDefinition, buildTarget: string, type?: 'options' | 'configurations'): Record<string, JsonValue | undefined>;
