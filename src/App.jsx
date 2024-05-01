import React, { useEffect,useState} from 'react';
import Search from './components/Search';
import Form from './components/Form';
import Header from './components/Header';
import Table from './components/Table';

function Transactions() {
    const [userTransactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);


    //fetch data
    useEffect(() => {
      fetch("https://bank-of-flatiron-eta-five.vercel.app/")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setTransactions(data)
        setFilteredTransactions(data)
      })
    },[])

    //searching transaction by desription
    const handleSearch = (query) => {
      const filtered = userTransactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredTransactions(filtered);
  }
  
  //function for adding transactions 
    const handleAddTransactions = (newTransaction) => {
      setTransactions([...userTransactions, newTransaction]);
      setFilteredTransactions([...userTransactions, newTransaction]);
    }
    
  //function for deleting transactions
  const deleteTransaction = (id) => {
    const updatedTransactions = userTransactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
    setFilteredTransactions(updatedTransactions);
  }
  
  
  //rendering components
    return (
     <>
     <Header />
     <Search onSearch={handleSearch}/>
     <Table filteredTransactions={filteredTransactions} onDelete={deleteTransaction} />
     
     <hr />
     <Form onAddTransaction={handleAddTransactions} />
     
     </>
    );
    }


export default Transactions;
