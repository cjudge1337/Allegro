export const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.6)',
    zIndex          : 2,
    display         : 'flex',
    justifyContent  : 'center',
    alignItems      : 'center'
  },

  content : {
    minWidth        : '400px',
    position        : 'initial',
    border          : 'none',
    top             : '0',
    left            : '0',
    right           : '0',
    bottom          : '0',
    padding         : '0',
    zIndex          : 3,
    opacity         : 0,
    transition      : 'opacity 1s',
    backgroundColor : "black",
  	boxShadow       : "3px 3px 2px 0px black"
  }
};
