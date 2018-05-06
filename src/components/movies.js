import React from 'react';

export default (props) => {
    const { info } = props;
    return (
        <div>
        <div className=' card col s6 m6'>
            <div className='card horizontal'>
                <div className='card-image'>
                    <img src={info['im:image'][2].label} />
                </div>
                    <h4 className='card-title'>{info['im:name'].label}</h4>
                    <p className='card-text'>{info.summary.label}</p>
            </div>
        </div >
        </div>
    )
}