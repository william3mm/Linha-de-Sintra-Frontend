import  Sidebar  from './Sidebar';
import React from 'react';

// import { Container } from './styles';

const Layout: React.FC = () => {
    return (
        <div className='h-screen flex justify-start'>
            <Sidebar />
            <div className='bg-sky-500 flex-1 p-4 text-white border border-dashed'>
                MAIN CONTENT
            </div>
        </div>
    );
}

export default Layout;