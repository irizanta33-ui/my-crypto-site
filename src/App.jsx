import React, { useEffect, useState } from 'react'

function App() {
  const [prices, setPrices] = useState({})

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd')
      .then(res => res.json())
      .then(data => setPrices(data))

    const interval = setInterval(() => {
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd')
        .then(res => res.json())
        .then(data => setPrices(data))
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem', textAlign: 'center' }}>
      <h1>🚀 Analisa BTC ke $130K</h1>
      <p>Harga Live dari CoinGecko:</p>
      <div style={{ marginTop: '1rem' }}>
        <p>Bitcoin (BTC): ${prices.bitcoin?.usd ?? 'Loading...'}</p>
        <p>Ethereum (ETH): ${prices.ethereum?.usd ?? 'Loading...'}</p>
        <p>Solana (SOL): ${prices.solana?.usd ?? 'Loading...'}</p>
      </div>
    </div>
  )
}

export default App
