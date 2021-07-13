import { useHistory } from "react-router-dom";

import paths from "../../utils/constants/paths";

import account from "../../images/account.svg";
import './index.css';

const AccountButton = () => {
  const history = useHistory();
  const redirect = (evt) => history.push(paths.profile);

  return (
    <button className='account-btn'
      onClick={redirect} >
      <img src={account}
        alt='account'
        className='account-btn__image' />
      Аккаунт
    </button>
  )
};

export default AccountButton;