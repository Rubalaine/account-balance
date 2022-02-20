import React from "react";
import { Box, Flex, Center, Text, Icon, Button } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Animated } from "react-native";
import Transaction from "./Transation";


const Transactions = () => {
  return (
    <Box mb={8}>
      <Flex direction="row" justify="space-between" align="center">
        <Text textTransform="uppercase" fontSize="lg">
          Last Transaction
        </Text>
        <Button variant="ghost">See All</Button>
      </Flex>

      <Flex>
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
      </Flex>
    </Box>
  );
};

export default Transactions;
