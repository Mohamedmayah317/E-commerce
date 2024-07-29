// pages/api/items.js
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ];
  
  export default function handler(req, res) {
    console.log('Request method:', req.method)
    if (req.method === 'GET') {
      res.status(200).json(items);
    } else if (req.method === 'POST') {
      const newItem = { id: items.length + 1, name: req.body.name };
      items.push(newItem);
      res.status(201).json(newItem);
    } else if (req.method === 'PUT') {
      const { id, name } = req.body;
      const item = items.find(item => item.id === id);
      if (item) {
        item.name = name;
        res.status(200).json(item);
      } else {
        res.status(404).json({ message: 'Item not found' });
      }
    } else if (req.method === 'DELETE') {
      const { id } = req.body;
      const itemIndex = items.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        const deletedItem = items.splice(itemIndex, 1);
        res.status(200).json(deletedItem);
      } else {
        res.status(404).json({ message: 'Item not found' });
      }
    } else {
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  