import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Flex, Link, LinkExternal, Text } from '@pantheon-org/uikit'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { Address } from 'config/constants/types'

export interface ExpandableSectionProps {
  isTokenOnly?: boolean
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  lpLabel?: string
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  pid?: number
  tokenAddresses: Address
  lpBuyUrl: string
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: black;
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: black;
  }
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  isTokenOnly,
  pid,
  bscScanAddress,
  removed,
  totalValueFormated,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
  lpBuyUrl
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })
  const buyUrl = `${lpBuyUrl}${liquidityUrlPathParts}`

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text color="black">{TranslateString(316, 'Stake')}:</Text>
        <StyledLinkExternal href={
          isTokenOnly ?
            `https://quickswap.exchange/#/swap/${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
            :
          buyUrl
        }>
          {lpLabel}
        </StyledLinkExternal>
      </Flex>
      {!removed && (
        <Flex justifyContent="space-between">
          <Text color="black">{TranslateString(23, 'Total Liquidity')}:</Text>
          <Text color="black">{totalValueFormated === "$NaN"?"$0":totalValueFormated}</Text>
        </Flex>
      )}
      <Flex justifyContent="left">
        <Link external href={bscScanAddress} bold={false}>
        <Text color="black" bold>  View on Polygon </Text>
        </Link>
      </Flex>
    </Wrapper>
  )
}

export default DetailsSection
