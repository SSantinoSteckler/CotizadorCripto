import { string, z } from 'zod';

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CriptoCurrencySchema = z.array(
  z.object({
    CoinInfo: z.object({
      FullName: string(),
      Name: string(),
    }),
  })
);

export const PairSchema = z.object({
  currency: z.string(),
  criptocurrency: z.string(),
});

export const CriptoPriceSchema = z.object({
  IMAGEURL: z.string(),
  PRICE: z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  CHANGEPCT24HOUR: z.string(),
  LASTUPDATE: z.string(),
});
