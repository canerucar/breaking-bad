import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Masonry from "react-masonry-css";
import './styles.css';

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const charPending = useSelector((state) => state.characters.charPending);
  const charReject = useSelector((state) => state.characters.charReject);
  const dispatch = useDispatch();

  console.log(charPending);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);
  
  if (charPending) {
    return <div>
      <Loading />
    </div>
  }

  if (charReject) {
    return <div>
      <Error message={charReject} />
    </div>
  }
  
  return (
    <div>
      <h1>Characters</h1>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((item) => (
          <div key={item.char_id}>
            <img src={item.img} alt="Breaking Bad Characters" className="character" />
            <h4>{ item.name }</h4>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Home;
