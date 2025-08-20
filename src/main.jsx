import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Todo  from './components/Todo.jsx'
import App from './App.jsx'
import Title from './components/TodoTitle.jsx'
import Tommorowtask from './components/Tommorowtask.jsx'
import Counter from './components/Counter.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter />
    <Title />
    <Todo task="Excercise"
    description="Make your posture good"/>
    <Todo task="Book reading"
    description="your mind is your weapon"/>
    <Todo task="Azure Project"
    description="You are going to be an expert."/>
    <Tommorowtask />
  </StrictMode>,

)
