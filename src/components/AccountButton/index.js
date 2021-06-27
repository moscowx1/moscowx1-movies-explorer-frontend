import account from "../../images/account.svg";
import './index.css';

const AccountButton = () => {
  return (
    <button className='account-btn'>
      <img src={ account }
           alt='account'
      className='account-btn__image'/>
      Аккаунт
    </button>
  )
};

export default AccountButton;