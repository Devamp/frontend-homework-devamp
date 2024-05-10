const Navbar = () => {
    return (
        <nav>
          <ul className="flex bg-slate-900 text-2xl justify-center text-white space-x-14 p-4 font-mono">
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
              <a href={`/myroute`}>Custom-Route</a>
            </li>
          </ul>
        </nav>
    );
}

export default Navbar;