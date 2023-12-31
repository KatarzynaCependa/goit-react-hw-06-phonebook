import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  return (
    <>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.header}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
