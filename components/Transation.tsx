import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Box, Flex, Icon, Text } from "native-base";
interface CardProps {
  color: string;
  iconName: string;
  label: string;
  much: number;
  id: number;
}
const Transaction = ({ color, iconName, label, much }: CardProps) => (
  <Flex>
    <Flex
      bgColor="white"
      p={6}
      direction="row"
      mb={4}
      borderRadius={15}
      justify="space-between"
      align="center"
    >
      <Box p={3} bgColor={`${color}.50`} borderRadius={15} mr={4}>
        <Icon as={Ionicons} name={iconName} size={9} color={`${color}.500`} />
      </Box>
      <Box flex={1}>
        <Text bold>{label}</Text>
        <Text>Today, June 3</Text>
      </Box>
      {much > 0 ? (
        <Text bold style={{ color: "#22c55e" }}>
          +{much} USD
        </Text>
      ) : (
        <Text
          bold
          style={{
            color: "#ef4444",
          }}
        >
          {much} USD
        </Text>
      )}
    </Flex>
  </Flex>
);

export default Transaction;
