import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filtersSlice';
import css from 'components/Filter/Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = evt => dispatch(filterContact(evt.target.value));

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input onChange={handleInputChange} />
    </label>
  );
};
