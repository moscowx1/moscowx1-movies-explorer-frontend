import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Form = ({name, inputs, submit, caption, link}) => {
  return (
    <form className="form" name={ name }>
      <div className='form__section'>
        { inputs.map((input, id) => {
          return (
            <React.Fragment key={id}>
              <label className='form__label'>{ input.name }</label>
              <input type={ input.type } className='form__input'/>
            </React.Fragment>
          );
        })
        }
      </div>
      <div className='form__section'>
        <input type='submit'
               value={submit}
               className='form__submit'/>
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