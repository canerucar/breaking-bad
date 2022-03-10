import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function Item({item}) {
  return <div className='quotes-wrapper'>
    <Link to={`/quotes/${item.quote_id}`}>
      {item.quote}
    </Link>
  </div>;
}

export default Item;
