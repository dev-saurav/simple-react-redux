import { combineReducers } from 'redux';

//static list for songs
const songsReducer = () => {
    return [
        {
            title: 'Songs 1',
            duration: '4:05'
        },
        {
            title: 'Songs 2',
            duration: '3:05'
        },
        {
            title: 'Songs 3',
            duration: '2:05'
        },
        {
            title: 'Songs 4',
            duration: '5:05'
        },
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})