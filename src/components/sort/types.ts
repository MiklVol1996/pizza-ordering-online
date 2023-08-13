import { Sort } from "../../store/slices/filter_sort/types";

export type Props = {
    selectedSort: Sort,
    onSortByClick: (data: Sort) => void,
}