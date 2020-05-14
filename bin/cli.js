#!/usr/bin/env node

/* eslint-env node */
'use strict';

const argv = require('yargs')
    .usage('Usage: cssist <options>')
    .option('output', {
        alias: 'o',
        description: 'Desired output path of compiled .md',
        type: 'string',
        demandOption: true
    })
    .option('files', {
        alias: 'f',
        description: 'Directory of .md files to be compiled',
        type: 'string',
        demandOption: true
    })
    .help()
    .alias('help', 'h')
    .argv

var markdownInclude = require('../markdown-include');

markdownInclude.compileFiles({output: argv.output, files: argv.files}).then(function () {
	console.info(markdownInclude.options.build + ' have been built successfully');
});