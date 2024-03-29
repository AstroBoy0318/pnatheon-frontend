import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button, Card, CardBody, Heading } from '@pantheon-org/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress } from '../../../utils/addressHelpers'
import useAllEarnings from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'
import { CAKE_NAME } from '../../../config'

const StyledFarmStakingCard = styled(Card)`
  text-align: left;
  min-height: max-content;
`

const Block = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: space-around;
`

const Label = styled.div`
  color: black;
  font-size: 15px;
`

const Actions = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 2em;

`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const eggPrice = usePriceCakeBusd().toNumber()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="lg" mb="24px" style={{ marginTop: '8px',textAlign: "center", color: '#4E4E50'}}>
          {TranslateString(542, 'Farms & Staking')}
        </Heading>
        <Block>
          <img src="/images/logo2.png" alt="Drachma" style={{ height: "100px",marginBottom: "1em" }}/>
        </Block>
        <Block>
          <div>
            <Row>
              <Label>{ CAKE_NAME } to Harvest</Label>
            </Row>
            <Row style={{fontSize: '14px'}}>
            <CakeHarvestBalance earningsSum={earningsSum}/> 
            </Row>
            <Row>
              <Label>~${(eggPrice * earningsSum).toFixed(2)}</Label>
            </Row>
          </div>
          <div>
            <Row>
              <Label>{ CAKE_NAME } in Wallet</Label>
            </Row>
            <Row style={{fontSize: '14px'}}>
               <CakeWalletBalance cakeBalance={cakeBalance} /> 
            </Row>
            <Row>
              <Label>~${(eggPrice * cakeBalance).toFixed(2)}</Label>
            </Row>
          </div>
        </Block>

        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullWidth
            >
              {pendingTx
                ? CAKE_NAME
                : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton className="imgBtn"/>
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
