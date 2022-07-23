import DataTable, { TableColumn } from 'react-data-table-component';

type DataRow = {
    name: string;
    description: string;
    price: number;
    qtd: number;
    category: string;
};
const data = [
    {
        price: 820230,
        description: 'Beetlejuice',
        name: 'Óleo',
        qtd:12,
        category:"produtos alimentares"

    },
    {
        price: 93903,
        description: 'Ghostbusters',
        name: 'Arroz',
        qtd:20,
        category:"produtos alimentares"
    },
]
const columns: TableColumn<DataRow>[] = [
    {
        name: 'Nome',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Descrição',
        selector: row => row.description,
        sortable: true,
    },
    {
        name: 'Preço',
        selector: row => row.price,
        sortable: true,
    },
    {
        name: 'Quantidade',
        selector: row => row.qtd,
        sortable: true,
    },
    {
        name: 'Categoria',
        selector: row => row.category,
        sortable: true,
    },
];

const paginationOptions = {
    rowsPerPageText: "produtos por pagina",
    rangeSeparatorText:"de",
    // selectAllRowsItem:true,
    selectAllRowsItemText:"todos"

}
const dataTableStyle = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
            
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
            font:"blue"
        },
    },
};
export const DataTableComponent: React.FC = () => {
    return <DataTable 
    pagination 
    selectableRows  
    columns={columns} 
    data={data} 
    title="Produtos"
    paginationComponentOptions={paginationOptions}
    highlightOnHover={true}
    customStyles={dataTableStyle}
    theme="solarized"
    />;
};