import { MenuEntry } from '@pantheon-org/uikit'
import { getCakeAddress } from '../../utils/addressHelpers'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
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
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  
  {
    label: 'Charts',
    icon: 'GroupsIcon',
    items: [
      {
        label: "PooCoin",
        href: "https://polygon.poocoin.app/"
      },
      {
        label: "QuickChart",
        href: "https://quickchart.app/token/"
      },
    ],
  },

 {
    label: 'More',
    icon: 'GroupsIcon',
    items: [
      {
        label: "Documents",
        href: "https://polygon.poocoin.app/"
      },
      {
        label: "Github",
        href: "https://quickchart.app/token/"
      },
       {
        label: "Twitter",
        href: "https://quickchart.app/token/"
      },
   {
        label: "Telegram",
        href: "https://quickchart.app/token/"
      },
    ],
  },

]

export default config
