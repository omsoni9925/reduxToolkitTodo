import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/addTodo'

function App() {

  return (
    <>
      <h1 className='text-white font-bold text-4xl'>Todo With Redux ToolKit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
