"use client";
import { usePayments } from "../context/paymentsContext";

import { useState } from "react";
const Charge = ({ accountId }) => {
  const [type, setType] = useState("Add");
  const [amount, setAmount] = useState("");

  const { saveMovement, getMovements } = usePayments();

  const handleSubmit = async (event) => {
    const body = { type, amount, account_id: accountId };
    console.log(body);
    await saveMovement(body);
    //await getMovements(accountId);

    console.log(body);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="px-6 py-2 flex ">
      <form onSubmit={handleSubmit}>
        <div className="font-bold text-lg mb-2 ">
          <h2>Ingresa o retira dinero de tu cuenta</h2>
        </div>
        <div className="mb-6  grid grid-cols-2 gap-4 content-between">
          <div>
            <input
              id="add"
              type="radio"
              name="type"
              value="Add"
              checked={type === "Add"}
              onChange={handleTypeChange}
            />
            <label htmlFor="add" className="pl-2">
              Cargar
            </label>
          </div>
          <div>
            <input
              id="remove"
              type="radio"
              name="type"
              value="Remove"
              checked={type === "Remove"}
              onChange={handleTypeChange}
            />
            <label htmlFor="remove" className="pl-2">
              Decargar
            </label>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="amount" className="font-semibold ">
            Cantidad
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="$1000"
            required
          />
        </div>

        <button
          type="submit"
          className="mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {type === "Add" ? "Cargar cuenta" : "Descargar cuenta" }
        </button>
      </form>
    </div>
  );
};

export default Charge;
