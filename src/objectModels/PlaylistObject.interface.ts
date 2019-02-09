export interface PlaylistObject {
    readonly collaborative: boolean;
    readonly external_urls: any; // TODO update
    readonly href: string;
    readonly id: string;
    readonly images: any[]; // TODO update with image object
    readonly name: string;
    readonly owner: any; // TODO update with user object
    readonly public: boolean | null;
    readonly snapshot_id: string;
    readonly tracks: any; // TODO tracks object
    readonly type: 'playlist'; // TODO enum of types?
    readonly uri: string;
}
