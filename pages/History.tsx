import React from "react";
import { Center, Flex, ScrollView, Text } from "native-base";
import Transactions from "../components/Transactions";
import Transaction from "../components/Transation";

const History = () => {
  return (
    <>
      <Flex flex={1} backgroundColor="blue.50" >
        <ScrollView roundedTop={32} showsVerticalScrollIndicator={false}>
          <Center p={16} backgroundColor="indigo.500">
            <Text textTransform="uppercase" fontWeight="bold" color="white">
              History
            </Text>
          </Center>
          <Flex  p="20px" pb={10}>
            <Transactions>
              <Transaction
                color="blue"
                iconName="ios-arrow-down"
                label="Money from Luís"
                much={336}
                id={0}
              />
              <Transaction
                color="red"
                iconName="ios-arrow-up"
                label="Phone"
                much={-100}
                id={1}
              />
              <Transaction
                color="blue"
                iconName="ios-arrow-down"
                label="Money from Luís"
                much={336}
                id={0}
              />
              <Transaction
                color="blue"
                iconName="ios-arrow-down"
                label="Money from Luís"
                much={336}
                id={0}
              />
              <Transaction
                color="blue"
                iconName="ios-arrow-down"
                label="Money from Luís"
                much={336}
                id={0}
              />
              <Transaction
                color="red"
                iconName="ios-arrow-up"
                label="Phone"
                much={-100}
                id={1}
              />
              <Transaction
                color="red"
                iconName="ios-arrow-up"
                label="Phone"
                much={-100}
                id={1}
              />
              <Transaction
                color="red"
                iconName="ios-arrow-up"
                label="Phone"
                much={-100}
                id={1}
              />
            </Transactions>
          </Flex>
        </ScrollView>
      </Flex>
    </>
  );
};

export default History;
