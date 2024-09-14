import CustomTable from "./CustomTable";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Loading from "./TableLoading";
import "../dist/styles.css";

interface FilterRowsByColumnGroup {
    column: string;
    values: string[];
}

interface ChakraTableProps {
    loading?: boolean;
    error?: any;
    rowData?: any[];
    sortable?: boolean;
    caption?: string;
    pagination?: boolean;
    rowsPerPage?: number;
    paginationLength?: number;
    filterRowsByColumnGroup?: FilterRowsByColumnGroup[];
    columnsData?: any[];
    tableParentClass?: string;
    tableChildClass?: string;
    disableDefaultScrollStyle?: boolean;
}

const ChakraTable: React.FC<ChakraTableProps> = ({
    loading,
    error,
    rowData = [],
    sortable = false,
    caption = "",
    pagination = false,
    rowsPerPage = 6,
    paginationLength = 5,
    filterRowsByColumnGroup,
    columnsData,
    tableParentClass,
    tableChildClass,
    disableDefaultScrollStyle = false
}) => {

    return (
        <ChakraProvider>
            <Box className={`w-full flex justify-center items-center ${tableParentClass} ${disableDefaultScrollStyle ? '' : 'table-scroll'}`}>
                {loading ? <Loading /> :
                    <CustomTable
                        error={error}
                        headers={columnsData || []} //column data
                        row={rowData}// row data
                        //Optional Props
                        sortable={sortable} //Boolean, default false. To sort columns by ascending or descending when clicking the column name. This won't work for cell renderer components inside a column. Only for string and numbers
                        caption={caption} //String, This is the header props for the table, default behaviour has no header so headers are visible only when a caption is provided. It displays search, total rows, total filtered rows and filter.
                        pagination={pagination} // Boolean, Default: Pagination is turned off by default so this prop is required if you want to enable the pagination.
                        defaultRowsPerPage={rowsPerPage}//  Number, By default the rows per page is enabled when pagination is enabled. Default rows per page are 6 if no value is provided    
                        defaultPaginationLength={paginationLength} //  Number, these set the limit for pagination numbers range for example a value of 5 will limit displaying 1-5 with next and previous buttons to jump to 6-10 and thus by it goes on till the rows end. The default pagination length is 5 if no value is provided.                    
                        filterRowsByColumnGroup={filterRowsByColumnGroup} //filterRowsByColumnGroup: Array of Objects, The default behaviour of filters is disabled if filterRowsByColumnGroup is not provided.Format: [ { label: 'API name or local name', name: 'display name for header', cellRenderer: <react component>, optional, use only if you need to add components in row  }, { label: 'API name or local name', name: 'display name for header'} ]
                        tableChildClass={tableChildClass}
                    />}
            </Box>
        </ChakraProvider>
    )
}

export default ChakraTable;

export const ChevronDownIcon = () => {
    return (
        <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.99999 7.5L0.707107 3.20711C0.316582 2.81658 0.316582 2.18342 0.707107 1.79289C1.09763 1.40237 1.7308 1.40237 2.12132 1.79289L5 4.67077L7.87868 1.79289C8.2692 1.40237 8.90237 1.40237 9.29289 1.79289C9.68342 2.18342 9.68342 2.81658 9.29289 3.20711L5.00001 7.5L4.99999 7.5Z"
                fill="#1A1A1A"
            />
        </svg>
    );
}




