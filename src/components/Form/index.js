import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Form = ({ name, inputs, submit, caption, link }) => {
  const [inputsValidity, setInputsValidity] = useState(inputs.reduce((res, { name }) => {
    res.push({
      name,
      isValid: false
    });
    return res;
  }, []));

  const isAllInputsValid = inputsValidity.every(input => input.isValid);

  const handleInputChange = (evt) => {
    setInputsValidity(inputsValidity.map(input => {
      if (input.name !== evt.target.name)
        return input;

      input.isValid = evt.target.validity.valid;
      return input;
    }))
  }

  return (
    <form className="form" name={name}>
      <div className='form__section'>
        {inputs.map((input, id) => {
          return (
            <React.Fragment key={id}>
              <label className='form__label'>{input.name}</label>
              <input className='form__input'
                name={input.name}
                onChange={handleInputChange}
                {...input.attr} />
            </React.Fragment>
          );
        })
        }
      </div>
      <div className='form__section'>
        <input type='submit'
          value={submit}
          className='form__submit'
          // disabled={true}
          disabled={!isAllInputsValid} />
        <div className='form__caption-container'>
          <p className='form__caption'>{caption}</p>
          <Link to={link.link} className='form__link'>
            {link.text}
          </Link>
        </div>
      </div>
    </form>
  )
}

export default Form;