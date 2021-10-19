import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import Auth from './utils/auth';
// import Landing from './components/pages/Landing';
import MainUI from './components/MainUI';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {

    return (

        <ApolloProvider client={client}>
            <MainUI />
            {/* {Auth.loggedIn() ? <MainUI /> : <Landing />} */}
        </ApolloProvider>
    );
}

export default App;