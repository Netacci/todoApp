import { Todo } from '../../../types/types';
import TodoCard from '../../../components/todoCard/TodoCard';


const TodoList = ({
  todos,
  setTodos,
  setEditId,
  setEditText
}: {
  todos: Todo[] | null;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setEditId: React.Dispatch<React.SetStateAction<number | null>>;
  setEditText: React.Dispatch<React.SetStateAction<string | null>>;
  
}) => {

  const onToggleComplete = (id: number) => {
    const toggleTodo = todos?.map((todo) =>
      todo?.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(toggleTodo as Todo[]);
  };
  const handleEdit = (id: number, text: string) => {
    setEditId(id)
    setEditText(text)
  }



  return (
    <div className='mt-[20px] px-4'>
      <ul>
        {todos?.map((todo: Todo) => (
          <TodoCard key={todo.id} todo={todo} handleToggle={onToggleComplete} handleEdit={handleEdit}  />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
