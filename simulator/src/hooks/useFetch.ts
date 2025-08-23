import { useEffect, useState } from 'react';
import { useMortgageSimulator } from '../store/store';
import { getMortgages } from '../services';

export const useFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { onLoadMortages } = useMortgageSimulator();

  const getFetch = async () => {
    setLoading(true);
    try {
      const { data } = await getMortgages();
      onLoadMortages(data);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFetch();
  }, []);

  return {
    loading,
    error,
  };
};
