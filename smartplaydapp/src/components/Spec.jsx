
import React from 'react'
import img from '../assets/guns.png'
import {Contract, ethers} from 'ethers'
import { rentContractABI, rentContractAddress } from '../blockinteraction'

export default function Spec() {
 async function callContract(action) {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const numberContract = new Contract(rentContractAddress, rentContractABI, signer);

        if (action === 'rent') {
          // Call the rent function on the contract
          const rentTxn = await numberContract.rentAsset();
          await rentTxn.wait();
        } else if (action === 'buy') {
          // Call the buy function on the contract
          const buyTxn = await numberContract.buyAsset();
          await buyTxn.wait();
        }
      } else {
        console.log('Metamask not detected. Please install Metamask.');
        // You can show a user-friendly message or redirect to a Metamask installation guide
      }
    } catch (error) {
      console.error('Error:', error);
    }
 }

 // ... rest of your code



  return (

    <div className='flex w-[1200px] mx-auto justify-between items-center h-[30rem] text-white'>
        <div className='w-[500px]'>
            <h1>Valorant - Spectrum Bundle</h1>
            <h3>Description</h3>
            <p>The Spectrum Collection is a collection of cosmetics in VALORANT. Its contents were initially available to be obtained when the collection was first released as a bundle in the Store. After this, only its weapon skins can be obtained whenever they become available in a player's daily Featured Store Offers.
The collection was created in collaboration with Zedd, who worked on its audio elements.</p>

<button onClick={() => callContract('rent')} className='p-2 bg-black m-2 rounded-md'>Rent Asset</button>
<button onClick={() => callContract('buy')} className='p-2 bg-black m-2 rounded-md'>Buy Now</button>
           <script src = "blockinteraction.js"></script>
            <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"
        type="application/javascript"></script>
        </div>

        <div className=' w-60 h-60'>
            <img src={img} alt="" />
            <p>RENTING STARTS AT 0.0041 ETH</p>
            <p>BUY NOW FOR 0.071 ETH</p>

        </div>
    </div>
  )
}
