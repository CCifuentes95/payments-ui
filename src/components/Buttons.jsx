"use client";
import { usePayments } from "../context/paymentsContext";

export const Buttons = ({accountId}) => {
    const { showCharge, showMovements, handleChargeClick, handleMovementsClick } =
    usePayments();

    const handleMovements = async () => handleMovementsClick(accountId);

  return (
    <div className="px-6 pb-4 flex justify-between">
      <button
        className={`px-4 py-2 rounded-lg ${
          showCharge ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
        }`}
        onClick={handleChargeClick}
      >
        Cargar/Descargar
      </button>
      <button
        className={`px-4 py-2 rounded-lg ${
          showMovements ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
        }`}
        onClick={handleMovements}
      >
        Ver Movimientos
      </button>
    </div>
  );
};
