// "use client"

// // app/items/page.js
// import { useState , useEffect} from 'react';

// async function fetchItems() {
//   const res = await fetch('http://localhost:3000/api/items', { cache: 'no-store' });
//   const data = await res.json();
//   return data;
// }

// export default function ItemsPage() {
//   const [items, setItems] = useState([]);
//   const [name, setName] = useState('');
//   const [editItem, setEditItem] = useState(null);

//   useEffect(() => {
//     const fetchInitialData = async () => {
//       const initialItems = await fetchItems();
//       setItems(initialItems);
//     };
//     fetchInitialData();
//   }, []);

//   const handleAddItem = async () => {
//     const res = await fetch('/api/items', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name }),
//     });
//     const newItem = await res.json();
//     setItems([...items, newItem]);
//     setName('');
//   };

//   const handleEditItem = async (id) => {
//     const res = await fetch('/api/items', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ id, name }),
//     });
//     const updatedItem = await res.json();
//     setItems(items.map(item => (item.id === id ? updatedItem : item)));
//     setEditItem(null);
//     setName('');
//   };

//   const handleDeleteItem = async (id) => {
//     await fetch('/api/items', {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ id }),
//     });
//     setItems(items.filter(item => item.id !== id));
//   };

//   return (
//     <div>
//       <h1>Items</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter item name"
//       />
//       {editItem ? (
//         <button onClick={() => handleEditItem(editItem.id)}>Edit Item</button>
//       ) : (
//         <button onClick={handleAddItem}>Add Item</button>
//       )}
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.name}
//             <button onClick={() => { setEditItem(item); setName(item.name); }}>Edit</button>
//             <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// app/items/page.js
import React from 'react';
import ItemsList from './components/ItemsList';

async function fetchItems() {
  const res = await fetch('http://localhost:3000/api/items', { cache: 'no-store' });
  const data = await res.json();
  return data;
}

export default async function ItemsPage() {
  const items = await fetchItems();

  return (
    <div>
      <h1>Items</h1>
      <ItemsList initialItems={items} />
    </div>
  );
}
