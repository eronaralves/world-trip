
import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    body: 'Poppins'
  },
  colors: {
    white: {
      "600": "#F5F8FA",
      "700": "#DADADA"
    },
    blue: {
      "800":"#47585B"
    }
  },
  styles: {
    global: {
      body: {
        bg: "#fff",
        color: "#000"

      }
    }
  }

})

