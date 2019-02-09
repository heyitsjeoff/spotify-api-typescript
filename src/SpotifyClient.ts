import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Player } from './Player';

export class SpotifyClient {
    private axiosInstance: AxiosInstance;

    // namespace
    public readonly player: Player;

    constructor(accessToken: string) {
        const axiosRequestConfig: AxiosRequestConfig = {
            baseURL: 'https://api.spotify.com/v1',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };
        this.axiosInstance = axios.create(axiosRequestConfig);

        this.player = new Player(this.axiosInstance);
    }
}
