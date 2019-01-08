import React from 'react';
import '../adaptive.css';
import '../index.css';
import { AddingStory } from '../actions/action2';
import { connect } from 'react-redux';


class DiaryPage extends React.Component {


    render() {
        // console.log('DIARYPAGE', this.props.date);
        return (
            <div>
                {this.props.clicked === false ?
                    <textarea className='diaryTextarea' onChange={this.props.storyAdding}/>
                    :
                    <div>
                        Diary Page
                    </div>
                }
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         storyAdding: () => {
//             dispatch(AddingStory())
//         }
//     }
// }

// const mapStateToProps = (state) => {
//     return {
        
//     }
// }

export default connect()(DiaryPage);