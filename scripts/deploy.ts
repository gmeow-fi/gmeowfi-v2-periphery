import { ethers } from 'hardhat'

async function main() {
  const [deployer] = await ethers.getSigners()
  const v2Factory = {
    address: '0x3874db48bBDD965DA824BE998f63f5cF689D4f79',
  }
  const weth = {
    address: '0x4200000000000000000000000000000000000006',
  }

  const gMeowFiV2Router02 = await ethers.deployContract('GMeowFiV2Router02', [v2Factory.address, weth.address])

  console.log(
    `GMeowFiV2Router02 deployed to: ${await gMeowFiV2Router02.getAddress()} "${v2Factory.address}" "${weth.address}" `
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
