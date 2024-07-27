import { ethers } from 'hardhat'

async function main() {
  const [deployer] = await ethers.getSigners()
  const v2Factory = {
    address: '0xcE9dfc76AA9665865B5138dcc5052dE47981dE6B'
  }
  const weth = {
    address: '0x4200000000000000000000000000000000000006'
  }

  const gMeowFiV2Router02 = await ethers.deployContract('GMeowFiV2Router02', [v2Factory.address, weth.address])

  console.log(
    `GMeowFiV2Router02 deployed to: ${await gMeowFiV2Router02.getAddress()} "${v2Factory.address}" "${weth.address}" `
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
