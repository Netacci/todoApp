export interface Todo {
  id: number,
  title: string,
  completed: boolean
}

export interface TodoCardProps {
  key: number;
  todo: Todo;
  handleToggle: (id: number) => void;
  handleEdit : (id: number, text: string) => void;

}

export interface AddTodoProps {
  addTodo: boolean;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
  setAddTodo?: React.Dispatch<React.SetStateAction<boolean>>;
  setEditText: React.Dispatch<React.SetStateAction<string | null>>;
  editText: string | null;
  editId: number | null;
  setEditId? : React.Dispatch<React.SetStateAction<number | null>>
}
