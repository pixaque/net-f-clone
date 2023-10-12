import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import InfoModal from '@/components/InfoModal';
import useFavorites from '@/hooks/useFavorites';
import useInfoModalStore from '@/hooks/useInfoModalStore';

const MyList = () => {
    const { data: favorites = [] } = useFavorites();
    const {isOpen, closeModal} = useInfoModalStore();

    return (
      <>
      <Navbar />
      <InfoModal visible={isOpen} onClose={closeModal} />
      
      <div className="pt-20 pb-40">
        <MovieList title="My List" data={favorites} />
      </div>
    </>
    );
  }
  
  export default MyList;
