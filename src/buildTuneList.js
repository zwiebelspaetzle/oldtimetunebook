const fs = require('fs')
const tunesLib = '../../ottb-lib/'

const reqExts = ['musicxml', 'pdf']

function getFiles() {
  return new Promise(
    (resolve, reject) => {
      fs.readdir(tunesLib, (err, items) => {
        if (err) {
          reject(err)
        } else {
          let files = {}
          items.forEach((val) => {
            let parts = val.split('.')
            let fileName = parts[0]
            let ext = parts.pop()
            if (reqExts.includes(ext)) {
              if (typeof(files[fileName]) == "undefined") {
                files[fileName] = []
              }
              files[fileName].push(ext)
            }
          })
          resolve(files)
        }
      })
    }
  )
}

function processFiles(files) {
  let tuneList = [];
  Object.entries(files).forEach(
    ([tuneName, tuneExtensions]) => {
      let valid = true
      reqExts.forEach((requiredExt) => {
        if (!tuneExtensions.includes(requiredExt)) {
          valid = false
        }
      })
      if (valid) {
        tuneList.push(tuneName)
      }
    }
  )

  return tuneList
}

function writeTuneList(tuneList) {
  return new Promise((resolve, reject) => {
    let tuneListFormatted = tuneList.map(val => `'${val.replace(/_/g, ' ')}'`).join(',\n  ');
    let fileContents = `
const tuneList = [
  ${tuneListFormatted}
]

export default tuneList
    `
    fs.writeFile("tuneList.js", fileContents, (err) => {
      if (err) reject(err)
      resolve("wrote file: \n" + fileContents)
    })

  })
}

async function buildList() {
  let files = await getFiles()
  let tuneList = processFiles(files)
  console.log(await writeTuneList(tuneList))
}

buildList()
