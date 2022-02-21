import React from "react";
import { Box, Flex, Text, Button } from "native-base";
interface Props {
  children: React.ReactNode;
}
const Transactions = ({ children }: Props) => {
  return (
    <Box mb={8}>
      <Flex direction="row" justify="space-between" align="center">
        <Text textTransform="uppercase" fontSize="lg">
          Transaction History
        </Text>
        <Button variant="ghost">See All</Button>
      </Flex>

      <Flex>{children}</Flex>
    </Box>
  );
};

export default Transactions;
