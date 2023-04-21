export const UserInfo = ({ user }) => {
  return (
    <div className="flex ">
      <div className="px-6 py-4 w-auto">
        <div className="font-bold text-xl mb-2">
          Hola de nuevo {user.firstname}!
        </div>
        <p className="text-gray-700 text-base">
          Tu saldo actual es de:{" "}
          <span className="text-green-700 font-bold">${user.total}</span>
        </p>
      </div>
    </div>
  );
};
