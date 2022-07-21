import  Sidebar  from './Sidebar';
import React from 'react';

// import { Container } from './styles';
interface props {
    children:string | JSX.Element
}
const Layout: React.FC<props> = ({children}) => {
    return (
        <div className='h-screen flex justify-start'>
            <Sidebar />
            <div className='bg-sky-500 flex-1 p-4 text-white border border-dashed'>
                {children}
            </div>
        </div>
    );
}

export default Layout;