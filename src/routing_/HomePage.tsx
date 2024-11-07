import { log } from "console";
import { Link, useRouteError } from "react-router-dom"


const HomePage = () => {

  const error = useRouteError();

  console.log(error);
  

  return (
  <>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis sunt voluptates nulla totam, id saepe beatae nobis laboriosam, corrupti, qui doloribus praesentium exercitationem. Earum at, facere voluptates odit quasi dolorem.
    </p>
    <Link to={'/users'}>Users</Link>
  </>
  )
}

export default HomePage