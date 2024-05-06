'use client'

import {ThemeProvider} from 'next-themes'
export default function Providers({childern}) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className=''>
            {childern}
        </div>
    </ThemeProvider>
  )
}


