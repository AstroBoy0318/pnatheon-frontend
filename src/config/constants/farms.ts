import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'
import { CAKE_NAME } from '../index'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: CAKE_NAME.concat('-Matic LP'),
    lpAddresses: {
      137: '0x399355Abaefbf7f111a51161fdB3E22f20754308'
    },
    tokenSymbol: CAKE_NAME,
    tokenAddresses: {
      137: '0xD395180255627810bEC15D2CE68d36cecf5Cac74'
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: contracts.wbnb,
    buyUrl: 'https://quickswap.exchange/#/add/'
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: CAKE_NAME.concat('-USDC LP'),
    lpAddresses: {
      137: '0xdb4471749Eb32325fFD5D85217CD2f5E946CB052'
    },
    tokenSymbol: CAKE_NAME,
    tokenAddresses: {
      137: '0xD395180255627810bEC15D2CE68d36cecf5Cac74'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
    buyUrl: 'https://quickswap.exchange/#/add/'
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'USDT-USDC LP',
    lpAddresses: {
      137: '0xdb4471749Eb32325fFD5D85217CD2f5E946CB052'
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      137: '0xD395180255627810bEC15D2CE68d36cecf5Cac74'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
    buyUrl: 'https://quickswap.exchange/#/add/'
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: CAKE_NAME.concat('-WETH LP'),
    lpAddresses: {
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827'
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAddresses: contracts.cake,
    buyUrl: 'https://quickswap.exchange/#/add/'
  },
  {
    pid: 4,
    risk: 3,
    lpSymbol: CAKE_NAME.concat('-WBTC LP'),
    lpAddresses: {
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827'
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAddresses: contracts.cake,
    buyUrl: 'https://quickswap.exchange/#/add/'
  },
  {
    pid: 5,
    risk: 3,
    lpSymbol: CAKE_NAME.concat('-WLUNA LP'),
    lpAddresses: {
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827'
    },
    tokenSymbol: 'WLUNA',
    tokenAddresses: {
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAddresses: contracts.cake,
    buyUrl: 'https://exchange.dfyn.network/#/add/'
  },
  {
    pid: 6,
    risk: 3,
    lpSymbol: CAKE_NAME.concat('-DAI LP'),
    lpAddresses: {
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827'
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAddresses: contracts.cake,
    buyUrl: 'https://quickswap.exchange/#/add/'
  },
  {
    pid: 7,
    risk: 3,
    lpSymbol: CAKE_NAME.concat('-UST LP'),
    lpAddresses: {
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827'
    },
    tokenSymbol: 'UST',
    tokenAddresses: {
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAddresses: contracts.cake,
    buyUrl: 'https://exchange.dfyn.network/#/add/'
  },
  {
    pid: 999,
    risk: 0,
    lpSymbol: 'Matic-USDC LP',
    lpAddresses: {
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827'
    },
    tokenSymbol: 'Matic',
    tokenAddresses: {
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
]

export default farms
