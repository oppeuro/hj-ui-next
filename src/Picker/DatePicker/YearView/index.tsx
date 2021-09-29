import { defineComponent, PropType } from 'vue'
import YearButton from '@/Picker/DatePicker/YearButton'
import './index.scss'

export default defineComponent({
  props: {
    minDate: {
      type: Date,
      required: true,
    },
    maxDate: {
      type: Date,
      required: true,
    },
    displayDate: {
      type: Date,
      default: () => {
        return new Date()
      },
    },
  },
  emits: ['change'],
  computed: {
    years() {
      const minYear = this.minDate.getFullYear()
      const maxYear = this.maxDate.getFullYear()
      const years = []
      for (let year = minYear; year < maxYear; year += 1) {
        years.push(year)
      }
      return years
    },
  },
  methods: {
    scrollToSelectedYear(yearButtonNode: HTMLElement) {
      const container = this.$refs.container as HTMLElement
      const containerHeight = container.clientHeight
      const yearButtonNodeHeight = yearButtonNode.clientHeight || 32
      const scrollYOffset =
        yearButtonNode.offsetTop +
        yearButtonNodeHeight / 2 -
        containerHeight / 2
      setTimeout(() => (container.scrollTop = scrollYOffset), 0)
    },
    handleChange(year: number) {
      this.$emit('change', year)
    },
    createYearButtons() {
      return this.years.map((year) => {
        return (
          <YearButton
            year={year}
            selected={this.displayDate?.getFullYear() == year}
            onClick={this.handleChange}
          />
        )
      })
    },
  },
  render() {
    return (
      <div class={'hj-datepicker-year-container'}>
        <div class={'hj-datepicker-year'} ref="container">
          <div class={'hj-datepicker-year-list'}>
            {this.createYearButtons()}
          </div>
        </div>
      </div>
    )
  },
})
