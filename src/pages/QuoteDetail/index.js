import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

function QuoteDetail() {

  const { quote_id } = useParams();

  const quote = useSelector((state)=> state.quotes.items.find((item) => item.quote_id === Number(quote_id)));

  if (!quote) {
    return <Navigate to="/quotes" />;
  }
  
  console.log(quote_id);
  return <div>
    <h1>Quote detail</h1>
    <pre>{ JSON.stringify(quote, null, 2) }</pre>
  </div>;
}

export default QuoteDetail;
