const musicCollection = {
    albums: [
        {
            title: 'Black Album',
            artist: 'Metallica',
            year: '1991'
        },
        {
            title: 'Master of Puppets',
            artist: 'Led Zeppelin',
            year: '1971'
        },
        {
            title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
            artist: 'The Beatles',
            year: '1967'
        },
        {
            title: 'Revolver',
            artist: 'The Beatles',
            year: '1966'
        }

    ],
    [Symbol.iterator]: function () {
        this.current = 0;
        return this;
    },
    next() {
        return this.current < this.albums.length ? { done: false, value: this.albums[this.current++] } : { done: true };
    },
};

// console.log(musicCollection);

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}