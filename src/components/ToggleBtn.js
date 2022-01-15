import React, { useState } from 'react';

function ToggleBtn() {
    const [toggleBtn, setToggleBtn] = useState(false);

    return (
        <div>
            <button onClick={() => setToggleBtn(!toggleBtn)} className='btn btn-secondary my-4'>Toggle Btn</button>
            {
                toggleBtn ? <p className='lead'>YouTube Content</p> : null
            }
        </div>
    )
}

export default ToggleBtn
