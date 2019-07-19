import axios from 'axios';

const AUTH_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAaXfFH0kNLEFcxLO7K25IQPwFqzUcloRw';

// eslint-disable-next-line import/prefer-default-export
export async function authentication(credentials) {
  try {
    const { data } = await axios.post(AUTH_URL, {
      ...credentials,
      returnSecureToken: true,
    });

    return data;
  } catch (error) {
    throw error.error;
  }
}
