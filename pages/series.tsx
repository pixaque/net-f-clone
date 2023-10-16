import { NextPageContext } from 'next';
import { getSession, signIn } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import MovieList from '@/components/MovieList';
import InfoModal from '@/components/InfoModal';
import useMovieList from '@/hooks/useMovieList';
import useInfoModalStore from '@/hooks/useInfoModalStore';

export async function getServerSideProps(context: NextPageContext) {
  
    const session = await getSession(context);
  
    console.log(context)
  
    if (!session) {
      return {
        redirect: {
          destination: '/auth',
          permanent: false,
        }
      }
    }
  
    return {
      props: {}
    }
  }
  
const Series = () => {

    const { data: movies = [] } = useMovieList("series");
    const {isOpen, closeModal} = useInfoModalStore();


    return (
      <>
      <Navbar />
      <InfoModal visible={isOpen} onClose={closeModal} />
      
      <div className="pt-20 pb-40">
        <MovieList title="Series" data={movies} />
      </div>
    </>
    );
  }
  
  export default Series;
