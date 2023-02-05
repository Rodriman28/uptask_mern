const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Crea tu cuenta y administra tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      <form className="my-10 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label
            htmlFor="nombre"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="email"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="password"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="password2"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Repetir password
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Password de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        <input
          type="submit"
          value="Crear cuenta"
          className="mb-5 bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors "
        />
      </form>
    </>
  );
};

export default NuevoPassword;
