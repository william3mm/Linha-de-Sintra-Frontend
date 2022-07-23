import Sidebar from './Sidebar';
import React from 'react';
import { Header } from './Header';

// import { Container } from './styles';
interface props {
    children: string | JSX.Element
}
const Layout: React.FC<props> = ({ children }) => {
    return (
        <div className='h-screen flex justify-start'>
            <Sidebar />
            <div className='min-h-screnn  flex-1  '>

                <Header />
                <main className=' md:overflow-y-auto sm:overflow-y-auto h-screen overflow-y-hidden'>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-4">
                        {/* Replace with your content */}
                        <div className="px-4 py-6 sm:px-0 bg-white rounded-xl">
                        {children}

                        </div>
                        {/* /End replace */}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Layout;