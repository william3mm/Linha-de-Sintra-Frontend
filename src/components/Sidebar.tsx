import { CaretDoubleLeft, IconContext } from 'phosphor-react';
import React, { useState } from 'react';

const menuItems = [
  { id: 1, label: "Home", icon: "homeIcon", Link: "/" },
  { id: 2, label: "Produtos", icon: "Produtos", Link: "/produtos" },
  { id: 3, label: "Definições", icon: "Definicoes", Link: "/definicoes" },
]

const Sidebar: React.FC = () => {
  const [toogleSidebarCollapse, setToogleSidebarCollapse] = useState(true);
  const [IsCollapseble, setIsCollapseble] = useState(false);
  const onMouseOver = () => {
    setIsCollapseble(!IsCollapseble);
  }

  const handleSidebarToggle = () => {
    setToogleSidebarCollapse(!toogleSidebarCollapse)
  }
  const collapseSidebarClass = toogleSidebarCollapse ? `mt-2 text-lg font-medium text-blue-200 ` : `mt-2 text-lg font-medium text-blue-200 hidden `;
  const wrapperSidebarClass = toogleSidebarCollapse ? `h-screen px-4  pt-8 pb-4 bg-white flex flex-col border border-dashed w-80` : `h-screen px-4  pt-8 pb-4 bg-white flex flex-col border border-dashed w-20`;
  const router = useRouter();
  const activeMenu = useMemo(() => menuItems.find(menu => menu.Link === "active"), [second])
  const getNavItemClasses = (menu:string) =>{
    return `flex items-center cursor-pointer hover:bg-blue-200 rounded w-full overflow-hidden whitespace-nowrap`;
  }
  
  return (
    <div className={`${wrapperSidebarClass} ease-in-out duration-300`} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}>
      <div className=' flex flex-col'>
        <div className='flex items-center justify-between relative'>
          <div className='flex items-center pl-1 gap-4 text-blue-300 '>
            Logo
            <span className={collapseSidebarClass}>
              Logo
            </span>
          </div>
          {
            IsCollapseble && <button className='flex justify-end text-gray-600 p-2 rounded bg-slate-200 absolute right-0' onClick={handleSidebarToggle}>
              <CaretDoubleLeft size={20} />
            </button>}
        </div>
        <div className='flex flex-col items-start mt-24'>
          {
          menuItems.map(({icon: icon, ...menu })=>{
            return(
              <div className='text-black'>{menu.label}</div>
            );
          })}
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Sidebar;