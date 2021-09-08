import { MenuEntry } from '@pantheon-org/uikit'
import { getCakeAddress } from '../../utils/addressHelpers'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },/*
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/craters',
  },
  {
    label: 'Referrals',
    icon: 'GroupsIcon',
    href: '/referrals',
  }, */
  {
    label: 'Chart',
    icon: 'GroupsIcon',
    href: 'https://polygon.poocoin.app/'
  }
]

export default config
