import { NextPageContext } from 'next';
import { getSession, signIn } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import MovieList from '@/components/MovieList';
import InfoModal from '@/components/InfoModal';
import useMovieList from '@/hooks/useMovieList';
import useMovie from '@/hooks/useMovie';
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
const Films = () => {
  const {isOpen, closeModal} = useInfoModalStore();
  const { data: movies = [] } = useMovieList("film");


    return (
      <>
      <Navbar />
      <InfoModal visible={isOpen} onClose={closeModal} />
      
      <div className="pt-20 pb-40">
        <MovieList title="Films" data={movies} />
      </div>
    </>
    );
  }
  
  export default Films;
