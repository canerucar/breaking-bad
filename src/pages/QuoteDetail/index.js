import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './index.scss';

import { useSelector } from 'react-redux';

function QuoteDetail() {

  const { quote_id } = useParams();

  const quote = useSelector((state)=> state.quotes.items.find((item) => item.quote_id === Number(quote_id)));

  if (!quote) {
    return <Navigate to="/quotes" />;
  }
  
  return <div className='detail-wrapper'>
    <h1>{quote.author}</h1>
    <p>{quote.quote}</p>
    {/* <pre>{ JSON.stringify(quote, null, 2) }</pre> */}
  </div>;
}

export default QuoteDetail;
