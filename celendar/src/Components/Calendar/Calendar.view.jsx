import moment from 'moment';
import 'moment/locale/ru';

import '../../main.css'

moment.locale('ru');

export const Calendar = () => {
  const value = moment();
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").startOf("week");
  const day = startDay.clone().subtract(1, 'day');
  const inclinedMonth = moment().format('LL').split(' ')[1];

  const calendar = [];
  while (day.isBefore(endDay, 'day')) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }

  const isToday = (day) => {
    return day.isSame(new Date(), 'day')
  }
  const isMonth = (day) => {
    return day.format("MMMM") !== moment().format("MMMM")
  }
  const dayStyle = (day) => {
    if (isMonth(day)) return 'ui-datepicker-other-month'
    if (isToday(day)) return 'ui-datepicker-today';
    return null
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{moment().format('dddd')}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{moment().format('DD')}</div>
          <div className="ui-datepicker-material-month">{inclinedMonth}</div>
          <div className="ui-datepicker-material-year">{moment().format('YYYY')}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span class="ui-datepicker-month">{moment().format('MMMM')}</span>&nbsp;
          <span class="ui-datepicker-year">{moment().format('YYYY')}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((week) => (
            <tr>
              {week.map((day) => (
                <td className={dayStyle(day)} >{day.format("D").toString()}</td>
              ))}
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  )
};
