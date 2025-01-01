const web3 = require("@solana/web3.js");
(async () => {
  const solana = new web3.Connection("https://special-snowy-bird.solana-mainnet.quiknode.pro/36900d5775d4f576352055b3e48ab86d49f4712b/");
  console.log(await solana.getSlot());
})();
