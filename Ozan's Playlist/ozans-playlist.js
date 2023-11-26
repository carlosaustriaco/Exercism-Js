// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
 export function removeDuplicates(playlist) {
    let playlistSet = new Set();
    let musicArray = new Array();
  
    for (let music of playlist) {
      playlistSet.add(music);
    }
  
    playlistSet.forEach((music) => musicArray.push(music));
  
    return musicArray;
  }
  
  /**
   * Checks whether a playlist includes a track.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {boolean} whether the track is in the playlist
   */
  export function hasTrack(playlist, track) {
    let found = false;
    
    for (let music of playlist) {
      if (music === track){
        found = true;
      }    
    }
  
    return found;
  }
  
  /**
   * Adds a track to a playlist.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {string[]} new playlist
   */
  export function addTrack(playlist, track) {
    if (!hasTrack(playlist, track)){
      playlist.push(track);
    }
  
    return playlist;
  }
  
  /**
   * Deletes a track from a playlist.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {string[]} new playlist
   */
  export function deleteTrack(playlist, track) {
    let musicSet = new Set(playlist);
    let musicArray = new Array();
  
    musicSet.delete(track);
    musicSet.forEach((music) => musicArray.push(music));
  
    return musicArray;
  }
  
  /**
   * Lists the unique artists in a playlist.
   *
   * @param {string[]} playlist
   * @returns {string[]} list of artists
   */
  export function listArtists(playlist) {
    let seArtists = new Set();
    let arrMusicArtists;
    let arrArtists = new Array();
  
    for (let musicArtist of playlist) {
      arrMusicArtists = musicArtist.split(" - ");
      seArtists.add(arrMusicArtists[1]);
    }
  
    seArtists.forEach((artist) => arrArtists.push(artist));
  
    return arrArtists;
  }
  