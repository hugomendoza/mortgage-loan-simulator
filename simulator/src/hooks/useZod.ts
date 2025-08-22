import { useState } from 'react';
import { z } from 'zod';

export const useZodErrors = <T extends { [key: string]: string }>(
  initialErrors: T
) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>(
    initialErrors
  );

  const validateFields = (error: Error) => {
    if (error instanceof z.ZodError) {
      const fieldErrors: { [key: string]: string } = {};
      error.issues.forEach((err) => {
        if (err.path.length > 0) {
          fieldErrors[String(err.path[0])] = err.message;
        }
      });
      setErrors(fieldErrors);
    }
  };

  const resetErrors = () => {
    setErrors(initialErrors);
  };

  return {
    errors,
    resetErrors,
    validateFields,
  };
};
