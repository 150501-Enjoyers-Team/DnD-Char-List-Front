import React from 'react';

const Input = (props) => {
    return (
        <div class="form-group">
          <input class={props.class} type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    
    );
};

export default Input;