import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Flex, LinkExternal, Modal, Text } from '@pantheon-org/uikit'
import useI18n from 'hooks/useI18n'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { apyModalRoi, calculateCakeEarnedPerThousandDollars } from 'utils/compoundApyHelpers'
import { Address } from 'config/constants/types'
import { CAKE_NAME } from 'config'

interface ApyCalculatorModalProps {
  onDismiss?: () => void
  lpLabel?: string
  cakePrice?: BigNumber
  apy?: BigNumber
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  margin-bottom: 24px;
`

const GridItem = styled.div`
  margin-bottom: '10px';
`

const Description = styled(Text)`
  max-width: 320px;
  margin-bottom: 28px;
`

const ApyCalculatorModal: React.FC<ApyCalculatorModalProps> = ({
  onDismiss,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
  cakePrice,
  apy,
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })
  const farmApy = apy.times(new BigNumber(100)).toNumber()
  const oneThousandDollarsWorthOfCake = 1000 / cakePrice.toNumber()

  const cakeEarnedPerThousand1D = calculateCakeEarnedPerThousandDollars({ numberOfDays: 1, farmApy, cakePrice })
  const cakeEarnedPerThousand7D = calculateCakeEarnedPerThousandDollars({ numberOfDays: 7, farmApy, cakePrice })
  const cakeEarnedPerThousand30D = calculateCakeEarnedPerThousandDollars({ numberOfDays: 30, farmApy, cakePrice })
  const cakeEarnedPerThousand365D = calculateCakeEarnedPerThousandDollars({ numberOfDays: 365, farmApy, cakePrice })

  return (
    <Modal title="ROI" onDismiss={onDismiss}>
      <Grid>
        <GridItem>
          <Text fontSize="12px" bold color="black" textTransform="uppercase" mb="20px">
            {TranslateString(999, 'Timeframe')}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="black" textTransform="uppercase" mb="20px">
            {TranslateString(999, 'ROI')}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="black" textTransform="uppercase" mb="20px">
            {TranslateString(999, CAKE_NAME.concat(' per $1000'))}
          </Text>
        </GridItem>
        {/* 1 day row */}
        <GridItem>
          <Text color="black">1d</Text>
        </GridItem>
        <GridItem>
          <Text color="black">
            {apyModalRoi({ amountEarned: cakeEarnedPerThousand1D, amountInvested: oneThousandDollarsWorthOfCake })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text color="black">{cakeEarnedPerThousand1D}</Text>
        </GridItem>
        {/* 7 day row */}
        <GridItem>
          <Text color="black">7d</Text>
        </GridItem>
        <GridItem>
          <Text color="black">
            {apyModalRoi({ amountEarned: cakeEarnedPerThousand7D, amountInvested: oneThousandDollarsWorthOfCake })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text color="black">{cakeEarnedPerThousand7D}</Text>
        </GridItem>
        {/* 30 day row */}
        <GridItem>
          <Text color="black">30d</Text>
        </GridItem>
        <GridItem>
          <Text color="black">
            {apyModalRoi({ amountEarned: cakeEarnedPerThousand30D, amountInvested: oneThousandDollarsWorthOfCake })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text color="black">{cakeEarnedPerThousand30D}</Text>
        </GridItem>
        {/* 365 day / APY row */}
        <GridItem>
          <Text color="black">365d(APY)</Text>
        </GridItem>
        <GridItem>
          <Text color="black">
            {apyModalRoi({ amountEarned: cakeEarnedPerThousand365D, amountInvested: oneThousandDollarsWorthOfCake })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text color="black">{cakeEarnedPerThousand365D}</Text>
        </GridItem>
      </Grid>
      <Description fontSize="12px" color="black">
        {TranslateString(
          999,
          'Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.',
        )}
      </Description>
      <Flex justifyContent="center">
        <LinkExternal href={`https://quickswap.exchange/#/add/${liquidityUrlPathParts}`} color="black">
          {TranslateString(999, 'Get')} {lpLabel}
        </LinkExternal>
      </Flex>
    </Modal>
  )
}

export default ApyCalculatorModal
