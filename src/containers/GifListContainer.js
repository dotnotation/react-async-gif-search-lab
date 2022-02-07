import React, { Component } from "react"
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

class GifListContainer extends Component {
    
    state = {
        gifs: []
    }

    fetchGifs = query => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=zDv6B4KC3vT2WTJnRb70sX5vV4w85iWv&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }

    componentDidMount(){
        this.fetchGifs()
    }


    render(){
        return(
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}
export default GifListContainer