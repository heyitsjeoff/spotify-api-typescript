import { SpotifyClient } from './SpotifyClient';
import { AxiosResponse } from 'axios';
import { PagingObject } from './objectModels/PagingObject.interface';
import { PlaylistObject } from './objectModels/PlaylistObject.interface';

describe('playground for the api', () => {
    let client: SpotifyClient;
    let accessToken: string;

    beforeAll(() => {
        require('dotenv').config();
        expect(process.env.accessToken).not.toBeUndefined();
        accessToken = process.env.accessToken!;
    });

    beforeEach(() => {
        client = new SpotifyClient(accessToken);
    });

    it('has empty test', () => {

    });

    it('gets the current users playlists', async () => {
        const response: AxiosResponse<PagingObject<any>> =
            await client.playlists.getCurrentUsersPlaylists();
        const data = response.data;
        const names = data.items.map((playlist: PlaylistObject) => playlist.name);
        global.console.log(names);
    });
});
