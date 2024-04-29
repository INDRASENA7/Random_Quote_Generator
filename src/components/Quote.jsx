import React, { useEffect, useState } from 'react'

const Quote = () => {
    const [quote,setQuote]=useState([])
     //let api='http://api.quotable.io/random';
     //let api='http://type.fit/api/quotes';
     const handlequote=()=>{
        let api='http://api.quotable.io/random';
     //let api='http://type.fit/api/quotes';
     fetch(api)
     .then(res=>res.json())
     .then(results=>{
        setQuote(results)
        console.log(results)
     })
     }
     useEffect(()=>{
        handlequote();
     },[])
  return (
    <div className='container'>
       
        <i className='fa-solid fa-quote-left'></i>
      <p className='quoto-content'>{quote.content}</p>
      <p className='author'>---{quote.author}</p>
      <p className='tags'>*****{quote.tags}*****</p>
      <div className='button-position'><button onClick={handlequote}>New Quote</button></div>
    </div>
  )
}

export default Quote
