import React, {Component} from 'react';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import DateTimePicker from "./DateTimePicker";


class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <DateTimePicker />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
