import { useActionState, useEffect, useState } from "react"
import axios from "axios"
import User from "../pages/User.jsx"
import { Link } from "react-router-dom"


function Home() {

  const [users, setUsers] = useState([])
  useEffect(() => {
    async function fetchData() {

      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUsers(data)
    }
    fetchData()

  }, [])
  return (
    <div>
      {users.map((user, index) => (
        <Link key={index} to={`users/${user.id}`}>
          <User name={user.username} />
        </Link>

      ))}
    </div>
  )
}

export default Home