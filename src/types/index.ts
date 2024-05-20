import { z } from 'zod';
import {
  CriptoCurrencySchema,
  CriptoPriceSchema,
  CurrencySchema,
  PairSchema,
} from '../schema/schema-index';

export type Currency = z.infer<typeof CurrencySchema>;
export type Cryptocurrencies = z.infer<typeof CriptoCurrencySchema>;
export type Pair = z.infer<typeof PairSchema>;
export type CriptoPrice = z.infer<typeof CriptoPriceSchema>;
