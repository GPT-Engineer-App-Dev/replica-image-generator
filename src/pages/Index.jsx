import { Box, Container, Flex, Heading, Input, InputGroup, InputLeftElement, Text, VStack, Avatar, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FaPlusCircle, FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Flex alignItems="center">
          <Box as="span" mr={2}>
            <img src="/images/notes-icon.png" alt="Notes Icon" width="40" />
          </Box>
          <Heading as="h1" size="lg" color="purple.500">Notes</Heading>
        </Flex>
        <Flex alignItems="center">
          <Text mr={4}>Puneet Shakya</Text>
          <Avatar name="Puneet Shakya" src="/images/avatar.png" size="md" />
          <IconButton aria-label="Menu" icon={<FaBars />} size="lg" variant="ghost" ml={4} />
        </Flex>
      </Flex>
      <InputGroup mb={10}>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input type="text" placeholder="Search notes" borderRadius="full" />
      </InputGroup>
      <Flex wrap="wrap" justifyContent="space-between">
        <Box bg="green.50" p={6} borderRadius="xl" w="30%" mb={6}>
          <Heading as="h2" size="md" mb={4}>lorem ipsum</Heading>
          <Text mb={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tristique augue, ut egestas velit. Mauris condimentum sed ante at sagittis. Suspendisse vitae lacinia purus. Donec a tristique augue, ut egestas velit.</Text>
          <Text fontSize="sm" color="gray.500">last opened yesterday 16:03</Text>
        </Box>
        <Box bg="pink.50" p={6} borderRadius="xl" w="30%" mb={6}>
          <Heading as="h2" size="md" mb={4}>lorem ipsum</Heading>
          <Text mb={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tristique augue, ut egestas velit.</Text>
          <Text fontSize="sm" color="gray.500">last opened yesterday 9:03</Text>
        </Box>
        <Box bg="yellow.50" p={6} borderRadius="xl" w="30%" mb={6}>
          <Heading as="h2" size="md" mb={4}>lorem ipsum</Heading>
          <Text mb={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tristique augue, ut egestas velit. Sed venenatis, nunc ut fermentum interdum, quam eros sollicitudin enim, eu porttitor risus enim ut felis. Nunc tellus libero, fringilla eu commodo sit amet, maximus a mauris. Mauris aliquam.</Text>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="sm" color="gray.500">last opened august 20</Text>
            <FaPlusCircle color="purple.500" size="24px" />
          </Flex>
        </Box>
        <Box bg="green.50" p={6} borderRadius="xl" w="30%" mb={6}>
          <Heading as="h2" size="md" mb={4}>lorem ipsum</Heading>
          <Text mb={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          <Text fontSize="sm" color="gray.500">last opened friday</Text>
        </Box>
      </Flex>
      <Text fontSize="sm" color="gray.500" textAlign="right">Daily UI 65</Text>
    </Container>
  );
};

export default Index;