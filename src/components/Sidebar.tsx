import { ArrowsInCardinal, CaretDoubleLeft, Gear, GearSix, IconContext, Queue, ShoppingCartSimple, SignIn, SignOut, SimCard, SlackLogo, Stack, XCircle } from 'phosphor-react';
import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
type menuItems = {
  id: number,
  label: string,
  link: string
}
const menuItems = [
  { id: 1, label: "Home", icon: Stack, link: "/" },
  { id: 2, label: "Produtos", icon: ShoppingCartSimple, link: "/produtos" },
  { id: 3, label: "Definições", icon: GearSix, link: "/perfil" },
]

const Sidebar: React.FC = () => {
  const [toogleSidebarCollapse, setToogleSidebarCollapse] = useState(true);
  const [IsCollapseble, setIsCollapseble] = useState(false);
  const onMouseOver = () => {
    setIsCollapseble(!IsCollapseble);
  }
const cleaLocation = () =>{
  window.location.pathname = "";
}
  const handleSidebarToggle = () => {
    setToogleSidebarCollapse(!toogleSidebarCollapse)
  }
  const collapseSidebarClass = toogleSidebarCollapse ? `mt-2 text-lg font-medium text-blue-200 ` : `mt-2 text-lg font-medium text-blue-200 hidden `;
  const wrapperSidebarClass = toogleSidebarCollapse ? `h-screen px-4  pt-8 pb-4 bg-white flex flex-col justify-between border  w-80` : `h-screen px-4  pt-8 pb-4 bg-white flex flex-col justify-between border border-dashed w-20`;
  const router = window.location;
  const activeMenu = useMemo(() => menuItems.find(menu => menu.link === router.pathname), [router.pathname])
  const getNavItemClasses = (menu: menuItems | {}) => {
    return `text-black flex items-center cursor-pointer hover:bg-slate-100 rounded w-full overflow-hidden whitespace-nowrap ${activeMenu?.id === menu.id ? "bg-slate-100" : ""}`;
  }

  return (
    <div className={`${wrapperSidebarClass} ease-in-out duration-300 border-r border-gray-100`} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}>
      <div className=' flex flex-col'>
        <div className='flex items-center justify-between relative'>
          <div className={`flex items-center pl-1 gap-4 text-[#6C8CF5] text-lg font-extrabold ${!toogleSidebarCollapse? "hidden":""}`}>
          Logotipo 
            <span className={collapseSidebarClass}>
            </span>
          </div>
          {
            IsCollapseble && <button className='flex justify-end text-gray-600 p-2 rounded bg-slate-200 absolute right-0' onClick={handleSidebarToggle}>
              <CaretDoubleLeft size={20} />
            </button>}
        </div>
        <div className='flex flex-col items-start mt-24'>
          {
            menuItems.map(({ icon: Icon, ...menu }) => {
              const classes = getNavItemClasses(menu);
              return (
                <div className={classes} key={menu.id}>
                  <Link to={menu.link} className="flex py-3 px-3 items-center w-full h-full">
                    <div className='text-gray-600 w-10'>
                      {/* <Stack size={20} /> */}
                      <Icon size={25} />
                    </div>
                    {toogleSidebarCollapse && (
                      <span className='text-lg font-medium text-gray-500'>
                        {menu.label}
                      </span>
                    )}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div className='text-gray-600 w-10'>
          {/* <Stack size={20} /> */}
          <SignOut size={25} />
        </div>
        {toogleSidebarCollapse && (
          <span className='text-lg font-medium text-gray-500'>
              
            <Link to="/login">
              Logout
            </Link>
          </span>
        )}
      </div>
    </div>
  );
}

export default Sidebar;