import CollectionList from "@components/CollectionList";
import Container from "@components/Container";
import Layout from "@components/Layout";
import { UserContextType } from "@customTypes/type";
import { UserContext } from "contexts";
import Head from "next/head";
import { useContext } from "react";

const User = () => {
    const { user } = useContext(UserContext) as UserContextType;
    return (
        <Layout>
            <Head>
                <title>Detail &mdash; Epictetus</title>
            </Head>
            <Container>
                {user.owned.length > 0 ? (
                    <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                        <CollectionList />
                    </div>
                ) : (
                    <div className="p-6 rounded-lg bg-gray-200 shadow">
                        <p className="text-center text-gray-500">
                            You don't have any collections yet.
                        </p>
                    </div>
                )}
            </Container>
        </Layout>
    );
};

export default User;
