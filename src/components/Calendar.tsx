import React, { useEffect, useState } from 'react'
import './Calendar.css'
import { sampleData } from '../data/sampleData'
import { CalendarData, DayMap, RenderData } from '../types'

const daysMap:DayMap = {
  'Sunday': 0,
  'Monday': 1,
  'Tuesday': 2,
  'Wednesday': 3,
  'Thursday': 4,
  'Friday': 5,
  'Saturday': 6,
};
const days = Object.keys(daysMap);

export default function Calendar() {
  const [calendar, setCalendar] = useState<RenderData[]>();

  useEffect(() => {

    const processData = () =>{
      
      const fullData:RenderData[] = [];
      let month: string[][] = [];
      let week:string[] = [];

      sampleData.forEach((data:CalendarData) => {
        let currentDay = data.start;
        let currentDayInd = daysMap[currentDay];

        // push empty days into first week based on the days maps which return empty number of days
        for(let i = 0; i < daysMap[data.start]; i++) {
          week.push('')
        }

        for(let i = 1; i <= data.days; i++) {
          // start new array week and push the finished week into month
          if (currentDay == 'Saturday' && i !== data.days) {
            week.push(i.toString())
            month.push(week)
            week = [];
            currentDayInd = 0;
            currentDay = 'Monday';
          } else {
            // push day to week
            week.push(i.toString())
            currentDayInd += 1;
            currentDay = days[currentDayInd];
          }
        }
        // push remaining week if there is any
        if(week.length) {
          month.push(week)
          week = [];
        }
        // push finished month into full data
        fullData.push({
          month: data.month,
          year: data.year,
          days: month
        })
        month = [];
      })
      setCalendar(fullData)
    }
    processData()
  }, [])

  return (
    <div className='cal-comp-container'>
      {/* Handle days header */}
      <table className='days-table'>
        <tr>
          <th>S</th>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>T</th>
          <th>F</th>
          <th>S</th>
        </tr>
        </table >
        <div className='calendar-container' id='calendar-tables'>
        {
          calendar?.map((month) => {
            return (
              <>
                {/* Month header with stick pos */}
                <div className='calendar-header'>
                  <span role='header'>{month.month} {month.year}</span>
                </div>
                {/* process each months and days within each month into a table */}
                <table>
                  {month.days.map((day) => {
                    return <tr>{
                      day.map((val) => {
                        return (
                          <td>{val}</td>
                        )
                      })
                    }
                    </tr>
                  })}
                </table>
              </>
            )
          })
        }
        </div>
    </div>
  )
}
