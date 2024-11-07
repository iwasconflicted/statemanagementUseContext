import { isRouteErrorResponse, useRouteError } from "react-router-dom"


const ErrorPage = () => {

const error = useRouteError();

console.log(error);


  return (
  <>
    <h1>Yo!! You got an error!!!</h1>
    { isRouteErrorResponse(error) ? <p>Invalid Page</p>: <p>Unexpected Error</p> }
    </>
  )
}

export default ErrorPage