import React from 'react'
import { BinanceIcon, CommunityIcon, Tag, VerifiedIcon } from '@pantheon-org/uikit'

const NoFeeTag = () => (
  <Tag variant="primary" outline startIcon={<VerifiedIcon />}>
    No Fees
  </Tag>
)

const RiskTag = ({ risk }) => (
  <Tag variant={risk >= 3 ? 'failure' : 'success'} outline startIcon={<VerifiedIcon />}>
    Risk {risk}
  </Tag>
)

const CoreTag = () => (
  <Tag variant='secondary' outline startIcon={<VerifiedIcon />}>
    Core
  </Tag>
)

const CommunityTag = () => (
  <Tag variant='textSubtle' outline startIcon={<CommunityIcon />}>
    Community
  </Tag>
)

const BinanceTag = () => (
  <Tag variant='binance' outline startIcon={<BinanceIcon />}>
    Binance
  </Tag>
)

export { CoreTag, CommunityTag, BinanceTag, RiskTag, NoFeeTag }
