interface Sale{
    id: string,
    title: string,
    content?: string,
    disPrice?: number,
}
export interface Good {
    id: string;
    title: string,
    price: number,
    disPrice: number,
    isFavorited: boolean,
    promotions?: Array<Sale>
    images: Array<string>,
}

