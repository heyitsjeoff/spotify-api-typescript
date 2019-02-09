export interface PagingObject<T> {
    readonly href: string;
    readonly items: T;
    readonly limit: number;
    readonly next: string;
    readonly offset: number;
    readonly previous: string;
    readonly total: number;
}
