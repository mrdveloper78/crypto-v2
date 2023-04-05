import React from 'react';


const Coin = ({ name, image, symbol, marketCap, price, priceChange }) => {
  return (
    <div className='flex items-center justify-center
    py-4 px-10 text-xs text-[#212529]
    border border-solid border-silver ' >

      <img src={image} alt={name} className='w-[30px]' />

      <span className='w-[140px] text-sm ml-4 text-left font-bold text-[#333333]' >
        {name}
      </span>

      <span className='w-[100px] text-left' >
        {symbol.toUpperCase()}
      </span>

      <span className='w-[100px] text-left'>
        {price.toLocaleString()}
      </span>

      <span className={`
      w-[100px] text-left font-bold
      ${priceChange > 0 ? 'text-green-500' : 'text-red-700'}
      `} >

        {Number(priceChange).toFixed(2)}
      </span>

      <span className='w-[100px] text-left font-bold text-gray-700'>
        {marketCap.toLocaleString()}
      </span>

    </div>
  )
}


export default Coin;