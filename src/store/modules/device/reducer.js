import produce from 'immer';

const INITIAL_STATE = {
  deviceToken: null,
  loading: false,
};

export default function Device(state = INITIAL_STATE, action) {
  // eslint-disable-next-line consistent-return
  return produce(state, draft => {
    switch (action.type) {
      case '@device/REQUEST': {
        const {deviceToken } = action.payload;
        draft.loading = true;
        draft.deviceToken = deviceToken;
        break;
      }
      case '@device/REGISTER': {
        draft.loading = false;
        break;
      }
      case '@device/REMOVE': {
        draft.deviceToken = null;
        draft.loading = false;
        break;
      }
      default:
        return draft;
    }
  });
}
