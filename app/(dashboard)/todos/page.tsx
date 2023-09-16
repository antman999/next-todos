import TodoList from '@/app/components/TodoList';
import db from '@/utils/db';

const fetchData = async () => {
  const todos = await db.todo.findMany({});
  return todos;
};

const TodosPage = async () => {
  const todos = await fetchData();
  console.log(todos, 'hello');
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;
