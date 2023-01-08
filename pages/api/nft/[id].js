import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers } from 'ethers';

export default async function mint(req, res) {
  const rpcUrl = 'goerli';

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.getDefaultProvider(rpcUrl));

  const marketAddress = '0x6A7e43494E72BAfc47FCdECeC67c827c218e2bCd';
  const marketCollection = new ThirdwebSDK(wallet).getMarketplaceModule(marketAddress);

  const { id } = req.query;
  await marketCollection
    .getListing(id)
    .then((metadata) => {
      res.status(200).json(metadata);
    })
    .catch((err) => {
      res.status(200).json({ error: true });
    });
}
