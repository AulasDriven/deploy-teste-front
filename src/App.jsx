import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import axios from "axios";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import withReactContent from 'sweetalert2-react-content'


function App() {
  const [todos, setTodos] = useState([]);
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    loadDataFromTodoAPI();
  }, [])

  function loadDataFromTodoAPI() {
    const apiURL = import.meta.env.VITE_APIURL;
    axios
      .get(`${apiURL}/todosa`)
      .then((response) => {
        setTodos(response.data)
      })
      .catch(e => {
        MySwal.fire({
          title: <ModalTitle />,
          html: <ModalContent />,
          icon: "error",
          confirmButtonText: "😢 okay..."
        })
      });
  }

  return (
    <>
      {todos.length > 0 ?
        <>
          <ul>
            {
              todos.map((todo, i) => {
                return <li key={i}>title: {todo.title}</li>
              })
            }
          </ul>
        </> : "Não há nada para exibir."
      }
    </>
  )
}

export default App
