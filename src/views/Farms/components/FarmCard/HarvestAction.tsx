import React, { useContext, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading } from '@pantheon-org/uikit'
import useI18n from 'hooks/useI18n'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useStake from '../../../../hooks/useStake'
import { RefferalContext } from '../../../../contexts/RefferalContext'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
}

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const HarvestButton = styled(Button)`
  box-shadow: none !important;
`

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { account } = useWallet()
  const { refferalAddress } = useContext(RefferalContext)
  const { onStake } = useStake(pid)

  const rawEarningsBalance = getBalanceNumber(earnings)
  const displayBalance = rawEarningsBalance.toLocaleString()

  return (
    <Flex mb="8px" justifyContent="space-between" alignItems="center" style={{marginTop: "-5px"}}>
      <Heading color={rawEarningsBalance === 0 ? 'black' : 'black'}>{displayBalance}</Heading>
      <BalanceAndCompound>
        {pid === 3 ?
          <HarvestButton
            disabled={rawEarningsBalance === 0 || pendingTx}
            size='sm'
            variant='secondary'
            marginBottom='15px'
            onClick={async () => {
              setPendingTx(true)
              await onStake(rawEarningsBalance.toString(),(refferalAddress===""?account:refferalAddress))
              setPendingTx(false)
            }}
          >
            {TranslateString(999, 'Compound')}
          </HarvestButton>
          : null}
        <HarvestButton
          disabled={rawEarningsBalance === 0 || pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await onReward((refferalAddress===""?account:refferalAddress))
            setPendingTx(false)
          }}
        >
          {TranslateString(999, 'Harvest')}
        </HarvestButton>
      </BalanceAndCompound>
    </Flex>
  )
}

export default HarvestAction
