import { useDispatch } from 'react-redux';
import css from 'components/ContactForm/ContactForm.module.css';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  // wysyłanie akcji do store Redux
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    // pobiera wartość pola "name" z formularza
    const name = form.elements.name.value;
    // pobiera wartość pola "number"
    const number = form.elements.number.value;
    // za pomocą funkcji dispatch wywołuję akcję addContact z argumentami name i number
    dispatch(addContact(name, number));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.contactFormLabel}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.contactFormLabel}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
