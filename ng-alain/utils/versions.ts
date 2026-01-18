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
      `angular-eslint@^21.1.0`,
      `@typescript-eslint/eslint-plugin@^8.52.0`,
      `@typescript-eslint/parser@^8.52.0`,
      `@typescript-eslint/utils@^8.52.0`,
      `eslint@^9.39.2`,
      `eslint-config-prettier@^10.1.8`,
      `eslint-plugin-import@~2.32.0`,
      `eslint-plugin-jsdoc@~62.0.0`,
      `eslint-plugin-prefer-arrow@~1.2.3`,
      `eslint-plugin-prettier@~5.5.4`,
      `eslint-plugin-unused-imports@^4.3.0`,
      `typescript@DEP-21.0.2`,
      `typescript-eslint@8.52.0`,
      `prettier@^3.7.4`,
      `prettier-eslint@^9.39.2`,
      `husky@^9.1.7`,
      `ng-alain@${version}`,
      `ng-alain-plugin-theme@^18.0.0`,
      `source-map-explorer@^2.5.3`,
      `ngx-tinymce@^21.0.0`,
      `@ng-util/monaco-editor@^21.0.1`,
      `@delon/testing@${version}`,
      // vi test
      `@playwright/test@DEP-21.0.2`,
      `@vitest/browser-playwright@DEP-21.0.2`,
      `@vitest/coverage-v8@DEP-21.0.2`,
      `vitest@DEP-21.0.2`,
      `jsdom@DEP-21.0.2`
    ],
    'devDependencies'
  );
  addPackage(tree, [`rxjs@~7.8.0`, `ng-zorro-antd@^21.0.1`]);
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
