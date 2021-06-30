import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import getInputError from '../../utils/getInputError';

import './index.css';

const Form = ({ name, inputs, submitTxt, caption, link, submit }) => {
  const [inputsInfo, setInputsInfo] = useState(inputs.reduce((res, input) => {
    res.push({
      name: input.name,
      isValid: !!input.attr.defaultValue,
      value: input.attr.defaultValue || '',
      attributes: input.attr
    });
    return res;
  }, []));

  const [isFormValid, setIsFormValid] = useState(inputsInfo.every(info => info.isValid));

  const handleInputChange = (evt) => {
    setInputsInfo(inputsInfo.map(input => {
      if (input.name !== evt.target.name)
        return input;

      input.value = evt.target.value;
      input.error = getInputError(input);
      input.isValid = !input.error;
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

    evt.target.closest('form').reset()
    submit(inputValues);
  }

  return (
    <form className="form"
      name={name}
      onSubmit={handleSubmit}
      noValidate>
      <div className='form__section'>
        {inputs.map((input, id) => {
          const inputInfo = inputsInfo.find(i => i.name === input.name);
          const { isValid,
                  error } = inputInfo;
          return (

            <React.Fragment key={id}>
              <label className='form__label'>{input.caption}</label>
              <input className={`form__input ${!isValid && 'form__input_onerror'}`}
                name={input.name}
                onChange={handleInputChange}
                {...input.attr} />
              {!isValid && <p className='form__error-caption'>{error}</p>}
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