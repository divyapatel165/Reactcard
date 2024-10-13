import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductList } from './components/ProductList';
import AddItem from './components/AddItem';

function App() {
  const products = [
    {
      price: 99999,
      name: "IPhone 10s max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10s max",
      quantity: 0,
    }
  ];
  
  const [productList, setProductList] = useState(products);
  const [totalAmount,setTotalAmount]=useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount +=newProductList[index].price
    setTotalAmount(newTotalAmount)
    setProductList(newProductList);
  };


  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity > 0 )
      {
        newProductList[index].quantity-- ;
        newTotalAmount -=newProductList[index].price
      } 
    setTotalAmount(newTotalAmount)
    setProductList(newProductList);
  };

  const resetQuantity=()=>{
    let newProductList = [...productList];
    newProductList.map((products)=>{
      products.quantity=0
    })
    setProductList(newProductList)
    setTotalAmount(0);
  }

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount=totalAmount;
    newTotalAmount-=newProductList[index].quantity*newProductList[index].price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem =(name,price)=>{
    let newProductList=[...productList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    });
    setProductList(newProductList)
  }

  return (
    <React.Fragment>
      <Navbar />
      <main className='container mt-5'>
          <AddItem addItem={addItem}/>
        <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem

        }/>
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </React.Fragment >
  );
}

export default App;
