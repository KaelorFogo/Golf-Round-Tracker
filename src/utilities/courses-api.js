import sendRequest from "./send-request";
const BASE_URL = '/api/courses';

export async function getCourse(name) {
  return sendRequest(`${BASE_URL}/${name}`);
}