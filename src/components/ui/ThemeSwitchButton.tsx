// 'use client'
// import { LoadingIcon, MoonIcon, SunIcon } from '@/assets/icons/icons'
// import { useTheme } from 'next-themes'
// import { useEffect, useState } from 'react'

// export function ThemeSwitchButton() {
//   const [mounted, setMounted] = useState(false)
//   const { setTheme, resolvedTheme } = useTheme()

//   useEffect(() => setMounted(true), [])

//   const iconSize = 20

//   if (!mounted) return (
//     <LoadingIcon width={iconSize} height={iconSize} fill="#868e96" />
//   )

//   if (resolvedTheme === 'dark') {
//     return (
//       <button className="radius-full p-2" onClick={() => setTheme('light')}>
//         <SunIcon width={iconSize} height={iconSize} fill="#1e1e1e" />
//       </button>
//     )
//   }

//   if (resolvedTheme === 'light') {
//     return (
//       <button className="radius-full p-2" onClick={() => setTheme('dark')}>
//         <MoonIcon width={iconSize} height={iconSize} fill="#FAFAFA" />
//       </button>
//     )
//   }
// }
