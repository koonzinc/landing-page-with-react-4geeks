import React from 'react';
import Cards from './Cards';

const Card = () => {
    return (
        <div style={{margin: 'auto', marginBottom: '20px', height: '444px'}} >
            <div className='row'>
                <div className='col-md-3'>
                    <Cards />
                </div>
                <div className='col-md-3'>
                    <Cards />
                </div>
                <div className='col-md-3'>
                    <Cards />
                </div>
                <div className='col-md-3'>
                    <Cards />
                </div>

            </div>
        </div>
    )
}

export default Card