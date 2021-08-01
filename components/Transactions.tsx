import React from "react";
import { Box, Flex, Center, Text, Icon, Button } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Animated } from "react-native";
interface CardProps {
  color: string;
  iconName: string;
  label: string;
  much: number;
  scrollY: Animated.Value;
  id: number;
}
interface MainProps {
  scrollY: Animated.Value;
}
const Card = ({ color, iconName, label, much, scrollY, id }: CardProps) => (
  <Animated.View
    style={{
      transform: [
        {
          translateX:
            id === 0
              ? 0
              : scrollY?.interpolate({
                  inputRange: [id * 30, id * 70, id * 110],
                  outputRange: [-200, -100, 0],
                  extrapolate: "clamp",
                }),
        },
      ],
      opacity:
        id === 0
          ? 1
          : scrollY?.interpolate({
              inputRange: [id * 10, id * 10 * 1.5, id * 10 * 2.5],
              outputRange: [0, 0.5, 1],
            }),
    }}
  >
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
  </Animated.View>
);
const Transactions = ({ scrollY }: MainProps) => {
  return (
    <Box mb={8}>
      <Flex direction="row" justify="space-between" align="center">
        <Text textTransform="uppercase" fontSize="lg">
          Last Transaction
        </Text>
        <Button variant="ghost">See All</Button>
      </Flex>

      <Flex>
        <Card
          color="blue"
          iconName="ios-duplicate"
          label="Money from Luís"
          much={336}
          id={0}
          scrollY={scrollY}
        />
        <Card
          color="green"
          iconName="ios-phone-portrait"
          label="Phone"
          much={-100}
          id={1}
          scrollY={scrollY}
        />
        <Card
          color="amber"
          iconName="ios-wifi-sharp"
          label="Data"
          much={-250}
          id={2}
          scrollY={scrollY}
        />
        <Card
          color="blue"
          iconName="ios-duplicate"
          label="Money from Luís"
          much={336}
          id={3}
          scrollY={scrollY}
        />
        <Card
          color="rose"
          iconName="ios-heart"
          label="BPJS"
          much={-123}
          id={4}
          scrollY={scrollY}
        />
        <Card
          color="amber"
          iconName="ios-flash"
          label="PLN"
          much={3600}
          id={5}
          scrollY={scrollY}
        />
      </Flex>
    </Box>
  );
};

export default Transactions;
