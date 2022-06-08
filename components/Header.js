import { Button, Center, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Header({user, logout, isLoggingOut}) {
    return(
        <header>
            <Flex px="10" py="6" justifyContent="space-between" bgGradient='linear(to-l, #7928CA, #FF0080)' color="white">
                <Center>
                    <Text fontSize="xl" fontWeight="bold">Lexa Dashboard</Text>
                </Center>
                <Center>
                    <Text>{user.getUsername()}</Text>
                    <Button ml="4" colorScheme="red" onClick={logout} disabled={isLoggingOut}>Logout</Button>
                </Center>
            </Flex>
        </header>
    )
}