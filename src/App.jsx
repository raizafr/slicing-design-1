import { ReactSVG } from "react-svg";
import desktopSignUp from "./assets/images/illustration-sign-up-desktop.svg";
// import mobileSignUp from "./assets/images/illustration-sign-up-mobile.svg";
import iconList from "./assets/images/icon-list.svg";
function App() {
  return (
    <>
      <div className="bg-backgound-mobile bg-cover min-h-[310px] rounded-b-3xl sm:hidden"></div>
      <main className="flex md:flex-row justify-center md:items-center h-screen md:space-x-16 pt-0 w-screen mt-4 md:mt-0">
        <section className="space-y-11 px-5 ">
          <div className="text-5xl font-bold">Stay updated!</div>
          <p>
            Join 60.000+ product managers receiving monthly <br />
            updates on:
          </p>
          <ul className="list-outside space-y-2">
            <li className="flex space-x-2">
              {" "}
              <ReactSVG src={iconList} />{" "}
              <p>Product discovery and building what matters</p>
            </li>
            <li className="flex space-x-2">
              {" "}
              <ReactSVG src={iconList} />
              <p>Measuring to ensure updates are a succes</p>
            </li>
            <li className="flex space-x-2">
              {" "}
              <ReactSVG src={iconList} />
              <p>And much more!</p>
            </li>
          </ul>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="font-semibold text-sm">
              Email address
            </label>
            <input
              type="email"
              name=""
              id=""
              placeholder="email@company.com"
              className="border py-2.5 px-3 rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
          <button className="bg-[#232742] text-white w-full py-2.5 font-bold rounded-lg hover:bg-gradient-to-r from-[#FF507A] to-[#FF683C]">
            Subscribe to monthly newsletter
          </button>
        </section>
        <section className="hidden md:block">
          <ReactSVG src={desktopSignUp} />
        </section>
      </main>
    </>
  );
}

export default App;
