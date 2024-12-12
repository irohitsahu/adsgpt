import Dashboard from "../page/dashboard/dashboard";
import { useEffect } from "react";
import {
  setAdDropdownVisibility,
  setDropdownVisibility,
  useUIController,
} from "../context/context";

function Layout() {
  const [, dispatch] = useUIController();

  useEffect(() => {
    // this is used from closing the dropdown when user clicks on the page other than dropdown
    const handleClickOutside = () => {
      setDropdownVisibility(dispatch, "ProfileDropdown", false);
      setDropdownVisibility(dispatch, "LanguageDropdown", false);
      setAdDropdownVisibility(dispatch, "");
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dispatch]);
  return (
    <>
      <Dashboard />
    </>
  );
}

export default Layout;
