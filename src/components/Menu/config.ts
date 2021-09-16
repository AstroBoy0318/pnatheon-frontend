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
        target: "_blank",
        href: "https://quickswap.exchange/#/swap?outputCurrency=0xF2FfB03daB169D38C42002683805ABbA110bEf68"
      },
      {
        label: "Liquidity",
        target: "_blank",
        href: "https://quickswap.exchange/#/add/0xF2FfB03daB169D38C42002683805ABbA110bEf68"
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
        target: "_blank",
        href: "https://polygon.poocoin.app/tokens/0xF2FfB03daB169D38C42002683805ABbA110bEf68"
      },
      {
        label: "QuickChart",
        target: "_blank",
        href: "https://quickchart.app/token/0xF2FfB03daB169D38C42002683805ABbA110bEf68"
      },
    ],
  },

 {
    label: 'More',
    icon: 'GroupsIcon',
    items: [
      {
        label: "Documents",
        target: "_blank",
        href: "https://pantheonfinance.gitbook.io/pantheon-finance/"
      },
      {
        label: "Github",
        target: "_blank",
        href: "https://github.com/PantheonFin"
      },
       {
        label: "Twitter",
        target: "_blank",
        href: "https://twitter.com/FinancePair"
      },
   {
        label: "Telegram",
        target: "_blank",
        href: "https://t.me/PantheonFinance"
      },
      {
        label: "Medium",
        target: "_blank",
        href: "https://pantheonfinance.medium.com/"
      },
    ],
  },

]

export default config
