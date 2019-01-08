import React from 'react';
import { database } from '../firebase';
import Nav from '../nav';
import Calendar from 'react-calendar';
import '../adaptive.css';
import '../index.css';
import DiaryPage from './diarypage';
import { connect } from 'react-redux';
import { store } from '../index';



class Diary extends React.Component {

    state = {
        today: new Date(),
        date: new Date(),
        querry: 'Please, choose the day . . .',
        clicked: false,
        story: {
            storyDate: new Date(),
            text: '',
        }
            
        
    }

    dateChange = (date) => {
        this.setState({ date });


        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const ToDay = this.state.today.getDate();
        const NowMonth = this.state.today.getMonth() + 1;
        const NowYear = this.state.today.getFullYear();

        console.log('NOW', ToDay, NowMonth, NowYear);
        console.log('CLICKED', day, month, year);

        if (this.state.date !== this.state.today) {
            this.setState({ clicked: true })
        }
        if (day === ToDay && month === NowMonth && year === NowYear) { this.setState({ clicked: false }) }
        console.log('STATE', this.state.clicked);
    }

    componentDidMount() {
    }

    render() {
        // console.log('state', this.state.date)
        return (
            <div>
                <Nav />
                <div className='diaryContainer'>
                    <div className='diaryContainer1'>
                        <div className='diaryPage'>
                            <DiaryPage date={this.state.date} today={this.state.today} clicked={this.state.clicked} />
                        </div>
                        <button className='btnSubmit diaryButton' >Save</button>
                    </div>
                    <div className='diaryContainer2'>
                        <div className='divCalendar'>
                            <Calendar value={this.state.today} locale='en' className='calendar' onChange={this.dateChange} />
                        </div>
                        <p className='diaryQuerry'>
                            {this.state.querry}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.Reducer,
    }
}

export default connect(mapStateToProps, null)(Diary);