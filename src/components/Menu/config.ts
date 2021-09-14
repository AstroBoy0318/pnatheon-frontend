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
  },
  {
    label: 'Trade',
    icon: 'GroupsIcon',
    items: [
      {
        label: "Swap",
        href: "https://quickswap.com"
      },
      {
        label: "Liquidity",
        href: "https://quickswap.com"
      }
    ],
  },
  {
    label: 'Chart',
    icon: 'GroupsIcon',
    href: 'https://polygon.poocoin.app/'
  }
]

export default config
