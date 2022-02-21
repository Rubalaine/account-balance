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
      p={2}
      direction="row"
      mb={4}
      borderRadius={15}
      justify="space-between"
      align="center"
    >
      <Box p={5} bgColor={`${color}.50`} borderRadius={15} mr={4}>
        <Icon as={Ionicons} name={iconName} size={6} color={`${color}.500`} />
      </Box>
      <Box flex={1}>
        <Text bold>{label}</Text>
        <Text fontSize="xs" color="grey">
          {new Date(Date.now()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>
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
      <Icon
        ml={4}
        as={Ionicons}
        name="chevron-forward"
        size={6}
        color="indigo"
      />
    </Flex>
  </Flex>
);

export default Transaction;
