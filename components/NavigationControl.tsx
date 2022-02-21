import { Flex, Icon, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
interface Props {
  pageName: string;
}
const NavigationControl = ({ pageName }: Props) => {
  return (
    <Flex direction="row" align="center" mt={5} mb="5">
      <Icon as={Ionicons} name="ios-arrow-back" size={6} color="black" marginRight={5} />
      <Text fontSize="xl" fontWeight="bold">{pageName}</Text>
    </Flex>
  );
};

export default NavigationControl;
