import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  
  return (
    <div className="w-36 md:w-48 pr-4 rounded p-3 shadow-lg transition-all duration-500 hover:scale-150">
        <img alt="Movie Card" src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard;