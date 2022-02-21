import React, { useRef } from "react";
import {
  Box,
  Text,
  Flex,
  HStack,
  Image,
  Heading,
  VStack,
  Icon,
  ScrollView,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Animated, StatusBar } from "react-native";
import Features from "../components/Features";
import Transactions from "../components/Transactions";
import Transaction from "../components/Transation";
interface InfoProps {
  label: string;
  iconName: string;
}
const Info = ({ label, iconName }: InfoProps) => (
  <VStack alignItems="center" w={20}>
    <Box p={3} backgroundColor="#fdfdff3e" mb={2} borderRadius={15}>
      <Icon as={Ionicons} name={iconName} size={8} color="white" />
    </Box>
    <Text color="white">{label}</Text>
  </VStack>
);
export default function App() {
  const scrollY = useRef(new Animated.Value(1)).current;

  return (
    <Flex flex={1} backgroundColor="indigo.500" position="relative" p={6}>
      <Animated.View
        style={{
          opacity: scrollY.interpolate({
            inputRange: [0, 100, 300],
            outputRange: [1, 0.5, 0],
          }),
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, 300, 600],
                outputRange: [0, 50, 100],
              }),
            },
            {
              scale: scrollY.interpolate({
                inputRange: [0, 300, 600],
                outputRange: [1, 0.9, 0.8],
              }),
            },
          ],
        }}
      >
        <HStack justifyContent="space-between" mb={4}>
          <Box>
            <Text color="white" fontWeight="thin">
              Total Balance
            </Text>
            <Heading color="white">$ 232.094,00</Heading>
          </Box>
          <Image
            borderRadius={15}
            size="sm"
            source={{
              uri: "https://unsplash.com/photos/c_GmwfHBDzk/download?force=true&w=640",
            }}
            alt="random user"
          />
        </HStack>
        <HStack justifyContent="space-between">
          <Info label="Send" iconName="ios-wallet" />
          <Info label="Request" iconName="ios-download" />
          <Info label="Top Up" iconName="ios-duplicate" />
          <Info label="Scan" iconName="ios-scan-outline" />
        </HStack>
      </Animated.View>

      <Box
        flex={1}
        position="absolute"
        left={0}
        right={0}
        top={0}
        bottom={0}
        zIndex={69}
      >
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          // onScroll={(e) => console.log(e.nativeEvent.contentOffset.y)}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: scrollY },
                },
              },
            ],
            { useNativeDriver: true }
          )}
        >
          <Flex
            flex={1}
            backgroundColor="#F4F6F8"
            roundedTop={32}
            p="20px"
            mt={56}
            pb={10}
          >
            <Features />
            <Transactions>
              <Transaction
                color="blue"
                iconName="ios-duplicate"
                label="Money from Luís"
                much={336}
                id={0}
              />
              <Transaction
                color="green"
                iconName="ios-phone-portrait"
                label="Phone"
                much={-100}
                id={1}
              />
              <Transaction
                color="amber"
                iconName="ios-wifi-sharp"
                label="Data"
                much={-250}
                id={2}
              />
              <Transaction
                color="blue"
                iconName="ios-duplicate"
                label="Money from Luís"
                much={336}
                id={3}
              />
              <Transaction
                color="rose"
                iconName="ios-heart"
                label="BPJS"
                much={-123}
                id={4}
              />
              <Transaction
                color="amber"
                iconName="ios-flash"
                label="PLN"
                much={3600}
                id={5}
              />
            </Transactions>
          </Flex>
        </Animated.ScrollView>
      </Box>
    </Flex>
  );
}
