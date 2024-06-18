/**
 * 获取当前时间明细
 * @returns TimerInfoProps
 */
export function getTimeInfo<TimerInfoProps>(time = new Date()) {
  const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

  const d = time ? time : new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();
  const week = weeks[d.getDay()];
  const hour = d.getHours();
  const min = d.getMinutes();
  const second = d.getSeconds()
  const formatNum = (num: number) =>  num < 10 ? `0${num}` : num
  return {
    year,
    month: formatNum(month + 1),
    date: formatNum(date),
    week,
    hour: formatNum(hour),
    min: formatNum(min),
    second: formatNum(second)
  }
}

export function getDateStr(time: Date) {
  const {year, month, date} = getTimeInfo(time)
  return `${year}-${month}-${date}`
}
