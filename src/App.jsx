import { useState } from 'react'
import { FaTelegram, FaYoutube, FaFacebook, FaWallet } from 'react-icons/fa'

export default function App() {
  const [wallet, setWallet] = useState("")

  async function connectWallet() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      setWallet(accounts[0])
    } else {
      alert("Please install MetaMask")
    }
  }

  function buyALF() {
    alert("Buy ALF Token feature coming next")
  }

  return (
    <div className="container">
      <h1>🚀 ALF TOKEN</h1>
      <p>USDT Pre-Sale is Live</p>

      <div className="stats">
        <div>1 ALF = 0.01 USDT</div>
        <div>Bonus +10%</div>
      </div>

      <div className="countdown">⏳ 7 Days Remaining</div>

      <a href="https://t.me/Alfonce4">
        <button><FaTelegram /> Telegram</button>
      </a>

      <a href="https://www.youtube.com/@alfoncekomba6874">
        <button><FaYoutube /> YouTube</button>
      </a>

      <a href="https://www.facebook.com/share/1LGmZ2hgiH/">
        <button><FaFacebook /> Facebook</button>
      </a>

      <button onClick={connectWallet}>
        <FaWallet /> {wallet ? wallet.slice(0,6) + "..." : "Connect Wallet"}
      </button>

      <button onClick={buyALF}>
        💰 Buy ALF Token
      </button>
    </div>
  )
}
