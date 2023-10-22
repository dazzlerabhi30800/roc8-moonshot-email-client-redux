import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Navbar from './Components/Navbar';
import { setEmailMessages } from '../store/Slice';

function App() {
  const { emailMessages } = useSelector(data => data.emailSlice);
  const dispatch = useDispatch();

  // async function fetchMessages() {
  //   const data = await fetch("https://flipkart-email-mock.now.sh/?page=1");
  //   const { list } = await data.json();
  //   console.log(list);
  // }


  // useEffect(() => {
  //   fetchMessages();
  // }, [])
  return (
    <>
      <Navbar />
      <button onClick={() => dispatch(setEmailMessages())}>Clicke Me</button>
    </>
  )
}

export default App
