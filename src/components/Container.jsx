"use client";
import { usePayments } from "../context/paymentsContext";
import { Buttons } from "./Buttons";
import Charge from "./Charge";
import Movements from "./Movements";
import { UserInfo } from "./UserInfo";

export const Container = ({user, movements}) =>{
 
    const accountId  = user.accountId;
    const { showCharge, showMovements, getUser  } =  usePayments();
  
    return (
        <div className="grid grid-cols-1 grid-rows-2 card rounded shadow-lg">
          <UserInfo user={user}/>
          <Buttons accountId={accountId} /> 
          {showCharge && <Charge accountId={accountId} /> }
          {showMovements && <Movements movements={movements} />}
        </div>
    );
  }