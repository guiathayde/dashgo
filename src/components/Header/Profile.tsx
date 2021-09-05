import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Guilherme Athayde</Text>
          <Text color="gray.300" fontSize="small">
            guiathayde303@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Guilherme Athayde"
        src="https://avatars.githubusercontent.com/u/69310777?v=4"
      />
    </Flex>
  );
}
