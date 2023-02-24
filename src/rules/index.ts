import type { Rule, Rules } from '@/types/rules'

function autoImportRule() {
  const modules = import.meta.glob('./modules/*.ts', {
    import: '*',
    eager: true,
  }) as Record<string, Record<string, Rule | Rules>>

  const ruleList: Rule[] = []

  Object.values(modules).forEach((module) => {
    for (const key in module) {
      const ruleLike = module[key]
      if (Array.isArray(ruleLike)) {
        (ruleLike as Rules).forEach((rule) => {
          ruleList.push(rule)
        })
      }
      else {
        ruleList.push(ruleLike as Rule)
      }
    }
  })

  return ruleList.flat()
}

export const rules = autoImportRule()
