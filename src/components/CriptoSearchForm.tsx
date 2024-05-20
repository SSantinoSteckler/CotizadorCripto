import { useState } from 'react';
import { currencies } from '../data';
import { useCriptoStore } from '../store/store';
import { Pair } from '../types';
import { ErrorMesagge } from './ErrorMesagge';

export const CriptoSearchForm = () => {
  const cryptocurrencies = useCriptoStore((state) => state.cryptocurrencies);
  const fetchData = useCriptoStore((state) => state.fetchData);
  const [pair, setPair] = useState<Pair>({
    currency: '',
    criptocurrency: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(pair).includes('')) {
      setError('Todos los campos son obligatorios');
      return;
    }
    setError('');
    fetchData(pair);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='field'>
        {error && <ErrorMesagge>{error}</ErrorMesagge>}
        <label htmlFor='currency'>Moneda:</label>
        <select
          name='currency'
          id='currency'
          onChange={handleChange}
          value={pair.currency}
        >
          <option value=''>--Seleccione--</option>
          {currencies.map((elem) => (
            <option key={elem.code} value={elem.code}>
              {elem.name}
            </option>
          ))}
        </select>
      </div>

      <div className='field'>
        <label htmlFor='currency'>Criptomoneda:</label>
        <select
          name='criptocurrency'
          id='criptocurrency'
          onChange={handleChange}
          value={pair.criptocurrency}
        >
          <option>--Seleccione--</option>
          {cryptocurrencies.map((elem) => (
            <option value={elem.CoinInfo.Name} id={elem.CoinInfo.Name}>
              {elem.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type='submit' value='Cotizar' />
    </form>
  );
};
