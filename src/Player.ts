import { AxiosInstance, AxiosPromise } from 'axios';

export class Player {
    private readonly axiosInstance: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    public pause(): AxiosPromise {
        const url = '/me/player/play';
        return this.axiosInstance.put(url);
    }
}
