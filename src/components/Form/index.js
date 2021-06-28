import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Form = ({ name, inputs, submitTxt, caption, link, submit }) => {
  const [inputsInfo, setInputsInfo] = useState(inputs.reduce((res, input) => {
    res.push({
      name: input.name,
      isValid: !!input.attr.defaultValue,
      value: input.attr.defaultValue || '',
    });
    return res;
  }, []));

  const [isFormValid, setIsFormValid] = useState(inputsInfo.every(info => info.isValid));

  const handleInputChange = (evt) => {
    setInputsInfo(inputsInfo.map(input => {
      if (input.name !== evt.target.name)
        return input;

      input.value = evt.target.value;
      input.isValid = evt.target.validity.valid;
      return input;
    }));
    setIsFormValid(inputsInfo.every(info => info.isValid));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!isFormValid) {
      return;
    }

    const inputValues = inputsInfo.reduce((res, input) => {
      res[input.name] = input.value;
      return res;
    }, {});

    submit(inputValues);
  }

  return (
    <form className="form"
      name={name}
      onSubmit={handleSubmit}>
      <div className='form__section'>
        {inputs.map((input, id) => {
          return (
            <React.Fragment key={id}>
              <label className='form__label'>{input.caption}</label>
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
          value={submitTxt}
          className='form__submit'
          disabled={!isFormValid} />
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