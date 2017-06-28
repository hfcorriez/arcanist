#!/usr/bin/env node

const spawn = require('cross-spawn')
const path = require('path')

const arcanist = path.join(__dirname, 'arcanist', 'scripts', 'arcanist.php')
const args = process.argv.slice(2)

if (require('os').platform() === 'win32') {
  spawn('php', ['-f', arcanist, '--'].concat(args), { stdio: 'inherit' })
} else {
  spawn(arcanist, args, { stdio: 'inherit' })
}
