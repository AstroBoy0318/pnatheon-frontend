import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'
import { CAKE_NAME } from '../index'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: CAKE_NAME.concat('-Matic LP'),
    lpAddresses: {
      97: '0xa40f90E8e60928eB56FEa610D0591D776ab54CC6',
      56: '0xD99Caa5110Bf465B05cdef0690Db0771732d937F',
      137: '0x399355Abaefbf7f111a51161fdB3E22f20754308',
      3: '0x47d886690612a8035C1d70EeD02A5036641B6469'
    },
    tokenSymbol: CAKE_NAME,
    tokenAddresses: {
      97: '0x47572493C7DD70653940Dff6444897712a007EDC',
      56: '0x3bdbbf63fbed8550dd630f67fc5e4c2ac4ddc42b',
      137: '0xD395180255627810bEC15D2CE68d36cecf5Cac74',
      3: '0xE09F810382Bc03F3Ca07a5DECB27f5824e05E8b3'
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: CAKE_NAME.concat('-USDC LP'),
    lpAddresses: {
      97: '0x383489bD934B077Ac0b3A9325E73BF72D9835AdA',
      56: '0xA0B0923621b5CFa654145604E286CA813C3C661B',
      137: '0xdb4471749Eb32325fFD5D85217CD2f5E946CB052',
      3: '0xDDA6AEb2D8989972EeEd09fC02DAf628a96C98b5'
    },
    tokenSymbol: CAKE_NAME,
    tokenAddresses: {
      97: '0x47572493C7DD70653940Dff6444897712a007EDC',
      56: '0x3bdbbf63fbed8550dd630f67fc5e4c2ac4ddc42b',
      137: '0xD395180255627810bEC15D2CE68d36cecf5Cac74',
      3: '0xE09F810382Bc03F3Ca07a5DECB27f5824e05E8b3'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'Matic-USDC LP',
    lpAddresses: {
      97: '0xa79fe8865fb3c3c053ee63ba8b7f90dda5c3f334',
      56: '0x83166DaF1a93F7C8B31c4e09Cc85316a37dC2451',
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827',
      3: '0x681A4164703351d6AceBA9D7038b573b444d3353'
    },
    tokenSymbol: 'Matic',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      3: '0xc778417e063141139fce010982780140aa0cd5ab'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  }
]

export default farms
