export const addClip = ({clip}) => {
  return {
    type: 'ADD_CLOP',
    clip: clip,
  };
};

export const deleteClip = ({clip}) => {
  return {
    type: 'DELETE_CLOP',
    clip: clip,
  };
};
