import { useCallback, useState } from 'react';

export const useToggle = (initial?: boolean): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(Boolean(initial));
  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  return [value, toggle];
};
