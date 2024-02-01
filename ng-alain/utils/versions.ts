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
      `@angular-eslint/builder@^17.2.0`,
      `@angular-eslint/eslint-plugin@^17.2.0`,
      `@angular-eslint/eslint-plugin-template@^17.2.0`,
      `@angular-eslint/schematics@^17.2.0`,
      `@angular-eslint/template-parser@^17.2.0`,
      `@typescript-eslint/eslint-plugin@^6.19.0`,
      `@typescript-eslint/parser@^6.19.0`,
      `eslint@^8.56.0`,
      `eslint-config-prettier@~9.1.0`,
      `eslint-plugin-import@~2.29.1`,
      `eslint-plugin-jsdoc@~48.0.2`,
      `eslint-plugin-prefer-arrow@~1.2.3`,
      `eslint-plugin-prettier@~5.1.3`,
      `eslint-plugin-deprecation@~2.0.0`,
      `prettier@^3.2.4`,
      `husky@^8.0.3`,
      `ng-alain@${version}`,
      `ng-alain-plugin-theme@^16.0.2`,
      `source-map-explorer@^2.5.3`,
      `@angular/language-service@^17.1.0`,
      `ngx-tinymce@^17.0.0`,
      `@ng-util/monaco-editor@^17.0.1`,
      `@delon/testing@${version}`
    ],
    'devDependencies'
  );
  addPackage(tree, [`rxjs@~7.8.0`, `ng-zorro-antd@^17.2.0`]);
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
