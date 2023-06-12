export interface IFilter {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

export interface IHome {
    searchParams: IFilter;
}