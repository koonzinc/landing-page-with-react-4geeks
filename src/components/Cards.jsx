import React from 'react';

const Cards = () => {
    return (
            <div className='card' style={{width: 'auto'}}>
                <img className='card-img-top' src="https://placeimg.com/500/325/any" alt="Card image cap" />
                <div className='card-body'>
                    <h5 className='card-title'>Card title</h5>
                    <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a className='btn btn-primary' href="#">Go somewhere</a>
                </div>
            </div>
    )
}

export default Cards