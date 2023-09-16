import NewTodoForm from '../components/NewTodoForm';

const TodosLayout = ({ children }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <NewTodoForm />
      <div>{children}</div>
    </div>
  );
};

export default TodosLayout;
