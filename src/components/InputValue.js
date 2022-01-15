import React, { useState } from 'react';

function InputValue() {
    const [value, setValue] = useState("");
    return (
        <div>
            <p>Value: {value}</p>
            <input
                type="text"
                className='form-control'
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
}

export default InputValue
