/* eslint-disable @typescript-eslint/no-explicit-any */
import xrp from "../assets/xrp.png";
import xpm from "../assets/xpm.png";
import core from "../assets/core.png";
import btc from "../assets/btc.png";
import { useState } from "react";

type PropType = {
  onClick: () => void;
};
const SwapBox = ({ onClick }: PropType) => {
  const coins = [
    {
      logo: xpm,
      name: "XPM (XPM)",
    },
    {
      logo: core,
      name: "CORE (Coreum)",
    },
    {
      logo: btc,
      name: "BTC (Bitstamp)",
    },
  ];

  const [selectedSellCoin, setSelectedSellCoin] = useState<any>(coins[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="relative w-full">
      {/* Sell Section */}
      <div className="border bg-[#F9F9F9] rounded p-4 mb-2 relative">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">Sell</span>
          <span className="text-sm text-gray-400">Balance 0</span>
        </div>
        <div className="flex items-center">
          <input
            type="number"
            placeholder="0.00"
            className="w-full text-xl font-semibold outline-none bg-transparent text-gray-600"
          />
          {/* Custom Dropdown */}
          <div
            className="ml-2 relative cursor-pointer border rounded bg-white p-1 w-full "
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="flex items-center gap-1">
              <img
                src={selectedSellCoin.logo}
                alt={selectedSellCoin.name}
                className="w-6 h-6"
              />
              <span className="text-gray-600 font-medium whitespace-nowrap truncate">
                {selectedSellCoin.name}
              </span>
            </div>
            {/* Dropdown List */}
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 w-full bg-white border rounded shadow-lg mt-1 z-10">
                {coins.map((coin) => (
                  <li
                    key={coin.name}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedSellCoin(coin);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <img src={coin.logo} alt={coin.name} className="w-6 h-6" />
                    <span className="text-gray-600 whitespace-nowrap">
                      {coin.name}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="text-gray-400 text-sm">$0</div>
      </div>

      {/* Swap Button */}
      <div className="absolute left-0 right-0 top-0 bottom-[70px] z-10 flex justify-center items-center my-2">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M17.707 20.707a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 13 15h3V4a1 1 0 1 1 2 0v11h3a1 1 0 0 1 .707 1.707zm-10-17.414a1 1 0 0 0-1.414 0l-4 4A1 1 0 0 0 3 9h3v11a1 1 0 1 0 2 0V9h3a1 1 0 0 0 .707-1.707z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Buy Section */}
      <div className="border bg-[#F9F9F9] rounded p-4 relative">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">Buy</span>
          <span className="text-sm text-gray-400">Balance 0</span>
        </div>
        <div className="flex items-center">
          <input
            type="number"
            placeholder="0.00"
            className="w-full text-xl font-semibold outline-none bg-transparent text-gray-600"
          />
          <div className="ml-2 flex items-center gap-1">
            <img
              src={xrp} // Replace with XRP logo
              alt="XRP"
              className="w-6 h-6"
            />
            <span className="text-gray-800 font-bold">XRP</span>
          </div>
        </div>
        <div className="text-gray-400 text-sm">$0</div>
      </div>

      {/* Connect Wallet Button */}
      <button
        className="mt-8 w-full bg-pry text-white text-sm font-medium py-3 rounded flex items-center justify-center gap-2"
        onClick={onClick}
      >
        <svg
          className="fill-white w-5 h-5"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path
            d="M6 20C4.9 20 3.95833 19.6083 3.175 18.825C2.39167 18.0417 2 17.1 2 16V8C2 6.9 2.39167 5.95833 3.175 5.175C3.95833 4.39167 4.9 4 6 4H18C19.1 4 20.0417 4.39167 20.825 5.175C21.6083 5.95833 22 6.9 22 8V16C22 17.1 21.6083 18.0417 20.825 18.825C20.0417 19.6083 19.1 20 18 20H6ZM6 8.25H18C18.4833 8.25 18.9375 8.325 19.3625 8.475C19.7875 8.625 20.1667 8.84167 20.5 9.125V8C20.5 7.3 20.2583 6.70833 19.775 6.225C19.2917 5.74167 18.7 5.5 18 5.5H6C5.3 5.5 4.70833 5.74167 4.225 6.225C3.74167 6.70833 3.5 7.3 3.5 8V9.125C3.83333 8.84167 4.2125 8.625 4.6375 8.475C5.0625 8.325 5.51667 8.25 6 8.25ZM3.575 11.65L15.5 14.525C15.6167 14.5583 15.7375 14.5625 15.8625 14.5375C15.9875 14.5125 16.0917 14.4583 16.175 14.375L20.175 11.025C19.9583 10.6417 19.6583 10.3333 19.275 10.1C18.8917 9.86667 18.4667 9.75 18 9.75H6C5.41667 9.75 4.9 9.92917 4.45 10.2875C4 10.6458 3.70833 11.1 3.575 11.65Z"
            fill="inherit"
          ></path>
        </svg>
        Connect wallet
      </button>
    </div>
  );
};

export default SwapBox;
