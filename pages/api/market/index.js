import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';

export default async function mint(req, res) {
  const rpcUrl = 'goerli';

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.getDefaultProvider(rpcUrl));

  const marketModuleAddress = '0x6A7e43494E72BAfc47FCdECeC67c827c218e2bCd';
  const market = new ThirdwebSDK(wallet).getMarketplaceModule(marketModuleAddress);

  await market
    .getAllListings()
    .then((metadata) => {
      res.status(200).json(metadata);
    })
    .catch((err) => {
      res.status(200).json({ error: true });
    });
}
