'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from '@/config/theme'

import Portfolio from ".";

export default function Home() {
  return (
    <AnimatePresence mode={"wait"} >
      <ChakraProvider theme={theme}>
        <Portfolio />
      </ChakraProvider>
    </AnimatePresence >
  );
}
