import React from 'react';
import createReactClass from 'create-react-class';
import './appItem.css';
import '../../adaptive.css';
import { connect } from 'react-redux';



const AppItem = createReactClass({

    getInitialState() {
        return {
            removeItem: false,
            checked: false,
            color: this.props.color,
        }
    },

    changeFlag: function () {
        let color = this.state.color;
        console.log(color);
        this.setState({ checked: !this.state.checked })
        if (this.state.checked === false) {
            this.setState({ color: 'black' });
            console.log(color);
        }
        else { this.setState({ color: 'gray' }) }
    },

    // Removing: function () {
    //     if (this.state.removeItem !== true) {
    //         this.setState({ removeItem: true });
    //     }
    //     else { this.setState({ removeItem: false }) }
    // },

    delete: function () {
        let delItem = this.props.index;
        this.props.delete(delItem);
    },

    render() {
        let style = { backgroundColor: this.state.color }
        return (
            <div className='center '>
                <div style={style} className='lead appNote'>
                    <span className='close' onClick={this.delete}>X</span>
                    <p className='note'>{this.props.text}</p>
                </div>
                <div className='noteAdd'>
                    <i>Note from {this.props.time}&emsp;{this.props.day}.{this.props.month}.{this.props.year}</i>
                    <b ref='checkbox' className='checkbox' defaultChecked={this.state.checked} onClick={this.changeFlag}>IMPORTANT</b>
                </div>
            </div>
        )
    }
})

export default connect (null,null)(AppItem); 