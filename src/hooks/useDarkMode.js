import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
  const [state, setState] = useLocalStorage(key, initialValue);

  return [state, setState];
};
