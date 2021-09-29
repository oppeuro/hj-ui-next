import { convertClass, getColor } from '@/utils/index'

export default {
  props: {
    color: String,
  },
  methods: {
    getColorClass(addInverse = true) {
      return this.getNormalColorClass((this as any).color, false, addInverse)
    },
    getTextColorClass() {
      return this.getNormalColorClass((this as any).textColor, true, true)
    },
    getColor(color: any, disable?: boolean | undefined) {
      if (disable || (this as any).disable) return
      return getColor(color)
    },
    getNormalColorClass(color: any, text = false, addInverse = true) {
      const classObj: any = {}
      const themes = [
        'primary',
        'secondary',
        'success',
        'warning',
        'info',
        'error',
      ]
      themes.forEach((theme) => {
        classObj[`hj-${theme}${text ? '-text' : ''}-color`] = color === theme
      })
      if (!text && addInverse) {
        classObj['hj-inverse'] == !!color
      }
      return convertClass(classObj).join(' ')
    },
  },
}
