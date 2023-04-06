import React from 'react';
import './MainStyle.css';
const Main = () => {
    return (
        <>
            <div className='mainPageContainer'>
                <div className='headerNav'>
                    <ol className='hnList'>
                        <button className='allList'>All</button>
                        <button className='allList'>Minor</button>
                        <button className='allList'>Major</button>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Main