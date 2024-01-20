// app/providers.tsx
'use client'

import { customTheme } from '@/theme'
import { ChakraBaseProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraBaseProvider resetCSS={true} theme={customTheme}>
        {children}
    </ChakraBaseProvider>
}