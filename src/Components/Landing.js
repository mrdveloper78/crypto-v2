import React, { useState } from 'react';
import { useEffect } from 'react';
import { getCoins } from '../Adaptor/Api';
import Loading from '../Utils/Loading';
import Coin from './Coin';



const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search,setSearch] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoins();
            console.log(data);
            setCoins(data);
        }
        fetchApi();
    }, []);

    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const searchedCoins = coins.filter(
        coin => coin.name.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <div className='w-full h-full' >
            <input 
            type='text' 
            placeholder='Search ....'
            value={search} onChange={searchHandler}
            className='w-[360px] h-5 mt-12 
            border border-solid border-silver rounded
            p-[20px] bg-gray-200 transition-all duration-200 ease-in
            focus:outline-none z-10'
             />

            {
                coins.length ?
                    <div className='mx-auto my-12
                    border border-solid border-silver rounded-xl
                    w-fit bg-gray-200 overflow-hidden' >

                        {
                            searchedCoins && searchedCoins.map(
                                (item, index) => {

                                    const { 
                                        name,
                                        image,
                                        symbol,
                                        current_price ,
                                        market_cap,
                                        market_cap_change_24h
                                    } = item;

                                    return (
                                        <Coin
                                        key={index}
                                        name={name}
                                        image={image}
                                        symbol={symbol}
                                        price={current_price}
                                        marketCap={market_cap}
                                        priceChange={market_cap_change_24h}
                                        />
                                    )
                                }
                            )
                        }
                    </div> :
                    <Loading />
            }

        </div>
    )
}


export default Landing;
