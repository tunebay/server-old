import { formatForSQLInsert } from '../../lib/helpers';

describe('😎 Helper funcs', () => {
  const playlist = {
    userId: 1,
    title: 'Alchemy',
    playlistType: 'album',
    price: 8.99,
    numberOfTracks: 11,
    duration: 2580,
    canPayMore: true,
    permalink: 'https://tunebay.com/malimichael/alchemy',
    artwork: 'https://tunebay-upload.s3-eu-west-2.amazonaws.com/users/artwork/85cd2abe-3a96-4d9c-91a2-b4cb066709c4',
    purchaseMesssage: 'Thanks for the support',
    releaseDate: '2017-12-19T16:39:57-08:00',
    createdAt: '2017-12-19T16:39:57-08:00'
  };

  const playlist2 = {
    userId: 1,
    title: 'Wings',
    playlistType: 'EP',
    price: 0.00,
    numberOfTracks: 4,
    duration: 980,
    canPayMore: false,
    permalink: 'https://tunebay.com/malimichael/wings',
    createdAt: '2017-12-19T16:39:57-08:00'
  };

  describe('formatForSQLInsert()', () => {
    test('converts property names from camelCase to underscores', () => {
      const newPlaylist = formatForSQLInsert(playlist);
      expect(newPlaylist).toHaveProperty('number_of_tracks', 11);
      expect(newPlaylist).toHaveProperty('title', 'Alchemy');
      expect(newPlaylist).toHaveProperty('can_pay_more', true);
      expect(newPlaylist).not.toHaveProperty('canPayMore');
    });

    test('results in an object with the same about of properties', () => {
      const newPlaylist = formatForSQLInsert(playlist);
      const newPlaylist2 = formatForSQLInsert(playlist2);
      expect(Object.keys(newPlaylist).length).toEqual(12);
      expect(Object.keys(newPlaylist2).length).toEqual(9);
    });
  });
});
