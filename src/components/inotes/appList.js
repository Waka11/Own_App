import React from 'react';
import createReactClass from 'create-react-class';
import './appList.css';
import AppItem from './appItem';
import { connect } from 'react-redux';





const AppList = createReactClass({



    render() {
        return (
            <div className='junior'>
                {this.props.notes.map((iterator) => {
                    return(
                        <AppItem key={iterator.id} index={iterator.id} text={iterator.text} color={iterator.color} delete={this.props.delete} time={iterator.time} day={iterator.day} month={iterator.month} year={iterator.year} />
                    )
               
                })}
                
            </div>
        )
    }
})

export default connect (null, null)(AppList);