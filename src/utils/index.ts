import * as colorsObj from '@/theme/colors'

const colors = Object.keys(colorsObj)

export function getColor(color: string | undefined) {
  if (
    !color ||
    ['primary', 'secondary', 'success', 'warning', 'info', 'error'].indexOf(
      color
    ) !== -1
  )
    return ''
  return colors.indexOf(color) !== -1 ? (colorsObj as any)[color] : color
}

export function convertClass(classes: Record<string, any> | string | string[]) {
  let newClasses: string[] = []
  if (!classes) return newClasses
  if (Array.isArray(classes)) {
    newClasses.concat(classes)
  } else if (classes instanceof Object) {
    for (const name in classes) {
      if ((classes as any)[name]) {
        newClasses.push(name)
      }
    }
  } else {
    newClasses = newClasses.concat(classes.split(' '))
  }
  return newClasses
}
