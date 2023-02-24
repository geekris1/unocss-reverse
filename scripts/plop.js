import { writeFile } from 'fs/promises'
import { cwd } from 'process'
import { join, normalize } from 'path'
import minimist from 'minimist'
import fg from 'fast-glob'

function init() {
  const { _: [name] } = minimist(process.argv.slice(2))
  if (name) {
    const ruleFileNames = readRuleFileNames()
    if (ruleFileNames.includes(name)) {
      console.error('【plop Error: The file already exists!')
      console.log('')
      process.exit(1)
    }
    else {
      writeFile(normalize(join(cwd(), `/src/rules/modules/${name}.ts`)), template(name))
    }
  }
  else {
    process.exit(1)
  }
}

function readRuleFileNames() {
  // '!./src/rules/index.ts'
  const ruleFiles = fg.sync(['./src/rules/**/*.ts'])
  return ruleFiles.map(i => i.replace(/\.\/src\/rules(\/modules)?\/(.*).ts/, '$2'))
}

function template(name) {
  return `import type { Rule } from '@/types/rules'
export const ${name}: Rule = {
  name: '${name}',
  transform(ctx: string) {
    return ''
  },
  match(name: string) {
    return undefined
  },
}
`
}
init()
