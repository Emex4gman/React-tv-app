import React, { Component } from 'react';

import Loader from '../../componets/Loader'


class SingleSeries extends Component{
state ={
    show: null
}
 
componentDidMount(){
    const  { id } = this.props.match.params;

    fetch( `http://api.tvmaze.com/shows/${id}?embed=episodes`)
    .then(res =>res.json())
    .then(json =>this.setState({ show : json }))
}
render(){

        const { show } = this.state;

        console.log(show);
        return(
                
                <div>
                    {show === null && <Loader />} 
                    {
                        show !== null
                        &&
                        <div>
                        <p>{show.name.toUpperCase()}</p> 
                        <p>Premiered - {show.premiered}</p> 
                        <p>Rating: {show.rating.average}</p> 
                        <p> Episodes: {show._embedded.episodes.length}</p> 
                        <p>{
                            show.image !== null
                            &&
                        <img alt="Show" src={show.image.medium}/>
                        }
                        </p>  
                        </div>
                       
                    }
                </div>
            )
        }  
}

export default SingleSeries;