import { Rule, Tree } from '@angular-devkit/schematics';
import { tryAddFile, tryDelFile } from '../utils/alain';
import { overwriteFile, readContent } from '../utils/file';
import { addPackageToPackageJson, getAngular, overwriteAngular, removePackageFromPackageJson } from '../utils/json';
import { getProject, getProjectFromWorkspace, Project } from '../utils/project';
import tsConfigEs5App from './files/ie/tsconfig-es5.app';
import tsConfigEs5Spec from './files/ie/tsconfig-es5.spec';
import { PluginOptions } from './interface';

let project: Project;

function setAngularJson(host: Tree, options: PluginOptions) {
  const json = getAngular(host);
  const project = getProjectFromWorkspace(json, options.project);
  if (options.type === 'add') {
    project.architect.build.configurations.es5 = { tsConfig: './tsconfig-es5.app.json' };
    project.architect.serve.configurations.es5 = { browserTarget: `${project.name}:build:es5` };
    project.architect.test.configurations = {
      es5: { tsConfig: './tsconfig-es5.app.json' },
    };
    project.architect.e2e.configurations.es5 = { browserTarget: `${project.name}:build:es5` };
  } else {
    delete project.architect.build.configurations.es5;
    delete project.architect.serve.configurations.es5;
    delete project.architect.test.configurations;
    delete project.architect.e2e.configurations.es5;
  }
  overwriteAngular(host, json);
}

function setBrowserslist(host: Tree, options: PluginOptions) {
  const filePath = `/browserslist`;
  let content = readContent(host, filePath);
  if (options.type === 'add') {
    content = content.replace(`not IE 9-11`, `not IE 9-10`);
  } else {
    content = content.replace(`not IE 9-10`, `not IE 9-11`);
  }
  overwriteFile(host, filePath, content, true, true);
}

function setPackage(host: Tree, options: PluginOptions) {
  // libs
  (options.type === 'add' ? addPackageToPackageJson : removePackageFromPackageJson)(
    host,
    ['classlist.js@DEP-9.0.0', 'web-animations-js@DEP-9.0.0'],
    'dependencies',
  );
  // scripts
  (options.type === 'add' ? addPackageToPackageJson : removePackageFromPackageJson)(
    host,
    ['ie:start@npm run color-less && ng serve -o --configuration es5', 'ie:hmr@npm run color-less && ng serve -c=hmr --configuration es5'],
    'scripts',
  );
}

function setPolyfills(host: Tree, options: PluginOptions) {
  const filePath = `${project.sourceRoot}/app/app.module.ts`;
  let content = '';
  if (options.type === 'add') {
    content = `import 'core-js/modules/es.array.includes';
import 'classlist.js';
import 'web-animations-js';
import 'zone.js/dist/zone';`;
  } else {
    content = `import 'zone.js/dist/zone';`;
  }
  overwriteFile(host, filePath, content, true, true);
}

function setTsConfig(host: Tree, options: PluginOptions) {
  // build
  const buildFilePath = `/tsconfig-es5.app.json`;
  if (host.exists(buildFilePath)) host.delete(buildFilePath);
  if (options.type === 'add') {
    overwriteFile(host, buildFilePath, JSON.stringify(tsConfigEs5App, null, 2), true, true);
  }
  // spec
  const specFilePath = `/tsconfig-es5.spec.json`;
  if (host.exists(specFilePath)) host.delete(specFilePath);
  if (options.type === 'add') {
    overwriteFile(host, specFilePath, JSON.stringify(tsConfigEs5Spec, null, 2), true, true);
  }
}

export function pluginIE(options: PluginOptions): Rule {
  return (host: Tree) => {
    project = getProject(host, options.project);

    setAngularJson(host, options);
    setBrowserslist(host, options);
    setPackage(host, options);
    setPolyfills(host, options);
    setTsConfig(host, options);
  };
}
