const FEE = 1000;

contract("EthaRegistry", ([user]) => {
  let registry, wallet;

  console.log("\nUser", user);

  before(async function () {
    const SmartWallet = await ethers.getContractFactory("SmartWallet");
    const smartWalletImpl = await SmartWallet.deploy();
    await smartWalletImpl.deployed();
    console.log("\tSmart Wallet Implementation:", smartWalletImpl.address);

    const EthaRegistry = await ethers.getContractFactory("EthaRegistry");
    registry = await EthaRegistry.deploy();
    await registry.initialize(smartWalletImpl.address, user, user, FEE);
    console.log("\tRegistry Address:", registry.address);
  });

  it("should deploy a smart wallet", async function () {
    await registry.deployWallet({ from: user });

    const SmartWallet = await ethers.getContractFactory("SmartWallet");
    const swAddress = await registry.wallets(user);
    wallet = await SmartWallet.attach(swAddress);
    console.log("\tUSER SW:", swAddress);
  });
});
