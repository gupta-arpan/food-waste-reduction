import logo from "../assets/logo/logo.ico";
import { Link } from "react-router-dom";
function IndexHeader(props) {

    function handleLoginButtonClick() {
        props.isLoginCardVisible(prevValue => {
            return !prevValue;
        })
    }
  
    function handleRegisterButtonClick() {
      props.isRegisterCardVisible(prevValue => {
            return !prevValue;
        });
    }
      
  return (
    <header>
      <div className="flex items-center pt-5">
        <div className="flex items-center gap-5 ml-20">
          <img src={logo} alt="logo-img" className="h-20 w-auto" />
          <span className=" text-4xl brand-name text-textColor">WasteZero</span>
        </div>
        <div className="flex items-center gap-4 ml-auto mr-20">
          <span className="text-white">
            <Link to={"/add-restaurants"}>Add restaurant</Link>
          </span>
          <button
            onClick={handleLoginButtonClick}
            className="rounded-lg bg-secondary w-40 border-1 p-2 text-black"
          >
            Login
          </button>
          <button
            onClick={handleRegisterButtonClick}
            className="rounded-lg border-1 w-40 p-2 bg-primary text-textColor"
          >
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}

export default IndexHeader;
