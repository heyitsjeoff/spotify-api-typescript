import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class SpotifyClient {
    private axiosInstance: AxiosInstance;

    constructor(accessToken: string) {
        const axiosRequestConfig: AxiosRequestConfig = {
            baseURL: 'https://api.spotify.com/v1',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };
        this.axiosInstance = axios.create(axiosRequestConfig);
    }

    public pause(): void {
        const url = '/me/player/play';
        this.axiosInstance.put(url);
    }
}
