// Simpe navbar componenet which sets up the routes for the web app
const Navbar = () => {
  return (
      <nav>
          <ul className="flex flex-col items-center md:flex-row bg-slate-900 text-2xl justify-center text-white md:space-x-14 p-4 font-mono">
              <li className="hover:underline">
                  <a href={`/`}>Home</a>
              </li>
              <li className="hover:underline">
                  <a href={`/list`}>List</a>
              </li>
              <li className="hover:underline">
                  <a href={`/population`}>Population</a>
              </li>
              <li className="hover:underline">
                  <a href={`/gdp`}>GDP</a>
              </li>
          </ul>
      </nav>
  );
}

export default Navbar;
