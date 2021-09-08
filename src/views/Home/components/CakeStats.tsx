import React, { useState } from 'react'
import { Button, Card, CardBody, Heading, Text } from '@pantheon-org/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import {
  useBurnedBalance,
  useMaxTxAmount,
  useTotalSupply,
  useTransferTax,
} from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import { useCake } from 'hooks/useContract'
import { getWeb3 } from 'utils/web3'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'
import { CAKE_NAME } from '../../../config'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  text-align: center;
  height: auto !important;
  grid-row: span 2;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: max-content;
    margin-top: 50px;
  }
  `

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;  
  margin-right: 15px;
  margin-left: 15px;
`

const CakeStats = () => {
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const transferTax = useTransferTax()
  const transferTaxvalue = (getBalanceNumber(transferTax))*10000000000000000
  const farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);

  let DrachPerBlock = 0;
  if(farms && farms[0] && farms[0].DrachPerBlock){
    DrachPerBlock = new BigNumber(farms[0].DrachPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }
  const cakeContract = useCake()
  const tokenAddress = getCakeAddress()
  const [isPending, setIsPending] = useState(false)
  const addToken = async ()=>{
    setIsPending(true)
    const tokenSymbol = await cakeContract.methods.symbol().call();
    const tokenDecimals = await cakeContract.methods.decimals().call();
    const web3 = getWeb3()
    await web3.givenProvider.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: '',
        },
      },
    });
    setIsPending(false)
  }

  return (
    <StyledCakeStats>
      <CardBody style={{padding: "24px 10px",paddingBottom: "5px"}}>
        <Heading size="xl" mb="24px" color="black" style={{marginTop: '10px', marginBottom: '1em', position: 'relative'}}>
          { CAKE_NAME } Stats <Button onClick={addToken} disabled={isPending} padding="0.5em" size="sm" style={{position: "absolute",top:"0.3em",right: "0"}}>+ <img src="/images/icons/metamask.png" alt="metamask" width="24"/></Button>
        </Heading>
        <Row>
          <Text fontSize="14px" color="black">Total { CAKE_NAME } Supply</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px" color="black">Total Minted</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px" color="black">Total Burned</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px" color="black">Circulating Supply</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px" color="black">New {CAKE_NAME}/block</Text>
          <Text bold fontSize="14px" color="black">{DrachPerBlock}</Text>
        </Row>
        <Row>
          <Text fontSize="14px" color="black">Transfer Tax</Text>
          {transferTax && <CardValue fontSize="14px" value={transferTaxvalue} decimals={0} surfix="%" />}
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
