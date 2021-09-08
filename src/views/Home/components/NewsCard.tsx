import React from 'react'
import styled from 'styled-components'
import { Card, CardBody } from '@pantheon-org/uikit'
import { Timeline } from 'react-twitter-widgets'

const StyledNewsCard = styled(Card)`
    text-align: center;
`

const NewsCard = () => {
    return (
        <StyledNewsCard>
            <CardBody>
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'FinancePair'
                    }}
                    options={{
                        height: '350',
                        chrome: "noheader, nofooter",
                        width: "100%"
                    }}
                />
            </CardBody>
        </StyledNewsCard>
    )
}

export default NewsCard
