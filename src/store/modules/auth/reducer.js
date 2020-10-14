import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  error: null,
};

export default function auth(state = INITIAL_STATE, action) {
  // eslint-disable-next-line consistent-return
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/REQUEST': {
        draft.loading = true;
        draft.error = null;
        break;
      }
      case '@auth/SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        draft.error = null;
        break;
      }
      case '@auth/REFRESH_TOKEN': {
        draft.token = action.payload.token;
        break;
      }
      case '@auth/FAILURE': {
        draft.loading = false;
        draft.error = 'Login/Senha inválidos'
        draft.signed = false;
        break;
      }
      case '@auth/LOGOUT': {
        draft.signed = false;
        draft.token = null;
        draft.loading = false;
        break;
      }
      case '@auth/ERROR': {
        draft.error = action.payload.error || false;
        draft.loading = false;
        break;
      }
      default:
        return draft;
    }
  });
}
