import { useEffect, useState } from 'react';

export const useDetectSelectedButton = (element: any, initialState: boolean) => {

  const [ selected, setSelected ] = useState<boolean>(initialState);

  useEffect(() => {

    const clickButton = (e: Event) => {
      
      if (element?.current !== null && !element?.current.contains(e.target)) {
        setSelected( !selected );
      }
    }
    if (selected) {
      window.addEventListener('click', clickButton)
    }

    return () => {
      window.removeEventListener('mousedown', clickButton);
    }
  }, [selected, element])

  return [selected, setSelected]
}


