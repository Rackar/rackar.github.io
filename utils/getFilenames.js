const {readdir, writeFile} = require('fs')
const {resolve} = require('path')

// const FOLDERPATH = './docs/article'
const PathsIn = [
  './docs/article_child',
  './docs/article_self',
  './docs/article_tech'
]
readdirs(PathsIn)

function readdirs(paths) {
  paths.forEach(FOLDERPATH => {
    readdir(FOLDERPATH, (err, files) => {
      let filenames = []
      files.forEach(file => {
        if (file.toLowerCase() === 'readme.md') {
          file = `''`
        } else {
          file = file.replace('.md', '')
          file = `'${file}'`
        }
        filenames.push(file)
      })

      filenames.sort() // 排序

      writeFile(resolve(__dirname, './filenames.js'), `[${filenames}]`, () => {
        console.log('文件名获取完成.')
      })
    })
  })
}
