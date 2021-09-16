import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@pantheon-org/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
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
    width: 100%;
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

  return (
    <Page>
      <Hero/>
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
