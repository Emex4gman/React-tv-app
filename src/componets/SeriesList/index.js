import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const SeriesListItems = ({ series }) =>(
    <li >
    
    <Link to={`/series/${series.show.id}`}>
    {series.show.name}
    </Link>
    {/* <a href={series.show.url}> {series.show.name}</a> */}
    </li>

)
const SeriesList = (props) =>{
   return(
       <div>
           <ul className="series-list">
                {props.list.map(series =>(<SeriesListItems series ={series} key={series.show.id} />
                ))}
           </ul>
       </div>
   ) 
}


export default SeriesList;