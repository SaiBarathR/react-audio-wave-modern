import { Checkbox, IconButton, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuList } from "@chakra-ui/react"
import { useEffect, useState } from "react";

const SearchIcon = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 0C10.0899 0 13 2.91015 13 6.5C13 8.085 12.5 9.545 11.7 10.7L15.15 14.15L14.15 15.15L10.7 11.7C9.545 12.5 8.085 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0ZM6.5 1C3.46243 1 1 3.46243 1 6.5C1 9.53757 3.46243 12 6.5 12C9.53757 12 12 9.53757 12 6.5C12 3.46243 9.53757 1 6.5 1Z" fill="#536580" />
        </svg>
    );
}

type headerProps = {
    //number of filtered rows
    total: number;
    //header titile of the table
    caption: string;
    rowData: any;
    //function to update filtered row list
    filterRows: any;
    //array of obj with values availble to filter from multiple columns
    filterRowsByColumnGroup: any;
    //filtered row list
    onlyFilteredDatas: any;
}

export default function HeaderComponent({ total, caption, rowData, filterRows, filterRowsByColumnGroup, onlyFilteredDatas }: headerProps) {

    //local state to handle ui values for the filter if its checked or unchecked
    const [filterRowsByColumn, setFilteredRowsByColumn] = useState<any>([])

    useEffect(() => {
        resetFilters()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterRowsByColumnGroup])

    //remove any multi filter if present
    function resetFilters() {
        //gathers all the filters values of the column from 'filterRowsByColumnGroup' and saves the to a local state filterRowsByColumn
        setFilteredRowsByColumn(filterRowsByColumnGroup.map((filterValues: any) => filterValues.values.map((item: any) => ({ [item]: false, column: filterValues.column, filterVal: item }))))
    }

    //seraches values based on search input and remove any multi filter if present
    function filterRowDatas(event: React.ChangeEvent<HTMLInputElement>) {
        const filteredList = rowData.filter((rowObj: any) => Object.values(rowObj).filter((value: any) => value.toString().toLowerCase().includes(event.target.value)).length > 0)
        filterRows(filteredList);
        resetFilters()
    }


    //handles multiple multi level arrays of objects into a single array of object with unique values
    function getUniqueValuesInAllArrays(arrays: any[][]): any[] {
        const commonValues: any[] = [];
        arrays.reduce((obj: any, arr) => {
            for (const item of arr) {
                const key = JSON.stringify(item);
                obj[key] = (obj[key] || 0) + 1;
                if (obj[key] === arrays.length) {
                    commonValues.push(JSON.parse(key));
                }
            }
            return obj;
        }, {});
        return commonValues;
    }

    //handle filtering based on the type of value selected from a particular column without disturbing the existing filter if present in the same column
    function handleAddFilterValues(localFileterdColumnGroup: any) {
        let localFilterList: any[] = []
        filterRowsByColumnGroup.map((value: any, index: number) => {
            let localTemp: any[] = []
            //checks mutiple columns to make sure all the previous filter logic is saved
            value.values.map((item: any, subIndex: number) => {
                let localFilterObj = localFileterdColumnGroup[index][subIndex]
                //updating the filter value of the column which it belongs to
                if (localFilterObj[item]) {
                    localTemp = [...rowData.filter((rowObj: any) => rowObj[value.column].toString().toLowerCase() === (localFilterObj.filterVal).toString().toLowerCase()), ...localTemp]
                }
            })
            //only update the list if atleast row value matches the filter value
            if (localTemp.length > 0) {
                localFilterList.push(localTemp)
            }
        })
        //sets the new filtered values after obtaining unique list of rows
        filterRows(getUniqueValuesInAllArrays(localFilterList))
    }

    //checks for previous selected filters w.r.t column name and filter values
    function checkForFiltersByColumn(array: any[][]): boolean {
        return array.some((innerArray) => {
            return innerArray.some((obj) => {
                const value = Object.values(obj)[0];
                return typeof value === 'boolean' && value === true;
            });
        });
    }

    //Handles multi column filtering when selected
    function handleClickFilterCheckbox(event: any, value: string, column: string, index: number, subIndex: number) {
        let localFileterdColumnGroup = structuredClone(filterRowsByColumn);
        localFileterdColumnGroup[index][subIndex][value] = event.target.checked
        //to add a filter
        if (event.target.checked) {
            handleAddFilterValues(localFileterdColumnGroup)
        }
        else {
            //to remove a filter value after unchecked
            let filteredList = onlyFilteredDatas.filter((rowObj: any) => !(rowObj[column].toString().toLowerCase() === (value.toString().toLowerCase())))
            filterRows((filteredList.length > 0 ? filteredList : rowData));
            //after removing checks for previous selected filters is present then it will add those filter
            checkForFiltersByColumn(localFileterdColumnGroup) && handleAddFilterValues(localFileterdColumnGroup);
        }
        //to update filter ui based on event valu cheked
        setFilteredRowsByColumn(localFileterdColumnGroup)
    }

    return (
        <div className=" border-b-gray-300 border-b ">
            <div className="flex items-center p-5 pt-2 pb-2 pl-6 gap-2 h-max">
                <h1 className="font-semibold text-base">{caption}</h1>
                <p className="text-[#99A0A8] text-sm mt-[2px] flex-grow">Total : {total}</p>
                {onlyFilteredDatas.length <= total && <p className="text-[#99A0A8] text-sm mt-[2px] mr-2">Filered Rows : {onlyFilteredDatas.length}</p>}
                {/*Searchbar */}
                <InputGroup width={"max-content"} >
                    <Input placeholder='Search' onChange={filterRowDatas} />
                    <InputRightElement width='2.5rem'> <SearchIcon /></InputRightElement>
                </InputGroup>
                {/* Filter */}
                {filterRowsByColumn.length > 0 && <Menu>
                    <MenuButton as={IconButton} aria-label='filter'
                        icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1H1L6.6 8.35778V13.4444L9.4 15V8.35778L15 1Z" stroke="#536580" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                    />
                    <MenuList>
                        <div className="flex- flex-col justify-start text-lg ">
                            <div className="flex justify-between items-center w-full border-b border-[#D9D9D9] p-3 pt-0 pb-1">
                                <p className="font-medium text-base">Filter by</p>
                                <button onClick={() => { resetFilters(); filterRows(rowData); }} className="text-[#3D8BF8] text-base hover:text-white hover:bg-[#3D8BF8] p-1 rounded">Reset Filters</button>
                            </div>
                            {filterRowsByColumnGroup.map((filterValues: any, index: number) => <div key={filterValues.column}>
                                <div className="capitalize w-full p-3 pb-0">
                                    <label className="text-[#6B778C] text-base font-medium">{filterValues.column}</label>
                                    <div className="flex flex-col p-1 pt-0">
                                        {filterValues.values.map((value: any, subIndex: number) => <div className="text-base m-1 mb-0" key={value + subIndex}>
                                            <Checkbox size='md' colorScheme="linkedin" onChange={(e) => { handleClickFilterCheckbox(e, value, filterValues.column, index, subIndex) }}
                                                isChecked={filterRowsByColumn[index][subIndex][value]}
                                            >
                                                {value}
                                            </Checkbox>
                                        </div>)}
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </MenuList>
                </Menu>}
            </div>
        </div>
    )
}