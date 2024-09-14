import { Skeleton } from "@chakra-ui/react";

export default function Loading() {
    return <div className=" w-11/12 flex flex-col mt-4 gap-4 text-black  border custom-table-container p-5">
        {[...Array(6).keys()].map((i: number) => <Skeleton key={i} height='50px' rounded={"lg"} />)}
    </div>
}