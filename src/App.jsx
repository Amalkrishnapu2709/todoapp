import "./App.css";
import AddTodoForm from './Components/AddTodoForm'
import TodoList from './Components/TodoList'
import TotalCompleteItems from './Components/TotalCompleteItems'
import '../src/bootstrap.min.css'

function App() {
  return (
    <>
     <div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
    </>
  );
}

export default App;
