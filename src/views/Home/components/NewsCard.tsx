import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@pantheon-org/uikit'
import { Timeline } from 'react-twitter-widgets'


const StyledNewsCard = styled(Card)`
  text-align: left;
  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: none;
  }
`

const NewsCard = () => {
    return (
        <StyledNewsCard>
            <CardBody>
             
      <Heading size="lg" style={{ textAlign: "center",marginTop: "1px",marginBottom: "7px", marginLeft: "10px", color: '#4E4E50' }}>
          News
                </Heading>
                
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'FinancePair'
                    }}
                    options={{
                        height: '310',
                        chrome: "noheader, nofooter",
                        width: "100%",
                    }}
                />
               
            </CardBody>
        </StyledNewsCard>
    )
}

export default NewsCard
