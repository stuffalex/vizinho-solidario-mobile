export function authRequest(login, senha) {
  return {
    type: '@auth/REQUEST',
    payload: { login, senha},
  };
}

export function authSuccess(token) {
  return {
    type: '@auth/SUCCESS',
    payload: { token },
  };
}

export function authRefreshToken(token) {
  return {
    type: '@auth/REFRESH_TOKEN',
    payload: { token },
  };
}

export function authFailure(message) {
  return {
    type: '@auth/FAILURE',
    payload: { message },
  };
}

export function authRequestLogout() {
  return {
    type: '@auth/LOGOUT',
    payload: {},
  };
}

export function authLogout() {
  return {
    type: '@auth/LOGOUT',
    payload: {},
  };
}

export function authError(error) {
  return {
    type: '@auth/ERROR',
    payload: {
      error,
    },
  };
}
