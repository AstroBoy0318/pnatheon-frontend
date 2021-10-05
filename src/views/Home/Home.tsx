import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BaseLayout, Heading } from '@pantheon-org/uikit'
import useI18n from 'hooks/useI18n'
import useTheme from 'hooks/useTheme'
import Page from 'components/layout/Page'
import useBlock from 'hooks/useBlock'
import { useMasterchef } from 'hooks/useContract'
import { BSC_BLOCK_TIME } from 'config'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import NewsCard from './components/NewsCard'
import UptoEarnCard from './components/UptoEarnCard'


const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-size: 100px 30px;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 5px;
  padding-top: 0px;
  text-align: center;
  @media (max-width: 768px) {
    min-height: 3vw;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    background-size: 20px;
    height: 30px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;
  max-width: 850px;
  margin: 0 auto;
  grid-gap: 20px;

  & > div {
    grid-column: span 8;
    width: 96%;
    max-width: 600px;
    margin: 0 auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: 2/span 10;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`


const Home: React.FC = () => {
  const TranslateString = useI18n()
  const { theme } = useTheme()
  const block = useBlock()
  const masterChef = useMasterchef()
  const [startBlock, setStartBlock] = useState(0)

  useEffect(() => {
    const fetchStartBlock = async () => {
      setStartBlock(await masterChef.methods.startBlock().call())
    }
    fetchStartBlock()
  }, [masterChef, setStartBlock])

  const startDate = new Date(new Date().getTime() + (startBlock - block) * BSC_BLOCK_TIME * 1000)
  const formatedStartDate = () => {
    const yyyy = startDate.getFullYear();
    const mm = ('0'.concat((startDate.getMonth() + 1).toString())).slice(-2); // Months are zero based. Add leading 0.
    const dd = ('0'.concat(startDate.getDate().toString())).slice(-2);			// Add leading 0.
    const hh = ('0'.concat(startDate.getHours().toString())).slice(-2);
    const min = ('0'.concat(startDate.getMinutes().toString())).slice(-2);		// Add leading 0

    // ie: 2013-02-18, 8:35 AM	
    const time = yyyy.toString().concat('-').concat(mm).concat('-').concat(dd).concat(' ').concat(hh).concat(':').concat(min);

    return time;
  }

  return (
    <Page>
      <Hero />
      {
      startBlock >= block &&
      <Heading style={{ textAlign: "center" }} color="black" mb="20px">
        Farming will start {formatedStartDate()} (Block: {startBlock})
      </Heading>
      }
      <div>
        <Cards>
          <FarmStakingCard />
          <NewsCard />
          {/* <AddTokenCard /> */}
          {/* <LotteryCard /> */}
          {/* <Announcement /> */}
          {/* <LPWorth /> */}
          <CakeStats />
          <TotalValueLockedCard />
          <UptoEarnCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
