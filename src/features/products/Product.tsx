import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectList } from './productSlice';

export function Product() {
  const [, setFlag] = useState(true);

  const list = useAppSelector(selectList);

  const toggleState = () => setFlag((old) => !old);

  return (
    <div>
      <p>Список товаров:</p>
      {list.map((id) => (
        <div key={id}>{id}</div>
      ))}
      <button onClick={toggleState}>Toggle state</button>
    </div>
  );
}
