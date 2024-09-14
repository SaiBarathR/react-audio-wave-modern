import { Button, Menu, MenuButton, MenuItem, MenuList, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState, useMemo } from "react"
import { ChevronDownIcon } from "./ChakraTable";

type paginationProps = {
    //filtered row list
    rows: any;
    //function to set current page row list
    setCurrentRow: any;
    //number of items to be displayed in a single page
    defaultRowsPerPage: number;
    //number of pagination number included between next and previous buttons
    defaultPaginationLength: number;
}

export default function Paginations({ rows, setCurrentRow, defaultRowsPerPage, defaultPaginationLength }: paginationProps) {
    //number of items to be displayed in a single page
    const [rowsPerPage, setRowsPerPage] = useState<number>(defaultRowsPerPage);
    //current page row list
    const [currentPage, setCurrentPage] = useState(0);
    //total number of pages based on rows per page it will change
    const totalPages = useMemo(() => Math.ceil(rows.length / rowsPerPage), [rows, rowsPerPage])
    //length of pagination number between next and previous buttons
    const [maxItemsBetweenArrows, setMaxItemsBetweenArrows] = useState(0);
    const [isLargerThan1200] = useMediaQuery('(min-width: 1200)')
    const [isLargerThan650] = useMediaQuery('(min-width: 650')

    useEffect(() => {
        setCurrentRow(rows.slice(0, rowsPerPage))
        handleClickPagination(1)
        setMaxItemsBetweenArrows(0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rows, rowsPerPage, totalPages])

    //sets the current page data depending on the page number choosed
    function handleClickPagination(pageNumber: number) {
        const endIndex = pageNumber * rowsPerPage
        const startIndex = (endIndex - rowsPerPage)
        setCurrentRow(rows.slice(startIndex, endIndex))
        setCurrentPage(pageNumber - 1)
    }

    //Commom arrow renderer
    function Arrows(props: any) {
        return <div {...props}> <ChevronDownIcon />
        </div>
    }

    //calculates the next or previous page number depending on the direction and if a limit is not reaches in bith direction then handleClickPagination is called
    function handleClickPaginationArrows(direction: string) {
        //to check whether we have row list to display when we go back or front and if its not possible, we can stop navigation.
        const limit = direction === "left" ? maxItemsBetweenArrows - (defaultPaginationLength - 1) >= 0 ? maxItemsBetweenArrows - (defaultPaginationLength - 1) : 0 : maxItemsBetweenArrows === 0 ? maxItemsBetweenArrows + (defaultPaginationLength) : maxItemsBetweenArrows + (defaultPaginationLength + 1);
        if (limit < (totalPages)) {
            setMaxItemsBetweenArrows(limit - 1)
            handleClickPagination(limit + 1)
        }
    }

    return <div className="w-full items-center flex flex-col md:flex-row gap-3 md:gap-1  justify-center">
        <div>
            <Menu>
                <MenuButton size={
                    isLargerThan1200 ? "md" : isLargerThan650 ? "sm" : "xs"
                } as={Button} className="bg-slate-200" rightIcon={<ChevronDownIcon />}>
                    Rows Per Page: {rowsPerPage}
                </MenuButton>
                <MenuList className="p-1 md:p-3">
                    {[...Array(5).keys()].map((item) => <MenuItem onClick={() => setRowsPerPage((item + 1) * defaultRowsPerPage)} className="hover:bg-slate-100 w-full flex items-center justify-center rounded-lg" key={item}>{(item + 1) * defaultRowsPerPage}</MenuItem>)}
                </MenuList>
            </Menu>
        </div>
        <div className="flex gap-2">
            <Arrows className="w-7 h-7 flex rounded cursor-pointer rotate-90 items-center justify-center hover:bg-sky-400" onClick={() => {
                if (currentPage === 0) return
                handleClickPaginationArrows("left")
            }} />
            <div className="flex gap-2 ">
                {/* creates array of numbers based on totalPages */}
                {[...Array(totalPages).keys()].map((number, i) => {
                    return (maxItemsBetweenArrows === 0 ?
                        i < defaultPaginationLength :
                        (i > (maxItemsBetweenArrows) && i < (maxItemsBetweenArrows + (defaultPaginationLength + 1)))) && <button onClick={() => { handleClickPagination(number + 1) }} key={i} className={`w-7 h-7 flex items-center  hover:bg-sky-400 hover:border-sky-400 justify-center rounded border ${currentPage === (i) ? "border-[#3D8BF8]" : "border-[#99A0A8] "}`}>
                            <p className={`${currentPage === (i) ? "text-[#3D8BF8]" : "text-black"}`}>{number + 1}</p>
                        </button>
                })
                }
            </div>
            <Arrows className="w-7 h-7 rounded cursor-pointer flex items-center justify-center rotate-[270deg] hover:bg-sky-400" onClick={() => { handleClickPaginationArrows('right') }} />
        </div>
    </div >
}
