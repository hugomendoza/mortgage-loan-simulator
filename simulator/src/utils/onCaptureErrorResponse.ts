import { AxiosError } from 'axios';
import { toast } from 'sonner';

export function onCaptureErrorsResponse(error: Error, message?: string) {
  if (error instanceof AxiosError) {
    toast.error(
      error.response?.data.error || 'Connection failed with the server'
    );
    return;
  }
  toast.error(message ?? 'We have an error, try again later');
}
