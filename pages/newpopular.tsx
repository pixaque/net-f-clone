import Navbar from '@/components/Navbar';
import MovieList from '@/components/MovieList';
import InfoModal from '@/components/InfoModal';
import useMovieList from '@/hooks/useMovieList';
import useInfoModalStore from '@/hooks/useInfoModalStore';

const MyList = () => {
    const { data: movies = [], isLoading } = useMovieList("film");
    const { data: series = [] } = useMovieList("series");
    //console.log(movies);
    const {isOpen, closeModal} = useInfoModalStore();

    return (
      <>
      <Navbar />
      <InfoModal visible={isOpen} onClose={closeModal} />
      
      <div className="pt-20 pb-40">
        {
          isLoading 
        ? 
        <div className="absolute w-full text-center top-[30%] h-full">
          <div className="loadingspinner">
            <div id="square1"></div>
            <div id="square2"></div>
            <div id="square3"></div>
            <div id="square4"></div>
            <div id="square5"></div>
          </div>
        </div>
        :
        <>
          <MovieList title="New and Popular Films" data={movies} />
          <MovieList title="New and Popular Series" data={series} />
        </>
        }
        
      </div>
    </>
    );
  }
  
  export default MyList;
