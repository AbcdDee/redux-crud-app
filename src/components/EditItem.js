import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateItem } from '../features/itemsSlice';
import { useParams, useHistory } from 'react-router-dom';

const EditItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const item = useSelector((state) => state.items.find((item) => item.id === parseInt(id)));

  const [name, setName] = useState(item ? item.name : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateItem({ id: item.id, name }));
    history.push('/');
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default EditItem;