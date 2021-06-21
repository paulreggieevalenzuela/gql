import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import Dashboard from './pages/Dashboard';
import Sidebar from './components/sidebar';
const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading apps...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <main className="main">
      <Sidebar />
      <Dashboard />
    </main>
  );
}

export default App;
