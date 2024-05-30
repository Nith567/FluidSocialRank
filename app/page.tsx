'use client'


import { useQuery } from "@airstack/airstack-react";

interface QueryResponse {
  data: Data | null;
  loading: boolean;
  error: Error | null;
}

interface Data {
  Wallet: Wallet;
}

interface Error {
  message: string;
}

interface Wallet {
  socials: Social[];
  addresses: string[];
}

interface Social {
  dappName: "lens" | "farcaster";
  profileName: string;
}


const query = `
query MyQuery {
  Wallet(input: {identity: "vitalik.eth", blockchain: ethereum}) {
    socials {
      dappName
      profileName
    }
    addresses
  }
}
`;

const Page = () => {

  const { data, loading, error }: QueryResponse = useQuery<Data>(query, {}, { cache: false });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
//response : {
//   "data": {
//     "Wallet": {
//       "socials": [
//         {
//           "dappName": "farcaster",
//           "profileName": "vitalik.eth"
//         },
//         {
//           "dappName": "lens",
//           "profileName": "lens/@vitalik"
//         }
//       ],
//       "addresses": ["0xd8da6bf26964af9d7eed9e03e53415d37aa96045"]
//     }
//   }
// }
   return (
    <>
      <h1>Wallet</h1>
      <ul>
        {data?.Wallet.socials.map((social) => (
          <li key={social.dappName}>
            <h2>{social.dappName}</h2>
            <p>{social.profileName}</p>
          </li>
        ))}
      </ul>
      <h2>Addresses</h2>
      <ul>
        {data?.Wallet.addresses.map((address) => (
          <li key={address}>{address}</li>
        ))}
      </ul>
    </>
   )
  console.log(data);
}

export default Page;