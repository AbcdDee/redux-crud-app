import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../features/itemsSlice';
import { useNavigate } from 'react-router-dom';

const ItemList = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleEdit = (item) => {
    navigate(`/edit/${item.id}`, { state: { item } });
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;