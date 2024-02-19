// Libs
import React, { useState } from "react";

// Icons
import { VscAccount } from "react-icons/vsc";
import { VscBell } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";

const UserNotifyBar = () => {
  const [account, setAccount] = useState(0);
  const [bell, setBell] = useState(0);
  const [mail, setMail] = useState(0);

  return (
    <div className="w-52 h-16 bg-purple-500 rounded flex p-2 justify-between items-center text-white">
      <div>
        <VscAccount size={45} />
        <div className="bg-red-500 w-5 h-5 rounded-full absolute -translate-y-11 translate-x-7 ">
          {account}
        </div>
      </div>
      <div>
        <VscBell size={45} />
        <div className="bg-red-500 w-5 h-5 rounded-full absolute -translate-y-11 translate-x-7 ">
          {bell}
        </div>
      </div>
      <div>
        <VscMail size={45} />
        <div className="bg-red-500 w-5 h-5 rounded-full absolute -translate-y-11 translate-x-7 ">
          {mail}
        </div>
      </div>
    </div>
  );
};

export default UserNotifyBar;
