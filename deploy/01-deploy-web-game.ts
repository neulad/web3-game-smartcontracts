import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("AveGods", {
    from: deployer,
    log: true,
    args: [process.env.METADATA_URL || ""],
  });
};

export default func;
func.tags = ["all", "web-game"];
