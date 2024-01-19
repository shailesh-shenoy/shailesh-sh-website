// app/providers.tsx
'use client'

import { customTheme } from '@/theme'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider resetCSS={true} theme={customTheme}>
        {children}
    </ChakraProvider>
}