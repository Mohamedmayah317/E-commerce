"use client"; // هذا يشير إلى أن المكون هو مكون عميل

import React, { useState, useEffect } from 'react';

export default function ItemsList({ initialItems }) {
  const [items, setItems] = useState(initialItems);
  const [name, setName] = useState('');
  const [editItem, setEditItem] = useState(null);

  const fetchItems = async () => {
    const res = await fetch('/api/items');
    const data = await res.json();
    setItems(data);
  };

  const handleAddItem = async () => {
    const res = await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    const newItem = await res.json();
    setItems([...items, newItem]);
    setName('');
  };

  const handleEditItem = async (id) => {
    const res = await fetch('/api/items', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name }),
    });
    const updatedItem = await res.json();
    setItems(items.map(item => (item.id === id ? updatedItem : item)));
    setEditItem(null);
    setName('');
  };

  const handleDeleteItem = async (id) => {
    await fetch('/api/items', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
      />
      {editItem ? (
        <button onClick={() => handleEditItem(editItem.id)}>Edit Item</button>
      ) : (
        <button onClick={handleAddItem}>Add Item</button>
      )}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => { setEditItem(item); setName(item.name); }}>Edit</button>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
