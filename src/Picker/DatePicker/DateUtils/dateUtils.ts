const localConfig = {
  dayAbbreviation: ['日', '一', '二', '三', '四', '五', '六'],
  dayList: [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ],
  monthList: [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ],
  monthLongList: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ],
}

export const dateTimeFormat = {
  formatDisplay(date: Date) {
    const day = date.getDate()
    return `${localConfig.monthList[date.getMonth()]}-${
      day > 9 ? day : '0' + day
    } ${localConfig.dayList[date.getDay()]}`
  },
  formatDateDisplay(date: Date) {
    const day = date.getDate()
    return `${localConfig.monthList[date.getMonth()]}-${
      day > 9 ? day : '0' + day
    }`
  },
  formatMonth(date: Date) {
    return `${date.getFullYear()} ${localConfig.monthLongList[date.getMonth()]}`
  },
  getWeekDayArray(firstDayOfWeek: number) {
    const beforeArray = []
    const afterArray = []
    const dayAbbreviation = localConfig.dayAbbreviation
    for (let i = 0; i < dayAbbreviation.length; i++) {
      if (i < firstDayOfWeek) {
        afterArray.push(dayAbbreviation[i])
      } else {
        beforeArray.push(dayAbbreviation[i])
      }
    }
    return beforeArray.concat(afterArray)
  },
  getMonthList() {
    return localConfig.monthLongList
  },
}

export function cloneDate(d: Date): Date {
  return new Date(d.getTime())
}

export function cloneAsDate(d: Date): Date {
  const clonedDate = cloneDate(d)
  clonedDate.setHours(0, 0, 0, 0)
  return clonedDate
}

export function addYears(d: Date, years: number): Date {
  const newDate = cloneDate(d)
  newDate.setFullYear(d.getFullYear() + years)
  return newDate
}
