/* eslint-disable no-unused-vars */
// eslint-disable-next-line
import React, { Component } from 'react';
import SeriesList from '../../componets/SeriesList';
import Loader from '../../componets/Loader';
import Intro from '../../componets/intro'


class Series extends Component {
    state = {
        series: [],
        seriesName :'',
        isFetching: false

      }
    

    onSeriesInputChange = e =>{ 
      
      this.setState({seriesName: e.target.value, isFetching: true})
        
      fetch( `http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(res =>res.json())
        .then(json =>this.setState({series : json, isFetching: false}))
      //console.log(e.target.value);
      
    }

    render() {
      const { series, seriesName, isFetching } = this.state;
        return (
            <div> 
                     <Intro message="Here you can find all of your most loved series"/>

              <div>
                <input 
                value= {seriesName}
                type="text" 
                onChange={this.onSeriesInputChange} />
              </div>
              {
                !isFetching && series.length === 0 && seriesName.trim()===''
                &&
                <p>Plaese enter series name into the Input</p>
                }
                {
                  !isFetching && series.length === 0 && seriesName.trim() !== ''
                  &&
                  <p>No Tv series has been found with this name</p>
                }
                {
                  isFetching 
                  &&
                  <Loader />
                }
                {
                  !isFetching && <SeriesList list={this.state.series}/>
                }

              
              </div>
        )
    }
}

export default Series;


