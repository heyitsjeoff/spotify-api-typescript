import { AxiosInstance, AxiosPromise } from 'axios';
import { PagingObject } from './objectModels/PagingObject.interface';
import { PlaylistObject } from './objectModels/PlaylistObject.interface';

export class Playlists {
    private readonly axiosInstance: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    public getCurrentUsersPlaylists(): AxiosPromise<PagingObject<PlaylistObject>> {
        const url = '/me/playlists';
        return this.axiosInstance.get<PagingObject<PlaylistObject>>(url);
    }
}
