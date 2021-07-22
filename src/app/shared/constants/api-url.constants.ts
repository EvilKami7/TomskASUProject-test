import { BASE_URL } from './base-url.constants';

export const API_URL = {
  PERSONS: `${BASE_URL}/persons?`,
  PERSON_BY_ID: (id: string): string => `${BASE_URL}/persons/${id}?`,
};
