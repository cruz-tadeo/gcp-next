import { montserrat } from "../../../utils/fonts";
import { Link } from "../../../../navigation";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";

const MainMenuAuth = ({ style = "" }) => {
  const selectedLayoutSegment = useSelectedLayoutSegments();
  let pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  pathname = pathname.replace(",", "/");
  return (
    <nav className={`${montserrat.className} menu js-navList`}>
      <ul
        className={`menu__nav ${style} -is-active  d-flex justify-content-between`}
      >
        <li
          className={`text-exotic-text ${
            pathname.includes("/referFriend") ? "current" : ""
          }`}
        >
          <Link href="/portal/referFriend" className="text-16">
            Refer a friend
          </Link>
        </li>
        <li
          className={`text-exotic-text ${
            pathname === "/benefits" ? "current" : ""
          }`}
        >
          <Link href="/portal/reservation" className="text-16">
            Request a reservation
          </Link>
        </li>
        <li
          className={`text-exotic-text ${
            pathname.includes("/policies") ? "current" : ""
          }`}
        >
          <Link href="/portal/policies" className="text-16">
            Reservation Policies
          </Link>
        </li>
        <li
          className={`text-exotic-text ${
            pathname === "/benefits" ? "current" : ""
          }`}
        >
          <Link href="/benefits" className="text-16">
            Privacy Policy
          </Link>
        </li>
        <li
          className={`text-exotic-text ${
            pathname === "/benefits" ? "current" : ""
          }`}
        >
          <Link href="/benefits" className="text-16">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenuAuth;
