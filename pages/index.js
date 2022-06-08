import { Flex, Text, Button, Box, Tab, TabList, Tabs, TabPanels, TabPanel, Image } from "@chakra-ui/react"
import Head from "next/head"
import { useMoralis } from "react-moralis"
import Balance from "../components/Balance"
import Header from "../components/Header"
import Nft from "../components/Nft"
import Profile from "../components/Profile"
import SendCrypto from "../components/SendCrypto"
import Transactions from "../components/Transactions"


export default function Home() {

  const {isAuthenticated, authenticate, user, logout, isLoggingOut} = useMoralis()
  if(!isAuthenticated) {
    return(
      <>
       <Head>
        <title>Login | lexa-dashboard</title>
       </Head>
       <Flex direction="column" justifyContent="center" alignItems="center" width="100vw" height="100vh" bgGradient='linear(to-l, #7928CA, #FF0080)'>
         <Text fontSize="5xl" fontWeight="bold" color="white">Lexa Dashboard</Text>
         <Button colorScheme="yellow" size="lg" mt="6" onClick={() => authenticate({signingMessage:"Sign in to login to Lexa Dashboard"})}>Connect Wallet</Button>
       </Flex>
      </>
    )
  }
  return (
    <>
    <Head>
      <title>Lexa Dashboard</title>
    </Head>

    <Flex direction="column" width="100vw" height="100vh">
      <Header user={user} logout={logout} isLoggingOut={isLoggingOut}/>
      <Box flex="1" bg="purple.100" px="44" py="20">
        <Tabs size="lg" colorScheme="purple" align="center" variant="enclosed">
          <TabList>
            <Tab fontWeight="bold">Profile</Tab>
            <Tab fontWeight="bold">Balance</Tab>
            <Tab fontWeight="bold">Transactions</Tab>
            <Tab fontWeight="bold">NFTs</Tab>
            <Tab fontWeight="bold">Send Crypto</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Profile user={user}/>
            </TabPanel>
            <TabPanel>
              <Balance user={user}/>
            </TabPanel>
            <TabPanel>
              <Transactions user={user} />
            </TabPanel>
            <TabPanel>
              <Nft user={user} />
            </TabPanel>
            <TabPanel>
              <SendCrypto />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
    </>
  )
}
