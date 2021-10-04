import { defineComponent } from 'vue'
import { convertClass } from '@/utils'

export default defineComponent({
  name: 'hj-paper',
  props: {
    cricle: Boolean,
    rounded: {
      type: Boolean,
      default: true,
    },
    zDepth: {
      type: Number,
      default: 0,
      validator(val: number) {
        return val >= 0 && val < 25
      },
    },
  },
  mounted() {
    console.log((this.$refs.dd as any).dataset.name)
  },
  render() {
    const classObj = {
      'hj-paper-cricle': this.cricle,
      'hj-paper-round': this.rounded,
      ['hj-elevation-' + this.zDepth]: !!this.zDepth,
    }
    return (
      <div class={`hj-paper ${convertClass(classObj)}`} ref="dd">
        {this.$slots.default ? this.$slots.default() : undefined}
      </div>
    )
  },
})
