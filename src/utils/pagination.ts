import { paginationType } from "../@types/paginationTypes";

export function paginationHelpers(page:number, itemPerPage:number):paginationType{
    const p = page || 1;
    const size = itemPerPage || 10;

    const skip = (p - 1) * size;

    return {skip, take: itemPerPage}
}