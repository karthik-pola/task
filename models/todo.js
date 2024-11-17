import mongoose from 'mongoose';

let nextId = 1;

const todoSchema = new mongoose.Schema({
  id: { type: Number, default: () => nextId++ },
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false }
});

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;
