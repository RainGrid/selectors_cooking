import { FC, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';

export interface ProductProps {
  id: number;
}

const getProduct = (id: number) => (state: RootState) => {
  console.log('calc');

  return state.products.storage[id];
};

// const selector = useMemo(
//   () => (state) => selectByArgIdMemoized(state, id),
//   []
// );

export const Product: FC<ProductProps> = ({ id }) => {
  const [flag, setFlag] = useState(true);

  const product = useAppSelector((state) => state.products.storage[id]);

  const { title, price, stock } = product;

  const toggleState = () => setFlag((old) => !old);

  return (
    <div>
      <h4>{title}</h4>
      <strong>{price}</strong>
      <div>{stock ? 'В наличии' : 'Не в наличии'}</div>
      <div>Флаг: {+flag}</div>
      <button onClick={toggleState}>Toggle</button>
    </div>
  );
};
