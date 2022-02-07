import React, { Component } from "react"

class GifList extends Component {
    render(){
        return (
            <ul>
                <li>{this.props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}</li>
            </ul>
        )
    }
}

export default GifList 