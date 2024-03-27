export const cosmosClient = async () => {
  const { createClient } = await import('js-client');
  return createClient({
    BASE_BIP44_PATH: process.env.NEXT_PUBLIC_BASE_BIP44_PATH as string,
    BLOCKCHAIN_URL: process.env.NEXT_PUBLIC_BLOCKCHAIN_URL as string,
    BECH32_PREFIX: process.env.NEXT_PUBLIC_BECH32_PREFIX as string,
    ASSET: process.env.NEXT_PUBLIC_ASSET as string,
  });
};
