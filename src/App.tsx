import { useEffect } from 'react';
import { CriptoSearchForm } from './components/CriptoSearchForm';
import { useCriptoStore } from './store/store';
import { CriptoPriceDisplay } from './components/CriptoPriceDisplay';

export function App() {
  const fetchCriptos = useCriptoStore((state) => state.fetchCriptos);

  useEffect(() => {
    fetchCriptos();
  });

  return (
    <>
      <div className='container'>
        <h1 className='app-title'>
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className='content'>
          <CriptoSearchForm></CriptoSearchForm>
          <CriptoPriceDisplay></CriptoPriceDisplay>
        </div>
      </div>
    </>
  );
}
