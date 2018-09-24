import React, {Component} from 'react';
import TimePicker from './TimePicker/TimePicker';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';
import './DateTimePicker.css';
import time from "react-toolbox/components/utils/time";

class DateTimePicker extends Component {

    state = {
        date: new Date(),
        time: new Date(),
        timePickerActive: false,
    };

    handleDateChange = (value) => {
        this.setState({
            date: value,
            timePickerActive: true,
        })
    };

    handleDismiss = () => {
        this.setState({
            timePickerActive: false,
        })
    };

    handleTimeChange = (value) => {
        const {date} = this.state;
        const newDateTime = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            value.getHours(),
            value.getMinutes(),
            value.getSeconds()
        );
        this.setState({
            time: value,
            date: newDateTime,
            timePickerActive: false,
        });
    };

    static inputFormat(value) {
        return time.formatDate(value) + ' ' + time.formatTime(value);
    };

    render() {
        return (
            <div style={{width: '20%'}}>
                <DatePicker
                    onDismiss={this.handleDismiss}
                    label='Select date'
                    sundayFirstDayOfWeek
                    minDate={new Date()}
                    onChange={this.handleDateChange}
                    inputFormat={DateTimePicker.inputFormat}
                    value={this.state.date}/>
                <TimePicker
                    onDismiss={this.handleDismiss}
                    theme={this.props.theme}
                    active={this.state.timePickerActive}
                    label='Select date time'
                    onChange={this.handleTimeChange}
                    value={this.state.time}
                    inputClassName="time-picker-input"
                />
            </div>
        );
    }


}

export default DateTimePicker;
