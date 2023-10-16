import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import InfoModal from '@/components/InfoModal';
import useFavorites from '@/hooks/useFavorites';
import useInfoModalStore from '@/hooks/useInfoModalStore';
import { NextPageContext } from 'next';
import { getSession, signIn } from 'next-auth/react';

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
