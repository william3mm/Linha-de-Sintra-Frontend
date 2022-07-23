import React from 'react';
import { DataTableComponent } from '../components/Datatable';
import Layout from '../components/Layout';

// import { Container } from './styles';

const Products: React.FC = () => {
  return <Layout >
    <div className="text-black">

    <DataTableComponent/>
    </div>
    </Layout>;
}

export default Products;