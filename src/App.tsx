import { useReducer } from "react"
import HomePage from "./components/HomePage"
import MyNavbar from "./components/MyNavbar"
import AuthProvider from "./AuthProvider"
import TodoProvider from "./TodoProvider"


const App = () => {


  return (
  <>


  {/* <Counter/> */}
{/* <Todo/> */}
{/* <Login/> */}

<AuthProvider>
    <TodoProvider>
        
          <MyNavbar />
          <HomePage />

      </TodoProvider>
    
</AuthProvider>

  
  </>
  )
}

export default App