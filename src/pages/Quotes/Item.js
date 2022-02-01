import React from 'react';
import { Link } from 'react-router-dom';

function Item({item}) {
  return <div>
    <Link to={`/quotes/${item.quote_id}`}>
      {item.quote}
    </Link>
  </div>;
}

export default Item;
