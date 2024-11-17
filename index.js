import express from 'express';
import mongoose from 'mongoose';
import todosRoutes from './routes/todos.js';

const app = express();
const PORT = 4000;


mongoose.connect("mongodb+srv://suresh:suresh123@cluster0.noxl4.mongodb.net/")
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.use(express.json());
app.use('/todos', todosRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
