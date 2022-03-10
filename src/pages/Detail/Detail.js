import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
import './index.scss';

function Detail() {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);
  let { char_id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
    .finally(()=> setLoading(false))
  }, [char_id]);

  return <div>
    {
      loading && <Loading />
    }
    {
      char && <div className="char-detail">
        <img src={char.img} alt="details" />
        <h1>{char.name}</h1>
      </div>
    }
    
  </div>;
}

export default Detail;
