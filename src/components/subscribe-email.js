import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class SubscribeEmail extends Component{

    constructor(){
        super();
        this.state={value:'test@test.com'};
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleChange = this._handleChange.bind(this);
    }

    _handleSubmit = e => {
        e.preventDefault();
        addToMailchimp(this.state.value)
        .then(data => {
          // I recommend setting data to React state
          // but you can do whatever you want
          console.log(data)
        })
        .catch(() => {
          // unnecessary because Mailchimp only ever
          // returns a 200 status code
          // see below for how to handle errors
          console.log(data)
        })
      }

      _handleChange(e){
        this.setState({value: e.target.value});
      }

    render(){
        return (
            <form onSubmit={this._handleSubmit}>
                <input type="text" value={this.state.value} onChange={this._handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}