import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import './styles.scss';

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status );
  const charReject = useSelector((state) => state.characters.charReject);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const dispatch = useDispatch();

  useEffect(() => {
    if(status === 'idle')
    dispatch(fetchCharacters());
  }, [dispatch, status]);

  if (status === 'failed') {
    return <div>
      <Error message={charReject} />
    </div>
  }
  
  return (
    <div className="home-wrapper">
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((item) => (
          <div key={item.char_id}>
            <Link to={`/detail/${item.char_id}`}>
              <img src={item?.img} alt="Breaking Bad Characters" className="character" />
              <h4 className="character-name">{item.name} <span>({item.nickname})</span></h4>
            </Link>
          </div>
        ))}
      </Masonry>

      {status === 'loading' && <Loading />}

      {hasNextPage && status !== 'loading' && <button onClick={()=> dispatch(fetchCharacters(nextPage))} className="load-more">Load More ({nextPage}) </button>}

      {!hasNextPage && <div>No more :( </div>}
    </div>
  );
}

export default Home;
