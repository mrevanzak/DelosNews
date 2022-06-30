import Head from "next/head"
import { observer } from "mobx-react"
import { useContext } from "react"

import CollectionList from "@components/CollectionList"
import Container from "@components/Container"
import Layout from "@components/Layout"
import { UserContext } from "providers/context"

const User = () => {
    const user = useContext(UserContext)!
    return (
        <Layout>
            <Head>
                <title>Detail &mdash; DelosNews</title>
            </Head>
            <Container>
                {user.account.owned.length > 0 ? (
                    <div className='rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px'>
                        <CollectionList />
                    </div>
                ) : (
                    <div className='p-6 rounded-lg bg-gray-200 shadow'>
                        <p className='text-center text-gray-500'>You don't have any collections yet.</p>
                    </div>
                )}
            </Container>
        </Layout>
    )
}

export default observer(User)
