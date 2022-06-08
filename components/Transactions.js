import { useMoralisWeb3Api } from "react-moralis";
import { useState } from "react";
import CustomContainer from "./CustomContainer";
import { useEffect } from "react";
import { Divider, Link, Text } from "@chakra-ui/react";

export default function Transactions({user}) {

    const Web3Api = useMoralisWeb3Api()
    const BASE_URL = "https://rinkeby.etherscan.io/tx/"

    const [transactions, setTransactions] = useState([])

    const fetchTransactions = async () => {
        const data = await Web3Api.account.getTransactions({
            chain: "rinkeby",
            address: user.get('ethAddress'),
            limit: 10
        })
        if(data){
            setTransactions(data.result)
        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [])
    return(
        <CustomContainer>
            <Text fontSize="xl" mb="6" fontWeight="bold">My Last 10 Transactions</Text>
            {transactions && transactions.map(transaction => (
                <div key={transaction.hash}>
                    <Link href={`${BASE_URL}${transaction.hash}`} isExternal>➡&nbsp; {transaction.hash}</Link>
                    <Divider />
                </div>
            ))}
        </CustomContainer>
    )
}