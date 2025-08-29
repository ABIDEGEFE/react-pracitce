import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios  from "axios"

function Users() {
  const { id } = useParams();
  const [user, setUser] = useState({})

  async function fetchData() {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    setUser(data)
  }
  useEffect(() => {
         fetchData()
  }, [])

  return (
    <div>
      <Link to={"/"}>back</Link>
      <h2>User: {user.username}</h2>
      <h2>ID: {user.id}</h2>
      <h2>name: {user.name}</h2>
    </div>
  );
}

export default Users;