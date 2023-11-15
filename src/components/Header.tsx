import { FunctionComponent } from "react"
import { LogoHeader, Cart, Profile, Search } from "../assets"

interface Props {}

const Header: FunctionComponent<Props> = () => {
  return (
    <header className="flex justify-between">
      <div>
        <img src={LogoHeader} alt="#" />
      </div>
      <nav>
        <ul className="flex justify-between gap-10 text-Neutral-07 font-grotesk text-sm">
          <li className="hover:text-Neutral-04">Home</li>
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
            <img src={Cart} alt="#" />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
