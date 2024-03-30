import React from 'react';
import './WeeklyCalendar.css';

class WeeklyCalendar extends React.Component {
  state = {
    currentDate: new Date(),
  };

  numOfWeek = ({ day }) => {

    var startDayOfYear = new Date(day.getFullYear(), 0, 1);
    return Math.ceil((((day - startDayOfYear) / 86400000) + startDayOfYear.getDay()) / 7);


  };

  renderDays = () => {
    const { currentDate } = this.state;
    const days = [];
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + i);
      days.push(date);
    }
    return days.map((day, index) => (
        <div key={index} className="day">{day.toDateString()} WeekNum: {this.numOfWeek({day: day})}</div>
    ));
  };

  handlePrevWeek = () => {
    this.setState(prevState => ({
      currentDate: new Date(prevState.currentDate.setDate(prevState.currentDate.getDate() - 7)),
    }));
  };

  handleNextWeek = () => {
    this.setState(prevState => ({
      currentDate: new Date(prevState.currentDate.setDate(prevState.currentDate.getDate() + 7)),
    }));
  };

  render() {
    return (
      <div className="weekly-calendar">
        <button onClick={this.handlePrevWeek}>Previous Week</button>
        <div className="days">{this.renderDays()}</div>
        <button onClick={this.handleNextWeek}>Next Week</button>
      </div>
    );
  }
}

export default WeeklyCalendar;