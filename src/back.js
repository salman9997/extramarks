import React, { Component } from 'react';

export default class BackGround extends Component {
    render() {
        const imageUrl = require(`./images/hotel.jpg`)
        return (
            <div style={{backgroundImage:`url(${imageUrl})`,backgroundSize:"cover",backgroundRepeat: "no-repeat",height:'100vh' }}>
            </div>
        )
    }
}
