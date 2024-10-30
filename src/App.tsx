import { useReducer } from "react"
import HomePage from "./components/HomePage"
import MyNavbar from "./components/MyNavbar"
import AuthProvider from "./state-management/Auth/AuthProvider"
import TodoProvider from "./state-management/Todos/TodoProvider"
import Counter from "./state-management/Counter/Counter"


const App = () => {


  return (
  <>


 
{/* <Todo/> */}
{/* <Login/> */}

<AuthProvider>
    <TodoProvider>
          <Counter/>
          <MyNavbar />
          <HomePage />

      </TodoProvider>
    
</AuthProvider>

  
  </>
  )
}

export default App