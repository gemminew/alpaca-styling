import { useState } from 'react';

export const useSelectedButton = () => {

  const [ selected, setSelected ] = useState(false);
  
  const btnSelected = () => setSelected( !selected );

  return {
    selected,
    setSelected,
    btnSelected
  }
}


