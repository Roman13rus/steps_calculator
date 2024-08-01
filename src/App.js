import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { useState  } from 'react';
function App() {
  const [items, setItems] = useState([])
  const handledelete = (item) => {
    setItems((oldItems) => oldItems.filter((oldItem) => oldItem !== item))
  }
  const handleAdd = (newItem) => {
    let userIndex = items.findIndex(item => item.date === newItem.date)
    let myItems = []
    if(items.length > 0 && userIndex !== -1) {
      const numRangeOld = Number(items[userIndex].range)
      const numRangeNew = Number(newItem.range)
      items[userIndex].range = numRangeOld + numRangeNew
      const myItems = items.slice()
      setItems(myItems)
    } else {
      myItems = items.concat(([newItem]))
      myItems.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      })
      setItems(myItems)
    }


    
  }
  return (
   <>
    <Form
      handleAdd =  {handleAdd}
    />
    <Table
      items = {items}
      handledelete = {handledelete}
    />
    </>
  );
}

export default App;
