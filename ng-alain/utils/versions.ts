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
      `@angular-eslint/builder@^17.0.0`,
      `@angular-eslint/eslint-plugin@^17.0.0`,
      `@angular-eslint/eslint-plugin-template@^17.0.0`,
      `@angular-eslint/schematics@^17.0.0`,
      `@angular-eslint/template-parser@^17.0.0`,
      `@typescript-eslint/eslint-plugin@^6.10.0`,
      `@typescript-eslint/parser@^6.10.0`,
      `eslint@^8.53.0`,
      `eslint-config-prettier@~9.0.0`,
      `eslint-plugin-import@~2.29.0`,
      `eslint-plugin-jsdoc@~46.5.1`,
      `eslint-plugin-prefer-arrow@~1.2.3`,
      `eslint-plugin-prettier@~5.0.1`,
      `eslint-plugin-deprecation@~2.0.0`,
      `prettier@^3.1.0`,
      `husky@^8.0.3`,
      `ng-alain@${version}`,
      `ng-alain-plugin-theme@^16.0.0`,
      `source-map-explorer@^2.5.3`,
      `@angular/language-service@^17.0.0`,
      `ngx-tinymce@^17.0.0`,
      `@ng-util/monaco-editor@^17.0.0`,
      `@delon/testing@${version}`
    ],
    'devDependencies'
  );
  addPackage(tree, [`rxjs@~7.8.0`, `ng-zorro-antd@^17.0.0-beta.0`]);
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
