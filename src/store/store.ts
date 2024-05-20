import { create } from 'zustand';
import { CriptoPrice, Cryptocurrencies, Pair } from '../types';
import { devtools } from 'zustand/middleware';
import { getCryptos } from '../services/CryptoService';
import { fetchCurrentCryptosPrice } from '../services/CryptoService';

type CryptoStore = {
  cryptocurrencies: Cryptocurrencies;
  fetchCriptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
  result: CriptoPrice;
  loading: boolean;
};

export const useCriptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],

    fetchCriptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptocurrencies: cryptocurrencies,
      }));
    },
    result: {} as CriptoPrice,
    fetchData: async (pair) => {
      const result = await fetchCurrentCryptosPrice(pair);

      set(() => ({
        loading: true,
      }));

      set(() => ({
        result: result,
        loading: false,
      }));
    },
    loading: false,
  }))
);
