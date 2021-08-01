import React from "react";
import { Box, Flex, Center, Text, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
interface CardProps {
  color: string;
  iconName: string;
  label: string;
}
const Card = ({ color, iconName, label }: CardProps) => (
  <Center bgColor="white" p={2} borderRadius={15} mb={3} width="23%">
    <Box p={3} bgColor={`${color}.50`} borderRadius={15} mb={2}>
      <Icon as={Ionicons} name={iconName} size={9} color={`${color}.500`} />
    </Box>
    <Text>{label}</Text>
  </Center>
);
const Features = () => {
  return (
    <Box mb={8}>
      <Text textTransform="uppercase" fontSize="lg">
        App features
      </Text>

      <Flex direction="row" wrap="wrap" justify="space-between" align="center">
        <Card color="green" iconName="ios-phone-portrait" label="Phone" />
        <Card color="amber" iconName="ios-wifi-sharp" label="Data" />
        <Card color="blue" iconName="ios-game-controller" label="Games" />
        <Card color="rose" iconName="ios-heart" label="BPJS" />
        <Card color="amber" iconName="ios-flash" label="PLN" />
        <Card color="violet" iconName="ios-globe" label="WEB" />
        <Card color="green" iconName="ios-wallet" label="invest" />
        <Card color="blue" iconName="ios-grid" label="other" />
      </Flex>
    </Box>
  );
};

export default Features;
