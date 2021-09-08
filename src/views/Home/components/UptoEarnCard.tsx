import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@pantheon-org/uikit'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd } from 'state/hooks'
import BigNumber from 'bignumber.js'
import { BLOCKS_PER_YEAR } from 'config'
import { QuoteToken } from 'config/constants/types'
import CardValue from './CardValue'

const StyledUptoEarnCard = styled(Card)`
  text-align: center;
  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: none;
  }
`

const CardMidContent = styled(Heading).attrs({ size: 'lg' })`
  line-height: 1.1em;
  padding-top: 10px;
`

const UptoEarnCard = () => {
    const farmsLP = useFarms()
    const cakePrice = usePriceCakeBusd()
    const bnbPrice = usePriceBnbBusd()
    const maxAPY = farmsLP.reduce((preVal,farm)=>{
        const cakeRewardPerBlock = new BigNumber(farm.DrachPerBlock || 1).times(new BigNumber(farm.poolWeight)).div(new BigNumber(10).pow(18))
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = cakePrice.times(cakeRewardPerYear);

        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0);

        if (farm.quoteTokenSymbol === QuoteToken.BNB) {
            totalValue = totalValue.times(bnbPrice);
        }
        if (totalValue.comparedTo(0) > 0) {
            apy = apy.div(totalValue);
        }
        return Math.max(preVal, apy.toNumber());
    }, 0)
    return (
        <StyledUptoEarnCard>
            <CardBody>
                <Heading color="black" size="lg">
                    Earn up to
                </Heading>

                <CardMidContent color="text" marginTop="0em">
                    <CardValue value={maxAPY} surfix="%" decimals={2} fontSize="lg" />
                </CardMidContent>
                <Heading color="black" size="sm" marginTop="0.5em">
                    Max apy in farms
                </Heading>
            </CardBody>
        </StyledUptoEarnCard>
    )
}

export default UptoEarnCard
