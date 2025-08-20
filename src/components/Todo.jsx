function Todo({ task, description }) {

  let displayMessage = true;
  function buttonHandler() {
    console.log("you clicked.")
  }
  return (

    <>
      <div className="todo-lists">

        <h3>{task}</h3>
        {displayMessage ? <p>{description}</p> : null}
        <button onClick={() =>
          buttonHandler()
        }>done</button>


      </div>

    </>



  )
}

export default Todo;