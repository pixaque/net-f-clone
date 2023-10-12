import Navbar from '@/components/Navbar';
import MovieList from '@/components/MovieList';
import InfoModal from '@/components/InfoModal';
import useMovieList from '@/hooks/useMovieList';
import useInfoModalStore from '@/hooks/useInfoModalStore';

const MyList = () => {
    const { data: movies = [] } = useMovieList();
    const {isOpen, closeModal} = useInfoModalStore();

    return (
      <>
      <Navbar />
      <InfoModal visible={isOpen} onClose={closeModal} />
      
      <div className="pt-20 pb-40">
        <MovieList title="New and Popular" data={movies} />
      </div>
    </>
    );
  }
  
  export default MyList;
