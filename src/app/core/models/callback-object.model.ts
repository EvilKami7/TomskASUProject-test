import { HttpErrorResponse } from '@angular/common/http';

export interface CallbackObject {
  onSuccess?: (result: Object) => void;
  onError?: (err: HttpErrorResponse) => void;
  onComplete?: () => void;
}
