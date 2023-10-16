import { useRouter } from "next/router";
import react, { useCallback, useState } from "react";

interface NavbarItemProps {
  label: string;
  linkPage: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, linkPage }) => {

  const router = useRouter();

  const selectPage = useCallback(() => {

    router.push(linkPage);

  }, [router]);


  return (
    <div onClick={() => selectPage()} className={router.asPath === linkPage ? 'text-white font-bold cursor-default' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}>
      {label}
    </div>
  )
}

export default NavbarItem;
