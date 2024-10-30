import useAuth from '../hooks/useAuth';

const Login  = () => {
  
//   const [username, setUsername] = useState<string>('Jose!');
// const  [user, dispatch] = useReducer(authReducer, '')

// const {user, dispatch} = useContext(LoginContext)

const {user, dispatch} = useAuth()


  // Handle login
  const handleLogin = () => {
    dispatch({type:'LOGIN', username:'DIO!'})
  }
  // Handle logout
  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
};
  

  return (
    <div className="container mt-3" >
      {user ? (
          <div>
            <h2>It is I! {user}!</h2>
          <button className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
          <button className="btn btn-primary" onClick={handleLogin}>
          Log In
        </button>
      )}
    </div>
  );
};

export default Login;