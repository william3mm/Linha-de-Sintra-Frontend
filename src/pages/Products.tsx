import React from 'react';
import { MyModal } from '../components/AddProductModal';
import { DataTableComponent } from '../components/Datatable';
import Layout from '../components/Layout';
// import {Filtering} from '../components/Teste';

// import { Container } from './styles';

const Products: React.FC = () => {
  return <Layout >
    <div className="text-black">
      
    < MyModal/>
    <DataTableComponent/>
    </div>
    </Layout>;
}

export default Products;