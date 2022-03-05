import React from 'react';
import Clock from 'react-live-clock';
 
const CreateTopMenuBar = () => {
    return(
        <div className='menu'>
            <div className='spacer'></div>
            <div className='time'>
                <Clock  format={'MMM ddd M h:mm A'} ticking={true}/>
            </div>
        </div>
    );
}


export default CreateTopMenuBar;