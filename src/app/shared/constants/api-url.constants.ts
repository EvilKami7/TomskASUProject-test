import { environment } from '../../../environments/environment';

export const API_URL = {
  PERSONS: `${environment.BaseURL}/persons?`,
  PERSON_BY_ID: (id: string): string => `${environment.BaseURL}/persons/${id}?`,
};
