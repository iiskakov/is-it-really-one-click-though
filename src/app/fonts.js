import { Orbitron } from 'next/font/google'
import { Lato } from 'next/font/google'
import { Anton } from 'next/font/google'
import { Permanent_Marker } from 'next/font/google'
import localFont from 'next/font/local'

export const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
})

export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight : ['400', '700', '900']
})

export const anton = Anton({
  subsets: ['latin'],
  display: 'swap',
  weight : ['400']
})

export const marker = Permanent_Marker({
  subsets: ['latin'],
  weight : ['400']
})


export const tthoves = localFont({
  src: [
    {
      path: '../public/TTHoves-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/TTHoves-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/TTHoves-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/TTHoves-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/TTHoves-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
});
