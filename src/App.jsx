
import { useState } from 'react';
import './App.css';
import HeaderContainer from './components/HeaderContainer';
import ItemContainer from './components/ItemContainer';


function App() {

  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('All');


  const handleAddItems = (item) => {


    const newItem = { id: crypto.randomUUID(), item, packed: false, category }
    setItems([newItem, ...items]);


  }

  const handleRemoveItem = (id) => {

    setItems(items.filter(item => item.id !== id))
  }

  const handleRemoveAllItemsNotPacked = () => {
    setItems(items.filter(item => item.packed === true));

  }

  const handleRemoveAllItemsPacked = () => {
    setItems(items.filter(item => item.packed === false));

  }

  const handleTogglePacked = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, packed: !item.packed } : item
    ));
  }





  // const addItemWithcategory = (item) => {
  //   handleAddItems(item, category)
  // }

  return (

    <div classname="App">

      <div className="max-w-[1100px] mx-auto py-8">

        <HeaderContainer
          items={items}
          handleAddItems={handleAddItems}
          setCategory={setCategory}
        />


        <ItemContainer
          items={items}

          removeItem={handleRemoveItem}
          removeAllItemsNotPacked={handleRemoveAllItemsNotPacked}
          removeAllItemsPacked={handleRemoveAllItemsPacked}
          togglePacked={handleTogglePacked}

        />


      </div>


    </div>



  );
}

export default App;
