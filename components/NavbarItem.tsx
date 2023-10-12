import { useRouter } from "next/router";
import react, { useCallback, useState } from "react";

interface NavbarItemProps {
  label: string;
  active?: boolean;
  linkPage: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, linkPage, active }) => {

  const [activePage, setActivePage] = useState(false);
  const router = useRouter();

  const selectPage = useCallback(() => {

    //setActivePage(true);
    //alert(activePage);
    console.log("Active: ", activePage);
    router.push(linkPage);
    console.log("Link: ", linkPage);
    

    handleClick();
    

  }, [router]);

  const handleClick = () => {
    
    setTimeout(() => {

      setActivePage(true);
      console.log("Active click: ", activePage);

    }, 1000);

  };

  return (
    <div onClick={() => selectPage()} className={activePage === true ? 'text-white font-bold cursor-default' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}>
      {label}
    </div>
  )
}

export default NavbarItem;
