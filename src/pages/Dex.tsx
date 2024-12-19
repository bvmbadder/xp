/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";
import SwapBox from "../components/SwapBox";
import StatCard from "../components/StatCard";
import StatList from "../components/StatList";
import btc from "../assets/btc.png";
import back from "../assets/icon/back.png";
import q from "../assets/icon/q.png";
import xrp from "../assets/xrp.png";
import { moreWallets, wallets } from "../utils";
import Modal from "../components/Modal";
import TabModal from "../components/TabModal";

const Dex = () => {
  const details = [
    {
      name: "Btc Details",
      logo: btc,
    },
    {
      name: "CRP Details",
      logo: xrp,
    },
  ];
  const [dets, setDets] = useState(details[0]);
  const [trade, setTrade] = useState("Market");
  const [chart, setChart] = useState("Chart");
  const [history, setHistory] = useState("Exchange History");

  const [formTab, setFormTab] = useState(false);
  const onSetFormTabOpen = (value: string) => {
    setValue(value);
    closeFirstModal();
    setFormTab(true);
  };
  const onSetFormTabClose = () => {
    setFormTab(false);
    openFirstModal();
  };

  const onSetFormTabOpen2 = (value: string) => {
    setValue(value);
    closeSecondModal();
    setFormTab(true);
  };
  const onSetFormTabClose2 = () => {
    setFormTab(false);
    openSecondModal();
  };

  const [isFirstModalOpen, setFirstModalOpen] = useState<boolean>(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState<boolean>(false);

  const openFirstModal = () => setFirstModalOpen(true);
  const closeFirstModal = () => setFirstModalOpen(false);

  const openSecondModal = () => {
    closeFirstModal();
    setSecondModalOpen(true);
  };
  const closeSecondModal = () => setSecondModalOpen(false);

  const backToFirstModal = () => {
    closeSecondModal();
    setFirstModalOpen(true);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWallets = moreWallets.filter((wallet) =>
    wallet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [value, setValue] = useState("");

  return (
    <div className="">
      {formTab && (
        <TabModal
          isOpen={formTab}
          onClose={isFirstModalOpen ? onSetFormTabClose : onSetFormTabClose2}
          value={value}
        />
      )}
      <Modal
        icon={q}
        isOpen={isFirstModalOpen}
        title="Connect Wallet"
        closeModal={closeFirstModal}
      >
        <div className="grid md:grid-cols-2 md:p-8">
          <div className="flex flex-col">
            <div className="p-4 md:p-8">
              <p className="font-semibold text-3xl mb-3">Log In</p>
              <div className="flex gap-4">
                <input type="checkbox" name="" id="" />
                <p className="text-sm text-gray-400">
                  Accept Terms of Services, Privacy Policy and Disclaimer
                </p>
              </div>
            </div>
            <div className="">
              <ul className="p-4 md:p-8">
                {wallets.map((wallet) => (
                  <li
                    className="flex border-b p-3 py-4 font-medium hover:bg-gray-100 my-2"
                    key={wallet.id}
                    onClick={() => {
                      wallet.id == 4
                        ? openSecondModal()
                        : onSetFormTabOpen(wallet.name);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      {/* <img
                        className="rounded-full mr-2 w-8 h-8 "
                        src={wallet.icon}
                        alt=""
                      /> */}
                      <svg
                        className="w-7 h-7 fill-[#161424]"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M6 20C4.9 20 3.95833 19.6083 3.175 18.825C2.39167 18.0417 2 17.1 2 16V8C2 6.9 2.39167 5.95833 3.175 5.175C3.95833 4.39167 4.9 4 6 4H18C19.1 4 20.0417 4.39167 20.825 5.175C21.6083 5.95833 22 6.9 22 8V16C22 17.1 21.6083 18.0417 20.825 18.825C20.0417 19.6083 19.1 20 18 20H6ZM6 8.25H18C18.4833 8.25 18.9375 8.325 19.3625 8.475C19.7875 8.625 20.1667 8.84167 20.5 9.125V8C20.5 7.3 20.2583 6.70833 19.775 6.225C19.2917 5.74167 18.7 5.5 18 5.5H6C5.3 5.5 4.70833 5.74167 4.225 6.225C3.74167 6.70833 3.5 7.3 3.5 8V9.125C3.83333 8.84167 4.2125 8.625 4.6375 8.475C5.0625 8.325 5.51667 8.25 6 8.25ZM3.575 11.65L15.5 14.525C15.6167 14.5583 15.7375 14.5625 15.8625 14.5375C15.9875 14.5125 16.0917 14.4583 16.175 14.375L20.175 11.025C19.9583 10.6417 19.6583 10.3333 19.275 10.1C18.8917 9.86667 18.4667 9.75 18 9.75H6C5.41667 9.75 4.9 9.92917 4.45 10.2875C4 10.6458 3.70833 11.1 3.575 11.65Z"
                          fill="inherit"
                        ></path>
                      </svg>
                      <span className="text-md">{wallet.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden md:flex flex-col rounded-lg border border-pry p-10 bg-bg">
            <svg
              className="w-9 h-9 fill-pry"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 32 32"
            >
              <path
                d="M17.7872 2.625H4.41504L7.67032 7.88327H14.5L17.9149 13.4089H24.4574L17.7872 2.625Z"
                fill="inherit"
              ></path>
              <path
                d="M1 18.6667L7.67014 29.4506L10.9573 24.1627L7.54248 18.6667L10.9573 13.1708L7.67014 7.88281L1 18.6667Z"
                fill="inherit"
              ></path>
              <path
                d="M24.3292 24.1931L30.9994 13.4092H24.4569L21.042 18.9051H14.2123L10.957 24.1931H24.3292Z"
                fill="inherit"
              ></path>
            </svg>
            <p className="font-semibold text-2xl my-4">
              Gain access to a XRPL tool with unlimited potential{" "}
            </p>
            <p className="text-base text-gray-400 pb-10">
              Keep track of your assets, trade on our DEX, Quick Swap your
              tokens, explore thousands of NFTS and more.
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col">
          <ul className="p-4">
            {wallets.map((wallet) => (
              <li
                className="fleitems-center justify-between font-[400] text-white text-sm mb-2 cursor-pointer hover:bg-gray-600 p-2 rounded-full bg-[#252626] relative"
                key={wallet.id}
                onClick={() => {
                  wallet.id == 4
                    ? openSecondModal()
                    : onSetFormTabOpen(wallet.name);
                }}
              >
                <div className="flex items-center">
                  <img
                    className="rounded-full mr-2 w-10 h-10"
                    src={wallet.icon}
                    alt=""
                  />
                  <span className="text-md">{wallet.name}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-xs text-gray-500 text-center p-5 bg-[#252626] rounded-b-3xl">
            By connecting your wallet, you agree to our{" "}
            <span className="text-white">Terms of Service</span>
          </div>
        </div> */}
      </Modal>
      <Modal
        icon={back}
        isOpen={isSecondModalOpen}
        title="All wallets"
        closeModal={closeSecondModal}
        backToFirstModal={backToFirstModal}
      >
        <div className="p-4">
          <input
            type="search"
            placeholder="Search wallet"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2  rounded mb-4 outline-green-400 pl-5 border "
          />
          <div className="overflow-y-scroll max-h-96">
            {filteredWallets.map((wallet) => (
              <div
                key={wallet.name}
                onClick={() => {
                  onSetFormTabOpen2(wallet.name);
                }}
                className="flex gap-3 border-b p-3 py-4 font-medium hover:bg-gray-100 my-2"
              >
                <img src={wallet.icon} alt={wallet.name} className="w-9 h-9 " />
                <div className="mt-2 w-full  font-Wix text-xs truncate">
                  {wallet.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 container mx-auto md:px-16">
        <div className="col-span-3 flex flex-col gap-3">
          <div className="bg-white rounded-lg flex flex-col gap-4  h-[calc(100vh-40vh)]">
            <div className="flex p-2 border-b">
              {["Chart", "Order Book"].map((item) => (
                <div
                  className={`relative p-3 px-7 rounded-md text-sm cursor-pointer ${
                    item === chart ? "bg-gray-100 font-medium" : ""
                  }`}
                  key={item}
                  onClick={() => setChart(item)}
                >
                  {item}

                  <div
                    className={`absolute left-0 -bottom-2 w-full h-[1px] ${
                      item === chart ? "bg-purple-500 h-[2px]" : "bg-gray-200"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
            <div className="h-full">
              <iframe
                src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_12345&symbol=BITSTAMP:XRPUSD&interval=1D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&hideideas=1&theme=light"
                title="XRP to USD Chart"
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "10px",
                }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="bg-white rounded-lg flex flex-col p-3">
            <div className="flex py-2 border-b overflow-x-scroll">
              {["Exchange History", "Open Orders", "Trade History"].map(
                (item) => (
                  <div
                    className={`relative p-3 px-7 rounded-md text-sm cursor-pointer whitespace-nowrap  ${
                      item === history ? "bg-gray-100 font-medium" : ""
                    }`}
                    key={item}
                    onClick={() => setHistory(item)}
                  >
                    {item}

                    <div
                      className={`absolute left-0 -bottom-2 w-full h-[1px] ${
                        item === history
                          ? "bg-purple-500 h-[2px]"
                          : "bg-gray-200"
                      }`}
                    ></div>
                  </div>
                )
              )}
            </div>
            <div className=" h-48 mt-2 bg-gray-200 flex items-center justify-center">
              <p className="text-sm animate-bounce">Error loading!</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="col-span-2 flex flex-col gap-3">
          <div className="bg-white h-fit rounded-lg p-3">
            <div className="flex  py-2 border-b mb-3">
              {["Market", "Limit", "Send"].map((item) => (
                <div
                  className={`relative p-3 px-7 rounded-md text-sm cursor-pointer ${
                    item === trade ? "bg-gray-100 font-medium" : ""
                  }`}
                  key={item}
                  onClick={() => setTrade(item)}
                >
                  {item}

                  <div
                    className={`absolute left-0 -bottom-2 w-full h-[1px] ${
                      item === trade ? "bg-purple-500 h-[2px]" : "bg-gray-200"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
            <SwapBox onClick={openFirstModal} />
          </div>
          <div className="bg-white h-fit rounded-lg p-3 border-gray-100">
            <div className="flex py-2 border-b">
              {details.map((item) => (
                <div
                  className={`relative p-3 px-7 rounded-md text-sm cursor-pointer ${
                    item.name === dets.name ? "bg-gray-100 font-medium" : ""
                  }`}
                  key={item.name}
                  onClick={() => {
                    setDets(item);
                  }}
                >
                  <div className="flex flex-row gap-2 items-center">
                    <div className="rounded-full w-6 overflow-hidden h-6">
                      <img src={item.logo} alt="" className="w-full h-full" />
                    </div>
                    {item.name}
                  </div>

                  <div
                    className={`absolute left-0 -bottom-2 w-full h-[1px] ${
                      item.name === dets.name
                        ? "bg-purple-500 h-[2px]"
                        : "bg-gray-200"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between flex-row mt-3">
              <div className="flex flex-row gap-1">
                <div className="rounded-full w-9 overflow-hidden h-9">
                  <img src={btc} alt="" className="w-full h-full" />
                </div>
                <div className="">
                  <h2 className="font-medium text-sm">BTC</h2>
                  <h2 className="font-light text-xs text-gray-300">Bitstamp</h2>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <h2 className="font-medium text-sm ">42.5K XRP</h2>
                <h2 className="font-light text-xs text-gray-300">$103.2K</h2>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between items-center">
              <StatList title="Trustlines" value="17.2k" />
              <div className="h-12 border-l border-gray-300"></div>
              <StatList title="Holders" value="4.2k" />
              <div className="h-12 border-l border-gray-300"></div>
              <StatList title="Rank #6" value="Open" />
            </div>
            <hr className="my-4" />
            <div className="grid md:grid-cols-2 gap-2">
              <StatCard title="Issuer Fee" value="0.15%" />
              <StatCard title="Market Cap" value="$20.1M" />
              <StatCard title="Circulating Supply" value="195" />
              <StatCard title="Total Supply" value="343.5" />
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-4">
        <div className="bg-white rounded-lg p-3 md:p-8 container mx-auto">
          <div className="flex justify-between items-center">
            <p className="font-bold text-3xl">
              <span className="text-gray-400">About</span> BTC/XRP (Bitstamp)
            </p>
            <svg
              className="w-9 h-9 fill-[#161424]"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 32 32"
            >
              <path
                d="M17.7872 2.625H4.41504L7.67032 7.88327H14.5L17.9149 13.4089H24.4574L17.7872 2.625Z"
                fill="inherit"
              ></path>
              <path
                d="M1 18.6667L7.67014 29.4506L10.9573 24.1627L7.54248 18.6667L10.9573 13.1708L7.67014 7.88281L1 18.6667Z"
                fill="inherit"
              ></path>
              <path
                d="M24.3292 24.1931L30.9994 13.4092H24.4569L21.042 18.9051H14.2123L10.957 24.1931H24.3292Z"
                fill="inherit"
              ></path>
            </svg>
          </div>
          <div className="border-y mt-9 p-4">
            <p className="text-lg font-semibold">What is this page?</p>
            <p className="text-sm font-normal mt-5 text-gray-400 md:w-[50%]">
              The Bitstamp BTC token page offers a window to the past, present,
              and potential future of one of the longest-operating digital
              currency exchanges. You can trade Bitstamp BTC tokens on our
              decentralised exchange (DEX). Explore its performance, chart your
              trading strategy, and execute transactions in a secure, efficient
              experience on XPMarket.
            </p>
          </div>
        </div>
        <div className="border border-gray-400 p-4 rounded-lg mt-5 flex flex-col md:flex-row gap-10 justify-between">
          <div className="">
            <p className="text-sm font-semibold">Company</p>
            <div className="grid grid-cols-2 mt-4 gap-2 md:gap-x-16">
              <p className="text-xs font-normal text-gray-400">Careers</p>
              <p className="text-xs font-normal text-gray-400">
                Trademark guidelines
              </p>
              <p className="text-xs font-normal text-gray-400">
                Terms and conditions
              </p>
              <p className="text-xs font-normal text-gray-400">
                Privacy notice
              </p>
              <p className="text-xs font-normal text-gray-400">Disclaimer</p>
              <p className="text-xs font-normal text-gray-400">Cookie policy</p>
            </div>
          </div>
          <div className="">
            <p className="text-sm font-semibold">Products</p>
            <div className="grid grid-cols-2 mt-4 gap-2 md:gap-x-16">
              <p className="text-xs font-normal text-gray-400">
                Token Rankings
              </p>
              <p className="text-xs font-normal text-gray-400">DEX</p>
              <p className="text-xs font-normal text-gray-400">NFT Rankings</p>
              <p className="text-xs font-normal text-gray-400">Swap</p>
              <p className="text-xs font-normal text-gray-400">AMM Rankings</p>
              <p className="text-xs font-normal text-gray-400">AMM</p>
            </div>
          </div>
          <div className="">
            <p className="text-sm font-semibold">Socials</p>
            <div className="grid grid-cols-4 mt-4 gap-2 md:gap-x-8">
              <p className="text-xs font-normal text-gray-400">X</p>
              <p className="text-xs font-normal text-gray-400">Telegram</p>
              <p className="text-xs font-normal text-gray-400">Linkedln</p>
              <p className="text-xs font-normal text-gray-400">Blog</p>
            </div>
            <p className="text-xs font-normal text-gray-400 text-end mt-2">
              Copyright 2024. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dex;
