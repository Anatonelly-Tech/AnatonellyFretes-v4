// Libs
import React, { useState } from "react";

// Icons
import { VscAccount } from "react-icons/vsc";
import { VscBell } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";

const UserNotifyBar = () => {
  const [account, setAccount] = useState(11);
  const [bell, setBell] = useState(11);
  const [mail, setMail] = useState(1);

  if (account > 99) {
    setAccount(99);
  }
  if (bell > 99) {
    setBell(99);
  }
  if (mail > 99) {
    setMail(99);
  }

  return (
    <div className="w-40 h-12 p-2 bg-purple-500 rounded-lg flex  items-center justify-evenly text-white">
      <div>
        <VscMail size={30} />
        {mail <= 0 ? null : (
          <div className="bg-red-500 w-4 h-4 rounded-full absolute -translate-y-8 translate-x-5 flex items-center justify-center ">
            <p className="text-xs">{mail}</p>
          </div>
        )}
      </div>
      <div>
        <VscAccount size={30} />
        {account <= 0 ? null : (
          <div className="bg-red-500 w-4 h-4 rounded-full absolute -translate-y-8 translate-x-5 flex items-center justify-center">
            <p className="text-xs">{account}</p>
          </div>
        )}
      </div>
      <div>
        <VscBell size={30} />
        {bell <= 0 ? null : (
          <div className="bg-red-500 w-4 h-4 rounded-full absolute -translate-y-8 translate-x-5 flex items-center justify-center ">
            <p className="text-xs">{bell}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserNotifyBar;
