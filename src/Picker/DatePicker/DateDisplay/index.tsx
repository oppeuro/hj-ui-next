import { defineComponent, Transition } from 'vue'
import color from '@/internal/mixins/color'

import './index.scss'

export default defineComponent({
  mixins: [color],
  emits: ['changeView'],
  props: {
    type: String,
    dateTimeFormat: Object,
    monthDaySelected: {
      type: Boolean,
      default: true,
    },
    displayDate: Date,
  },
  data() {
    return {
      displayDates: [this.displayDate],
      slideType: 'next',
    }
  },
  watch: {
    displayDate(val) {
      this.replaceSelected(val)
    },
  },
  methods: {
    // trigger
    replaceSelected(date: Date) {
      const oldDate = this.displayDates[0] as Date
      this.slideType = date.getTime() > oldDate.getTime() ? 'next' : 'prev'
      this.displayDates.push(date)
      this.displayDates.shift()
    },
    // view
    callChangeView(viewType: string) {
      this.$emit('changeView', viewType)
    },
    createYearSlide() {
      return (this.displayDates as Date[]).map((displayDate, index) => {
        const fullYear = displayDate.getFullYear()
        return (
          <Transition name={`hj-date-display-${this.slideType}`} key={index}>
            <div class={'hj-date-display-slideIn-wrapper'} key={fullYear}>
              <div class={'hj-date-display-year-title'}>{fullYear}</div>
            </div>
          </Transition>
        )
      })
    },
    createMonthSlide() {
      const forMat: any = this.dateTimeFormat
      return (this.displayDates as Date[]).map((displayDate, index) => {
        const displayMonthDay =
          this.type === 'date'
            ? forMat.formatDisplay(displayDate)
            : forMat.getMonthList()[displayDate.getMonth()]
        return (
          <Transition name={`hj-date-display-${this.slideType}`} key={index}>
            <div
              class={'hj-date-display-slideIn-wrapper'}
              key={displayMonthDay}
            >
              <div class={'hj-date-display-monthday-title'}>
                {displayMonthDay}
              </div>
            </div>
          </Transition>
        )
      })
    },
  },
  render() {
    console.log(this.monthDaySelected, '_____')
    return (
      <div
        style={{ backgroundColor: this.getColor(this.color) }}
        class={`hj-picker-display hj-date-display ${
          this.monthDaySelected ? 'selected-year' : ''
        } ${this.getColorClass(false)}`}
      >
        <div
          class={'hj-date-display-year'}
          onClick={() => this.callChangeView('year')}
        >
          {this.createYearSlide()}
        </div>
        {this.type !== 'year' ? (
          <div
            class={'hj-date-display-monthday'}
            onClick={() =>
              this.callChangeView(this.type === 'date' ? 'monthDay' : 'month')
            }
          >
            {this.createMonthSlide()}
          </div>
        ) : undefined}
      </div>
    )
  },
})
