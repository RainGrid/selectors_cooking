import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { increment } from '../counter/counterSlice';
import { Product } from './Product';
import { selectList, selectTotal } from './productsSlice';

export function Products() {
  const dispatch = useAppDispatch();

  const [flag, setFlag] = useState(true);

  const list = useAppSelector((state) => selectList(state));
  const total = useAppSelector(selectTotal);

  const toggleState = () => setFlag((old) => !old);
  const handleDispatch = () => dispatch(increment());

  return (
    <div>
      <p>Флаг: {+flag}</p>
      <p>Список товаров:</p>
      <p>
        {list.map((id) => (
          <Product id={id} />
        ))}
      </p>
      <p>Total: {total}</p>
      <button onClick={toggleState}>Toggle state</button>
      <button onClick={handleDispatch}>Dispatch</button>
    </div>
  );
}
