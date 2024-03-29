import sendRequest from "./send-request";
const BASE_URL = '/api/rounds';

export async function newRound(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}

export async function getAllRoundsForuser(){
  return sendRequest(BASE_URL);
}

export async function getRoundById(roundId){
  return sendRequest(`${BASE_URL}/${roundId}`);
}

export async function deleteRoundById(roundId){
  return sendRequest(`${BASE_URL}/${roundId}`, 'DELETE');
}
