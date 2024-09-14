## Chakra Table Component

This is an npm package for creating tables in any React web application. With this package, you can create tables with pagination, sorting, and multi level filters. It's an lightweight and easy to use package with responsive design.

[Check out the demo page](https://saibarathr.github.io/Reusable-Table/) for a live example.

### Installation

```bash
npm install chakra-ui-table-responsive
```

### Usage

```jsx
import { ChakraTable } from "chakra-ui-table-responsive";

const sampleProps = {
  loading: false,
  error: null,
  rowData: [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
  ],
  sortable: true,
  caption: 'Sample Table',
  pagination: true,
  rowsPerPage: 5,
  paginationLength: 3,
  filterRowsByColumnGroup: [
    { column: 'name', values: ['John Doe', 'Jane Smith'] },
  ],
  columnsData: [
    { label: 'id', name: 'ID' },
    { label: 'name', name: 'Name' },
    { label: 'age', name: 'Age' },
  ],
  tableParentClass: 'custom-parent-class',
  tableChildClass: 'custom-child-class',
  disableDefaultScrollStyle: false,
};

const App = () => (
    <ChakraTable {...sampleProps} />
);

export default App;
```

### Props

- **loading**: [`Boolean`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FDev%2Fchakra-ui-table-library%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A14%7D%7D%5D%2C%22fc7e9e91-028e-4fad-b13d-e84464203a68%22%5D "Go to definition") - Default: `false`. Shows a loading spinner when `true`.
- **error**: [`any`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FDev%2Fchakra-ui-table-library%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A41%2C%22character%22%3A28%7D%7D%5D%2C%22fc7e9e91-028e-4fad-b13d-e84464203a68%22%5D "Go to definition") - Error object to display if there's an error.
- **rowData**: [`Array`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FDev%2Fchakra-ui-table-library%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A20%2C%22character%22%3A29%7D%7D%5D%2C%22fc7e9e91-028e-4fad-b13d-e84464203a68%22%5D "Go to definition") - Array of objects representing the rows data.
- **sortable**: [`Boolean`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FDev%2Fchakra-ui-table-library%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A14%7D%7D%5D%2C%22fc7e9e91-028e-4fad-b13d-e84464203a68%22%5D "Go to definition") - Default: `false`. Enables sorting of columns by clicking the column name.
- **caption**: [`String`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FDev%2Fchakra-ui-table-library%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A5%2C%22character%22%3A13%7D%7D%5D%2C%22fc7e9e91-028e-4fad-b13d-e84464203a68%22%5D "Go to definition") - Header for the table. Displays search, total rows, total filtered rows, and filter.
- **pagination**: [`Boolean`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FDev%2Fchakra-ui-table-library%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A14%7D%7D%5D%2C%22fc7e9e91-028e-4fad-b13d-e84464203a68%22%5D "Go to definition") - Default: `false`. Enables pagination.
- **rowsPerPage**: [`Number`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FDev%2Fchakra-ui-table-library%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A24%7D%7D%5D%2C%22fc7e9e91-028e-4fad-b13d-e84464203a68%22%5D "Go to definition") - Default: [`6`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FDev%2Fchakra-ui-table-library%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A126%7D%7D%5D%2C%22fc7e9e91-028e-4fad-b13d-e84464203a68%22%5D "Go to definition"). Number of rows per page when pagination is enabled.
- **paginationLength**: [`Number`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FDev%2Fchakra-ui-table-library%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A24%7D%7D%5D%2C%22fc7e9e91-028e-4fad-b13d-e84464203a68%22%5D "Go to definition") - Default: [`5`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FDev%2Fchakra-ui-table-library%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A17%2C%22character%22%3A109%7D%7D%5D%2C%22fc7e9e91-028e-4fad-b13d-e84464203a68%22%5D "Go to definition"). Sets the limit for pagination numbers range.
- **filterRowsByColumnGroup**: [`Array`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FDev%2Fchakra-ui-table-library%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A20%2C%22character%22%3A29%7D%7D%5D%2C%22fc7e9e91-028e-4fad-b13d-e84464203a68%22%5D "Go to definition") - Array of objects for filtering rows by column group.
- **columnsData**: [`Array`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FDev%2Fchakra-ui-table-library%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A20%2C%22character%22%3A29%7D%7D%5D%2C%22fc7e9e91-028e-4fad-b13d-e84464203a68%22%5D "Go to definition") - Array of objects representing the columns data.
- **tableParentClass**: [`String`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FDev%2Fchakra-ui-table-library%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A5%2C%22character%22%3A13%7D%7D%5D%2C%22fc7e9e91-028e-4fad-b13d-e84464203a68%22%5D "Go to definition") - Custom class for the table parent.
- **tableChildClass**: [`String`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FDev%2Fchakra-ui-table-library%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A5%2C%22character%22%3A13%7D%7D%5D%2C%22fc7e9e91-028e-4fad-b13d-e84464203a68%22%5D "Go to definition") - Custom class for the table child.
- **disableDefaultScrollStyle**: [`Boolean`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FDev%2Fchakra-ui-table-library%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A14%7D%7D%5D%2C%22fc7e9e91-028e-4fad-b13d-e84464203a68%22%5D "Go to definition") - Default: `false`. Disables default scroll style.

## Feature List / Optional Props

**sortable**: Boolean, To sort columns by ascending or descending when clicking the column name. This won't work for cell renderer components inside a column. Only for string and numbers


**caption**: String, This is the header props for the table, default behaviour has no header so headers are visible only when a caption is provided. It displays search, total rows, total filtered rows and filter.


**Search** Bar: Default disabled. Search will be enabled once captions are provided so its default behaviour depends on captions that enable headers.


**pagination**: Boolean, Default: Pagination is turned off by default so this prop is required if you want to enable the pagination.


**defaultRowsPerPage**: Number, By default the rows per page is enabled when pagination is enabled. Default rows per page are 6 if no value is provided.


**defaultPaginationLength**: Number, these set the limit for pagination numbers range for example a value of 5 will limit displaying 1-5 with next and previous buttons to jump to 6-10 and thus by it goes on till the rows end. The default pagination length is 5 if no value is provided.


**filterRowsByColumnGroup**: Array of Objects.

**Format**: ```[ { column: 'name of column 1', values: [ 'filter list of this column 1', 'multi filters for same columns' ] },  { column: 'name of column 2', values: [ 'filter list of this column 2', 'multi filters for same columns' ] } ]```.

The default behaviour of filters is disabled if filterRowsByColumnGroup is not provided. 

``` Example: filterRowsByColumnGroup={[{ column: 'status', values: ['failed', 'waiting', 'paid'] }, { column: 'name', values: ['Sai Barath', 'Lokesh'] }, { column: 'purchaseId', values: ['25602'] }]}```


**row**: Arrays of Objects, Rows Data. Format: ```[ { columnName: value }, { columnName: value }, { columnName: value } ] ```.


**headers**: Arrays of Objects, List of columns;

**Format**: ```[ { label: 'API name or local name', name: 'display name for header', cellRenderer: <react component>, optional, use only if you need to add components in row  }, { label: 'API name or local name', name: 'display name for header'} ]```

**cellRenderer**: React Component, the Default behaviour is to render a normal row value but if cellRenderer is provided then a callback function will return an array with array[0]: column name & array[1]: row value. For every single row, this cellRenderer will be called with new row values to give options to render different options based on row values instead of the same component.

### Example

```jsx
const columnsData = useMemo(() => [
  { label: 'timeStamp', name: 'TimeStamp' },
  { label: 'status', name: 'Status', cellRenderer: StatusRenderer }
], []);

function StatusRenderer(value) {
  const backgroundColor = value[1] === 'failed' ? 'bg-red-200' : value[1] === 'waiting' ? 'bg-yellow-100' : 'bg-green-200';
  return <div className={`flex items-center p-1 capitalize text-gray-800 font-medium text-sm rounded-lg justify-center min-w-[60px] ${backgroundColor}`}>{value[1]}</div>;
}
```

### Sample Table Pics

![Sample Table](https://github.com/SaiBarathR/Custom-Table/assets/58382813/8bea2f71-a85f-4405-bdfc-d4a816c48b89)

### Filter Pics

![Filter Example](https://github.com/SaiBarathR/Custom-Table/assets/58382813/d9907af6-1461-4874-8db9-2babf5908120)

### Search Pics

![Search Example](https://github.com/SaiBarathR/Custom-Table/assets/58382813/5d9574dc-ca1d-4aa0-9e40-51f31d3386cf)

**Advanced Version:** [Check out the advanced version using React with Ag-grid library](https://github.com/SaiBarathR/react-reusable-components/tree/main/Custom-Ag-Grid)