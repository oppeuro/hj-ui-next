import { defineComponent } from 'vue'
import * as dateUtils from '@/Picker/DatePicker/DateUtils/dateUtils'
import pickerProps from '@/Picker/DatePicker/mixins/props'

import YearView from './YearView'
import DateDisplay from './DateDisplay'

import './index.scss'

export default defineComponent({
  name: 'hj-date-picker',
  mixins: [pickerProps],
  props: {
    dateTimeFormat: {
      type: Object,
      default: () => {
        return dateUtils.dateTimeFormat
      },
    },
    type: {
      type: String,
      default: 'date', // date, year, month
    },
    date: {
      type: Date,
      default: () => {
        return new Date()
      },
    },
    maxDate: {
      type: Date,
      default: () => {
        return dateUtils.addYears(new Date(), 100)
      },
    },
    minDate: {
      type: Date,
      default: () => {
        return dateUtils.addYears(new Date(), -100)
      },
    },
  },
  data() {
    return {
      displayDate: this.date as Date,
      view:
        this.type === 'date'
          ? 'monthDay'
          : this.type === 'year'
          ? 'year'
          : 'month',
    }
  },
  methods: {
    // view
    createDisplay() {
      console.log(1)
    },
    createYearView() {
      return (
        <YearView
          displayDate={this.displayDate as Date}
          minDate={this.minDate}
          maxDate={this.maxDate}
          onChange={this.handleYearChange}
        />
      )
    },
    // trigger
    changeDisplayDate(date: Date) {
      this.displayDate = date
    },
    changeDate(date: Date) {
      this.$emit('change', date)
      this.$emit('update:date', date)
    },
    changeView(type: string) {
      this.view = type
    },
    // handle
    handleYearChange(year: number) {
      const date = dateUtils.cloneAsDate(this.displayDate as Date)
      date.setDate(1)
      date.setFullYear(year)
      this.changeDisplayDate(date)
      if (this.type == 'year') return this.changeDate(date)
      this.changeView('monthDay')
    },
  },
  render() {
    const colorClass = ''
    const color = ''
    return (
      <div
        style={color}
        class={`hj-picker hj-datepicker ${colorClass} ${
          this.landscape ? 'hj-picker-landspace' : ''
        }`}
      >
        {this.noDisplay ? undefined : (
          <DateDisplay
            type={this.type}
            // @ts-ignore
            color={this.displayColor}
            monthDaySelected={this.view !== 'year'}
            displayDate={this.displayDate as Date}
            dateTimeFormat={this.dateTimeFormat}
          />
        )}
        <div class={'hj-picker-container'}>{this.createYearView()}</div>
      </div>
    )
  },
})
