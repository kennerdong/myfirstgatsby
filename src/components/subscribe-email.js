import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp';
import axios from 'axios';

export default class SubscribeEmail extends Component{

    constructor(){
        super();
        this.state={value:'test@test.com'};
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleChange = this._handleChange.bind(this);
        
    }

    /* 
        This code handles submit using Gatsby plugin to Mailchimp lists.
    */
    // _handleSubmit = e => {
    //     e.preventDefault();
    //     addToMailchimp(this.state.value)
    //     .then(data => {
    //       // I recommend setting data to React state
    //       // but you can do whatever you want
    //       console.log(data)
    //     })
    //     .catch(() => {
    //       // unnecessary because Mailchimp only ever
    //       // returns a 200 status code
    //       // see below for how to handle errors
    //       console.log(data)
    //     })
    //   }

    // _handleSubmit = e => {
    //     e.preventDefault();
    //     const { MAILCHIMP_API_ENDPOINT, MAILCHIMP_API_KEY } = process.env;
    //     const LIST_ID = "b94198e394";
    //     let authenticationString = btoa(`randomstring:${MAILCHIMP_API_KEY}`);
    //     authenticationString = "Basic " + authenticationString;

    //     fetch(`${MAILCHIMP_API_ENDPOINT}/lists/${LIST_ID}/members`, {
    //     mode: 'cors',
    //     method: 'POST',
    //     headers: {
    //         'Authorization': authenticationString,
    //         // 'authorization': `apikey ${MAILCHIMP_API_KEY}`,
    //         // 'authorization': `Basic ${Buffer.from(`apikey:${MAILCHIMP_API_KEY}`).toString('base64')}`,
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         email_address: "dude@gmail.com", 
    //         status: "subscribed",
    //     })
    //     }).then(function(e){
    //         console.log("fetch finished")
    //     }).catch(function(e){
    //         console.log("fetch error");
    //     })
    // }


    /*
        This code handles submit using axios API call to Mailchimp.
    */
    _handleSubmit = e => {
        e.preventDefault();
        const LIST_ID = "b94198e394";
        const { MAILCHIMP_API_ENDPOINT, MAILCHIMP_API_KEY } = process.env;
        const url = `${MAILCHIMP_API_ENDPOINT}/lists/${LIST_ID}/members`;
        console.log(url);

        const axios_instance = axios.create({
            auth:{
                username: 'any',
                password: MAILCHIMP_API_KEY
            },
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true,
                crossdomain: true,
                // Authorization: 'Basic dXNlcm5hbWU6ZGEzNjljOWY4ZDlmMzUzMzNhOTlkNDM1YzU4NGU5Y2MtdXMxOA==',
                // 'Authorization': `Basic ${Buffer.from(`apikey:${MAILCHIMP_API_KEY}`).toString('base64')}`,
            }
        });

        axios_instance.post(
            url,
            {email: this.state.value}
        )
        .then(response =>{
            console.log(response);
        }).catch(error =>{
            console.log(error);
        });
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