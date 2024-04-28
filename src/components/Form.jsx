import React, {useState} from "react";

function Form(props) {
    const [newTransaction, setNewTransaction] =  useState({
        date: "",
        description: "",
        category: "",
        amount: "",
        
    });

    function handleChange(event){
        const { name, value} = event.target;
        setNewTransaction((prevTransaction) => ({
            ...prevTransaction,
            [name]: value
        }));
  //      setTransactions(event.target.value);
    }
 function handleSubmit(event){
    event.preventDefault();
    props.onAddTransaction(newTransaction);

    setNewTransaction({
        date: "",
        description: "",
        category: "",
        amount: "",
        delete: "",
    });
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
       
        <input
          type="date"
          name="date"
          value={newTransaction.date}
          onChange={handleChange}
          placeholder=""
       />
      
      <input 
         type="text"
         name="description"
         value={newTransaction.description}
         onChange={handleChange}
         placeholder="Description"
       />
      
      <input
        type="text"
        name="category"
        value={newTransaction.category}
        onChange={handleChange}
        placeholder="Category"
      />
      
      <input
        type="number"
        name="amount"
        value={newTransaction.amount}
        onChange={handleChange}
        placeholder="Amount"
      />
<br></br>
      <button type="submit" id ="btn">Add transaction</button>
    </form>
    );
}

export default Form;