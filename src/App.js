import { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


import axios from 'axios'
import './App.css';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getItems = async () => {
    const result = await axios.get(`http://localhost:3001/user`,
    )
  console.log(result.data)
  setItems(result.data)
  setLoading(false)
}

useEffect(() => {
  getItems()
}, [])

return (
  <div className="App">
    {isLoading ? (<Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
      <CircularProgress color="inherit" />
    </Backdrop>) : (
      <h1>hi {items?.name}</h1>
    )}
  </div>
);
}

export default App;
