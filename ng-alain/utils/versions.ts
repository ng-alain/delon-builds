import { Tree, Rule } from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';

import { VERSION } from './lib-versions';
import { addPackage } from './package';
import { BUILD_TARGET_LINT, getProjectFromWorkspace } from './workspace';

/**
 * 修复主要依赖的版本号
 */
export function UpgradeMainVersions(tree: Tree, version: string = VERSION): void {
  addPackage(
    tree,
    ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${version}`)
  );
  addPackage(
    tree,
    [
      `@angular-eslint/builder@^18.3.0`,
      `@angular-eslint/eslint-plugin@^18.3.0`,
      `@angular-eslint/eslint-plugin-template@^18.3.0`,
      `@angular-eslint/schematics@^18.3.0`,
      `@angular-eslint/template-parser@^18.3.0`,
      `@typescript-eslint/eslint-plugin@^8.2.0`,
      `@typescript-eslint/parser@^8.2.0`,
      `eslint@^8.57.0`,
      `eslint-config-prettier@~9.1.0`,
      `eslint-plugin-import@~2.25.3`,
      `eslint-plugin-jsdoc@~50.2.2`,
      `eslint-plugin-prefer-arrow@~1.2.3`,
      `eslint-plugin-prettier@~5.2.1`,
      `eslint-plugin-deprecation@^3.0.0`,
      `prettier@^3.3.3`,
      `husky@^9.1.5`,
      `ng-alain@${version}`,
      `ng-alain-plugin-theme@^18.0.0`,
      `source-map-explorer@^2.5.3`,
      `@angular/language-service@^18.2.0`,
      `ngx-tinymce@^18.0.0`,
      `@ng-util/monaco-editor@^18.0.0`,
      `@delon/testing@${version}`
    ],
    'devDependencies'
  );
  addPackage(tree, [`rxjs@~7.8.0`, `ng-zorro-antd@^18.1.1`]);
}

export function addESLintRule(projectName: string): Rule {
  return updateWorkspace(async workspace => {
    const project = getProjectFromWorkspace(workspace, projectName);
    if (project == null) return;

    if (project.targets.has(BUILD_TARGET_LINT)) {
      project.targets.delete(BUILD_TARGET_LINT);
    }
    project.targets.set(BUILD_TARGET_LINT, {
      builder: '@angular-eslint/builder:lint',
      options: {
        lintFilePatterns: ['src/**/*.ts', 'src/**/*.html']
      }
    });
  });
}
