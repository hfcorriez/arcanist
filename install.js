const fs = require('fs')
const path = require('path')
const spawn = require('cross-spawn')
const Download = require('download')

const BASE = 'https://github.com/phacility/#/archive/stable.zip'

const FILES = ['arcanist', 'libphutil']
const BACKUP_GIT_URLS = [
  'https://github.com/phacility/arcanist.git',
  'https://github.com/phacility/libphutil.git'
]

FILES.forEach(function (key, i) {
  const file = BASE.replace('#', key)

  fs.stat(path.join(__dirname, key), function (err, stats) {
    if (err || !stats.isDirectory()) {
      console.log('Start download file: ' + file)
      downloadFile(file, function (err) {
        if (err) {
          const source = BACKUP_GIT_URLS[i]
          console.log('Error download file: ' + file + ', fallback to using git clone from original source ' + source)
          gitClone(source)
        } else {
          console.log('Success download file: ' + file)
        }
      })
    }
  })

})

function downloadFile (file, cb) {
  new Download({extract: true})
    .get(file)
    .dest(__dirname)
    .run(cb)
}


function gitClone (source) {
  spawn('git', ['clone', source], {stdio: 'inherit'})
}
