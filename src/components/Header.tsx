import { FunctionComponent } from "react"
import { LogoHeader, Cart, Profile, Search } from "../assets"
import { Link } from "react-router-dom"

interface Props {}

const Header: FunctionComponent<Props> = () => {
  return (
    <header className="">
      <div className="max-w-screen-xl mx-auto flex justify-between grow py-4 px-1">
        <div>
          <img src={LogoHeader} alt="#" />
        </div>
        <nav>
          <ul className="flex justify-between gap-10 text-Neutral-07 font-grotesk text-sm">
            <li className="hover:text-Neutral-04">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-Neutral-04">Shop</li>
            <li className="hover:text-Neutral-04">Product</li>
            <li className="hover:text-Neutral-04">Contacts us</li>
          </ul>
        </nav>

        <div>
          <ul className="flex justify-between gap-4">
            <li>
              <img src={Search} alt="#" />
            </li>
            <li>
              <img src={Profile} alt="#" />
            </li>
            <li>
              <Link to={"/cart"}>
                <img src={Cart} alt="#" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
