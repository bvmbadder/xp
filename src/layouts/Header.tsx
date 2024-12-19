/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Icon } from "@iconify/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { moreWallets, wallets } from "../utils";
import back from "../assets/icon/back.png";
import q from "../assets/icon/q.png";
import Modal from "../components/Modal";
import TabModal from "../components/TabModal";
type HeaderType = {
  page: string;
  onMenuToggle: () => void;
};
const Header = ({ onMenuToggle }: HeaderType) => {
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
    <div className="flex items-center justify-between p-3">
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
        <div className="grid md:grid-cols-2 md:p-4">
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
      <button className="md:hidden text-pryDark" onClick={onMenuToggle}>
        <Icon icon="ic:baseline-menu" className="w-6 h-6" />
      </button>
      <div className="hidden  md:flex items-center gap-2">
        <svg
          className="fill-[#161424] w-6 h-6"
          focusable="false"
          aria-hidden="true"
          viewBox="0 -960 960 960"
        >
          <path
            d="M320-160q-17 0-28.5-11.5T280-200v-40h-40q-17 0-28.5-11.5T200-280v-400q0-17 11.5-28.5T240-720h40v-40q0-17 11.5-28.5T320-800q17 0 28.5 11.5T360-760v40h40q17 0 28.5 11.5T440-680v400q0 17-11.5 28.5T400-240h-40v40q0 17-11.5 28.5T320-160Zm-40-160h80v-320h-80v320Zm360 160q-17 0-28.5-11.5T600-200v-160h-40q-17 0-28.5-11.5T520-400v-200q0-17 11.5-28.5T560-640h40v-120q0-17 11.5-28.5T640-800q17 0 28.5 11.5T680-760v120h40q17 0 28.5 11.5T760-600v200q0 17-11.5 28.5T720-360h-40v160q0 17-11.5 28.5T640-160Zm-40-280h80v-120h-80v120Zm-280-40Zm320-20Z"
            fill="inherit"
          ></path>
        </svg>
        <div className="font-semibold">BTC/XRP (Bitstamp)</div>
        <div className="h-5 border-r border-gray-300"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#908E96"
            d="M11.5 16.5h1V11h-1zm.5-6.923q.262 0 .439-.177t.176-.439t-.177-.438T12 8.346t-.438.177t-.177.439t.177.438t.438.177M12.003 21q-1.867 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
          />
        </svg>
      </div>
      <div className="hidden border md:flex items-center p-2 gap-2 bg-white rounded md:w-[25%]">
        <svg
          className="fill-[#908E96] w-5 h-5"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path
            d="M19.35 20.425L13.325 14.4C12.825 14.8333 12.2417 15.1708 11.575 15.4125C10.9083 15.6541 10.2 15.775 9.45 15.775C7.65 15.775 6.125 15.15 4.875 13.9C3.625 12.65 3 11.1416 3 9.37498C3 7.60831 3.625 6.09998 4.875 4.84998C6.125 3.59998 7.64167 2.97498 9.425 2.97498C11.1917 2.97498 12.6958 3.59998 13.9375 4.84998C15.1792 6.09998 15.8 7.60831 15.8 9.37498C15.8 10.0916 15.6833 10.7833 15.45 11.45C15.2167 12.1166 14.8667 12.7416 14.4 13.325L20.475 19.35C20.625 19.4833 20.7 19.6541 20.7 19.8625C20.7 20.0708 20.6167 20.2583 20.45 20.425C20.3 20.575 20.1167 20.65 19.9 20.65C19.6833 20.65 19.5 20.575 19.35 20.425ZM9.425 14.275C10.775 14.275 11.925 13.7958 12.875 12.8375C13.825 11.8791 14.3 10.725 14.3 9.37498C14.3 8.02498 13.825 6.87081 12.875 5.91248C11.925 4.95414 10.775 4.47498 9.425 4.47498C8.05833 4.47498 6.89583 4.95414 5.9375 5.91248C4.97917 6.87081 4.5 8.02498 4.5 9.37498C4.5 10.725 4.97917 11.8791 5.9375 12.8375C6.89583 13.7958 8.05833 14.275 9.425 14.275Z"
            fill="inherit"
          ></path>
        </svg>
        <input
          className="bg-transparent outline-none font-normal"
          type="text"
          placeholder="search for assets"
        />
      </div>
      <div className="flex items-center gap-3 text-sm">
        <NavLink
          to="functionalities"
          className="bg-black p-2 rounded text-white"
        >
          Fuctionalities
        </NavLink>
        <button
          className="bg-pry text-white p-2 text-[13px] font-medium rounded flex gap-2"
          onClick={openFirstModal}
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
          Connect
        </button>
      </div>
    </div>
  );
};

export default Header;
