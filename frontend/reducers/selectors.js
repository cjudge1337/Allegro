export const asObject = songs => {
  let obj = {};
  songs.forEach( song => {
    obj[song.id] = song;
  });
  return obj;
};
