"use client";
import { useState, createContext, useContext } from "react";

const PaymentsContext = createContext();

export const usePayments = () => {
  const context = useContext(PaymentsContext);
  if (!context)
    throw new Error("usePayments must be used within a PaymentsProvider");
  return context;
};

//const host = "http://localhost:8081";
//
const host = "https://ntk3o6xkli.execute-api.us-east-1.amazonaws.com";

const PaymentsProvider = ({ children }) => {
  const [showCharge, setShowCharge] = useState(false);
  const [showMovements, setShowMovements] = useState(false);
  const [movements, setMovements] = useState([]);

  const handleChargeClick = async () => {
    setShowCharge(true);
    setShowMovements(false);
  };

  const handleMovementsClick = async (id) => {
    setShowCharge(false);
    setShowMovements(true);

    //await getMovements(id)
  };

  const getUser = async (id) => {
    const url = `${host}/account/${id}/movements`;

    try {
      const includeAccount = new URLSearchParams({
        includeAccount: true,
      });
      const response = await fetch(url + includeAccount);

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  const getMovements = async (id) => {
    const url = `${host}/account/${id}/movements`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      setMovements(data);

      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  const saveMovement = async (data) => {
    const url = `${host}/account/saveMovement`;

    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    showCharge,
    showMovements,
    handleChargeClick,
    handleMovementsClick,
    getMovements,
    saveMovement,
    getUser
  };

  return (
    <PaymentsContext.Provider value={value}>
      {children}
    </PaymentsContext.Provider>
  );
};

export default PaymentsProvider;
