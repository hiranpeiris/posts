import { PHOTOS } from '../../constants';

const listReducer = (state = [], action) => {
  switch (action.type) {
    case PHOTOS.LOAD_SUCCESS:
      return action.photos;
    default:
      return state;
  }
};

export default listReducer;
