import axios from 'axios';
import {
  CriptoCurrencySchema,
  CriptoPriceSchema,
} from '../schema/schema-index';
import { Pair } from '../types';

export async function getCryptos() {
  const url =
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';

  const {
    data: { Data },
  } = await axios(url);

  const result = CriptoCurrencySchema.safeParse(Data);
  if (result.success) {
    return result.data;
  }
}

export async function fetchCurrentCryptosPrice(pair: Pair) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`;

  const {
    data: { DISPLAY },
  } = await axios(url);
  console.log();

  const result = CriptoPriceSchema.safeParse(
    DISPLAY[pair.criptocurrency][pair.currency]
  );
  if (result.success) {
    return result.data;
  }
}
