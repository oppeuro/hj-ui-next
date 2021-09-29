import { defineComponent, onMounted, getCurrentInstance } from 'vue'
import './index.scss'

export default defineComponent({
  name: 'YearButton',
  props: {
    year: [String, Number],
    selected: Boolean,
  },
  emits: ['click'],
  mounted() {
    if (this.selected) {
      this.handleCallParentSelect()
    }
  },
  watch: {
    selected(val) {
      if (val) {
        this.handleCallParentSelect()
      }
    },
  },
  methods: {
    handleCallParentSelect() {
      ;(this.$parent as any).scrollToSelectedYear(this.$el)
    },
    handleCallParentChange() {
      this.$emit('click', this.year)
    },
  },
  // setup(props, { attrs }) {
  //   return () => {
  //     return (
  //       <div
  //         class={`hj-year-button ${props.selected ? 'selected' : ''}`}
  //         {...attrs}
  //       >
  //         <span class={'hj-year-button-text'}>{props.year}</span>
  //       </div>
  //     )
  //   }
  // },
  render() {
    return (
      <div
        class={`hj-year-button ${this.selected ? 'selected' : ''}`}
        onClick={this.handleCallParentChange}
      >
        <span class={'hj-year-button-text'}>{this.year}</span>
      </div>
    )
  },
})
