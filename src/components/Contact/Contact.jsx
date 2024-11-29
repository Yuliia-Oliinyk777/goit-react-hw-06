import { IoPersonSharp } from 'react-icons/io5';
import { MdLocalPhone } from 'react-icons/md';

import style from './Contact.module.css';

const Contact = ({ id, name, phone, onDelBtn }) => {
  const handleDeleteContact = () => {
    onDelBtn(id);
  };

  return (
    <div className={style.wrap}>
      <div className={style.dataWrap}>
        <h3 className={style.name}>
          <IoPersonSharp className={style.icon} />
          {name}
        </h3>
        <p className={style.phone}>
          <MdLocalPhone className={style.icon} />
          {phone}
        </p>
      </div>

      <button
        className={style.deleteBtn}
        onClick={handleDeleteContact}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
