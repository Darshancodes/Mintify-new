import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers } from 'ethers';

export default async function mint(req, res) {
  const rpcUrl = 'rinkeby';

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.getDefaultProvider(rpcUrl));

  const marketAddress = '0xfCfD2B2C9898080d93aAa195Ae38701f6FA82C8e';
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