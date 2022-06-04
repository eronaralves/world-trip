import {  Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { theme } from "../styles/theme";


interface StyleTravelProps {
  icon: ElementType;
  label: string;
}

export function StyleTravel({icon, label}: StyleTravelProps) {
  return (
    <Link display="flex" flexDirection="column" alignItems="center">
      <Icon as={icon} color="#FFBA08" fontSize="80px"/>
      <Text color={theme.colors.blue[800]} fontSize="24px" fontWeight="600" lineHeight="36px">{label}</Text>
    </Link>
  )
}