import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const { emails } = useSelector(data => data.emailSlice);
  console.log(emails);

  return (
    <>
      Hello World
    </>
  )
}

export default App
