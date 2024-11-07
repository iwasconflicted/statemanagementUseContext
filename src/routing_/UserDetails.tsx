import { useLocation, useParams, useSearchParams } from "react-router-dom"

const UserDetails = () => {

  //With this hook we can extract prams values form the URL
  const params = useParams();

  const [searchParams, setSearchParams] = useSearchParams();


  const location = useLocation()


  console.log(location)

  return (
 <>
    <p>User{params.id}</p>
 </>
  )
}

export default UserDetails;