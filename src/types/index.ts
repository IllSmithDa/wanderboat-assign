export interface CalendarData {
  month: string,
  days: number,
  year: number,
  start: string
}

export interface DayMap {
  [day: string]: number
}

export interface RenderData {
  month: string,
  year: number,
  days: string[][],
}
