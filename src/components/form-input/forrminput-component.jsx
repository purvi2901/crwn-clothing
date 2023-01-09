import React from 'react';

import './forminput-style.scss';

const FormInput = ({label,haandleChange,...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={haandleChange}  {...otherProps} />
        {label ? (
            <label
                className={`${otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
            >
                {label}
            </label>
        ) : null}
    </div>
);

export default FormInput;




{/* <input className='form-input' onChange={haandleChange} {...otherProps} /> */}
