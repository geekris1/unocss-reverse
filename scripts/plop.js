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
      console.error(`[plop Error]: The file <${name}> already exists!\n`)
      process.exit(1)
    }
    else {
      console.info(`[plop]: The file <${name}> has been created successfully!\n`)
      // rule file
      writeFile(normalize(join(cwd(), `/src/rules/modules/${name}.ts`)), template(name))
      // test file
      writeFile(normalize(join(cwd(), `/test/${name}.test.ts`)), templateTest(name))
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

function toCamelCase(name) {
  const arr = name.split('-')
  const res = arr.map(item => item[0].toUpperCase() + item.slice(1)).join('')
  return res[0].toLowerCase() + res.slice(1)
}

function template(name) {
  return `import type { Rule } from '@/types/rules'

export const ${toCamelCase(name)}: Rule = {
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

function templateTest(name) {
  return `import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'

describe('${name}', () => {
  it('${name}', () => {
    expect(generator('${name}')).toBe('${name}')
  })
})
`
}

init()
