const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('MyRecipeNFT');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  // Call the function
  let txn = await nftContract.makeARecipeNFT('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="1920" height="1080" viewBox="0 0 1920 1080"> <rect x="0" y="0" width="100%" height="100%" fill="rgb(162,255,177)"/> <text font-family="Helvetica" font-size="60" font-style="normal"><tspan x="100" y="150" >World Peace Cookies</tspan></text> <text font-family="Helvetica" font-size="24" font-style="normal"><tspan x="100" y="300">□ 1/3 cup (42 g) cocoa powder</tspan><tspan x="100" y="360">□ 1/2 tsp (3 g) baking soda</tspan><tspan x="100" y="420">□ 11 Tbsp (155 grams) unsalted butter</tspan><tspan x="100" y="480">□ 2/3 cup (147 grams) light brown</tspan><tspan x="115" y="510">sugar</tspan><tspan x="100" y="570">□ 5 ounces (142 grams) chocolate</tspan><tspan x="115" y="600">chips</tspan><tspan x="100" y="660">□ 1 tsp pure vanilla extract</tspan><tspan x="100" y="720">□ 1/4 cup (50 grams) sugar</tspan><tspan x="100" y="780">□ 1/2 tsp salt</tspan><tspan x="100" y="840">□ 1 1/4 cups (160 g) ap flour</tspan></text> <text font-family="Helvetica" font-size="24" font-style="normal"><tspan x="650" y="300">1. Sift together the flour, cocoa powder and baking soda.</tspan><tspan x="650" y="360">2. Cream the butter with both the brown sugar and the granulated sugar.</tspan><tspan x="650" y="420">3. Beat in the vanilla and sea salt.</tspan><tspan x="650" y="480">4. Beat in the dry ingredients.</tspan><tspan x="650" y="540">5. Add the chocolate chunks.</tspan><tspan x="650" y="600">6. Roll the dough into logs, roughly 2" in diameter. Freeze overnight.</tspan><tspan x="650" y="660">7. Bake at 325°F for 12-15 minutes.</tspan></text><path d="M575,950 v-700" stroke="black" stroke-width="6" /><text font-size="40"><tspan x="1650" y="1000">')
  // Wait for it to be mined.
  await txn.wait()

  // Mint NFT
  txn = await nftContract.makeARecipeNFT('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="1920" height="1080" viewBox="0 0 1920 1080"> <rect x="0" y="0" width="100%" height="100%" fill="rgb(162,255,177)"/> <text font-family="Helvetica" font-size="60" font-style="normal"><tspan x="100" y="150" >World Peace Cookies</tspan></text> <text font-family="Helvetica" font-size="24" font-style="normal"><tspan x="100" y="300">□ 1/3 cup (42 g) cocoa powder</tspan><tspan x="100" y="360">□ 1/2 tsp (3 g) baking soda</tspan><tspan x="100" y="420">□ 11 Tbsp (155 grams) unsalted butter</tspan><tspan x="100" y="480">□ 2/3 cup (147 grams) light brown</tspan><tspan x="115" y="510">sugar</tspan><tspan x="100" y="570">□ 5 ounces (142 grams) chocolate</tspan><tspan x="115" y="600">chips</tspan><tspan x="100" y="660">□ 1 tsp pure vanilla extract</tspan><tspan x="100" y="720">□ 1/4 cup (50 grams) sugar</tspan><tspan x="100" y="780">□ 1/2 tsp salt</tspan><tspan x="100" y="840">□ 1 1/4 cups (160 g) ap flour</tspan></text> <text font-family="Helvetica" font-size="24" font-style="normal"><tspan x="650" y="300">1. Sift together the flour, cocoa powder and baking soda.</tspan><tspan x="650" y="360">2. Cream the butter with both the brown sugar and the granulated sugar.</tspan><tspan x="650" y="420">3. Beat in the vanilla and sea salt.</tspan><tspan x="650" y="480">4. Beat in the dry ingredients.</tspan><tspan x="650" y="540">5. Add the chocolate chunks.</tspan><tspan x="650" y="600">6. Roll the dough into logs, roughly 2" in diameter. Freeze overnight.</tspan><tspan x="650" y="660">7. Bake at 325°F for 12-15 minutes.</tspan></text><path d="M575,950 v-700" stroke="black" stroke-width="6" /><text font-size="40"><tspan x="1650" y="1000">')
  // Wait for it to be mined.
  await txn.wait()
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
