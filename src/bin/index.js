#!/usr/bin/env node
const fs = require('node:fs');
const { compile } = require('./compile.js');
const process = require('process')
const path = require('path')

let argv = process.argv.slice(2);
if (argv.length === 0) {
  console.log(`[INFO]  akumosV: 0.0.1`)

} else if (argv[0] === 'init') {
  try {
    if (!fs.existsSync('src')) {
      fs.mkdirSync('src');
    }
    if (!fs.existsSync('config')) {
      fs.mkdirSync('config');
    }
    if (!fs.existsSync('tmpl')) {
      fs.mkdirSync('tmpl');
    }
    if (!fs.existsSync('app')) {
      fs.mkdirSync('app');
    }
    if (!fs.existsSync('build')) {
      fs.mkdirSync('build');
    }
    if (!fs.existsSync('libs')) {
      fs.mkdirSync('libs');

    }
    if (!fs.existsSync('project.json')) {
      fs.writeFileSync(process.cwd() + path.sep + '/project.json', `{"namespace":"${process.cwd().replaceAll("\\", "\\\\")}"}`)

    }
    if (!fs.existsSync('main.js')) {
      fs.writeFileSync(process.cwd() + path.sep + '/main.js', `(function(app){\n  console.log('running akumos project...')  \n})(app)`)

    }
  } catch (err) {
    console.log(`[ERROR] index: error trying init an Akumos project: ${err}`);

  }
} else if (argv[0] === 'cp') {
  try {
    init()
    compile(false)

    console.log(`[INFO]  index: compile command fineshed!`)

  } catch (error) {
    throw new Error(`[ERROR] index: error trying compile: \n ${error}`)

  }
} else if (argv[0] === 'test') {
  init()
  compile(true)
}

function init() {
  console.log(`[INFO]  index: cleaning build folder!`)
  fs.rmSync(process.cwd() + path.sep + 'build', { recursive: true, force: true });

  console.log(`[INFO]  index: creating a new build folder!`)
  fs.mkdirSync(process.cwd() + path.sep + 'build');

  console.log(`[INFO]  index: reading 'project.json'!`)
  let project = fs.readFileSync(process.cwd() + path.sep + 'project.json')
  project = JSON.parse(project)
  project.namespace = process.cwd()
  fs.writeFileSync(process.cwd() + path.sep + 'project.json', JSON.stringify(project))

}