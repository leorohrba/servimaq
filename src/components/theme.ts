import { createSystem, defaultConfig } from "@chakra-ui/react"
import { defineTokens } from "@chakra-ui/react"

const tokens = defineTokens({
  colors: {
    brand: {
      yellow: { 100: { value: '#FFB81C', } }, // Header background yellow
      blue: { 100: { value: '#1E4C9A' } },   // Darker blue section
      lightGray: { 100: { value: '#F2F2F2' } }, // Light gray background

    }
  },
  fonts: {
    heading: { value: `'Figtree', sans-serif` },
    body: { value: `'Figtree', sans-serif` },
  },
})

export const system = createSystem(defaultConfig, {
  theme: { tokens },
})