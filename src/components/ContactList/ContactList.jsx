import Contact from '../Contact/Contact';
import style from './ContactList.module.css';
const ContactList = ({ contacts, onDelBtn }) => {
  return (
    <ul className={style.list}>
      {contacts.map(contact => (
        <li className={style.listItem} key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            phone={contact.number}
            onDelBtn={onDelBtn}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
