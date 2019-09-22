import React from 'react';
import loaderSrc from '../../assests/loader.gif';

const LoaderImag = {
    margin: '20px'
}

const Loader =(props)=>(
<div> 
<img style={LoaderImag}
alt="loader icon"
src= {loaderSrc} />
</div>
);

export default Loader;