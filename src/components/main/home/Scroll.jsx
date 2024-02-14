import {BiMouse} from "react-icons/bi";
import {Link} from "react-scroll";

function Scroll() {
    return (
        <Link to="skills" offset={-75}
              className="absolute right-0 bottom-80 grid cursor-pointer justify-center gap-y-12 transition-all text-firstColor md:bottom-40">
            <BiMouse className="-mb-2 ml-6 text-3xl transition-all"></BiMouse>
            <span className="-rotate-90 text-sm transition-all">Scroll Down</span>
        </Link>
    );
}

export default Scroll;