import { Orbitron } from 'next/font/google'
import { Inter } from 'next/font/google'
import { Anton } from 'next/font/google'
import { Permanent_Marker } from 'next/font/google'
// import localFont from 'next/font/local'

export const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
})

// export const lato = Lato({
//   subsets: ['latin'],
//   display: 'swap',
//   weight : ['400', '700', '900']
// })

export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight : ['400','600', '700', '900']
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


// export const inter = localFont({
//   src: [
//     {
//       path: '../public/Inter-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../public/Inter-Italic.woff2',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: '../public/Inter-DemiBold.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '../public/Inter-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: '../public/Inter-BoldItalic.woff2',
//       weight: '700',
//       style: 'italic',
//     },
//   ],
// });
