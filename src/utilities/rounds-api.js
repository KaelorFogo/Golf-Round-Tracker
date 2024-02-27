import sendRequest from "./send-request";
const BASE_URL = '/api/rounds';

export async function newRound(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}