import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Player } from './Player';
import { Playlists } from './Playlists';

export class SpotifyClient {
    private axiosInstance: AxiosInstance;

    // namespace
    public readonly player: Player;
    public readonly playlists: Playlists;

    constructor(accessToken: string) {
        const axiosRequestConfig: AxiosRequestConfig = {
            baseURL: 'https://api.spotify.com/v1',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };
        this.axiosInstance = axios.create(axiosRequestConfig);

        this.player = new Player(this.axiosInstance);
        this.playlists = new Playlists(this.axiosInstance);
    }
}
