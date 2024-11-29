import style from './App.module.css';
import Section from '../Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import contactData from '../../contactData.json';
import { useEffect, useState } from 'react';

const App = () => {
  // const [contactList, setContactList] = useState(contactData);
  const [contactList, setContactList] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : contactData;
  });

  const handleAddContact = contact => {
    setContactList(prevContacts => [...prevContacts, contact]);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactList));
  }, [contactList]);

  const [searchValue, setSearchValue] = useState('');

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  const filteredContacts = contactList.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleDelete = id => {
    setContactList(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <Section>
      <h1 className={style.mainHeader}>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox value={searchValue} onChange={handleChange} />
      {filteredContacts.length > 0 ? (
        <ContactList contacts={filteredContacts} onDelBtn={handleDelete} />
      ) : (
        <p className={style.message}>Сontacts not found</p>
      )}
    </Section>
  );
};

export default App;
