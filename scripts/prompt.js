import { readFile, writeFile } from 'fs/promises'
import fg from 'fast-glob'
const result = []
async function init() {
  const files = fg.sync('test/**.ts', { absolute: true })
  for (const file of files) {
    const fileContent = await readFile(file, 'utf8')
    extraction(fileContent)
  }
  writeFile('./prompt.json', JSON.stringify(result, null, 2))
}

function extraction(content) {
  const temp = content.match(/generator\(['"]?(.[^)]*)['"]?\)/g)
  const data = temp.map((i) => {
    const j = i.match(/generator\(['"\s]*(.[^)'"]*)['"\s]?\)/)
    if (j) {
      return j[1]
    }
    else {
      return undefined
    }
  }).filter(Boolean)
  for (let i of data) {
    // todo: regexp remove ) , add it.
    if (i.includes('(')) {
      i += ')'
    }
    result.push(i)
  }
}

await init()
