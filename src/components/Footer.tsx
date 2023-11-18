import { FunctionComponent } from "react"
import { facebookIcon, instaIcon, whiteLogo, youtubeIcon } from "../assets"

interface Props {}

const Footer: FunctionComponent<Props> = () => {
  return (
    <footer className="bg-Neutral-04 text-Neutral-01">
      <div className="max-w-screen-xl mx-auto h-full px-2">
        <div className="top flex justify-between pb-14 pt-20  border-b border-Neutral-07">
          <div className="flex">
            <img className="pr-8" src={whiteLogo} alt="logo" />
            <div className="font-inter font-normal text-[#E8ECEF] px-8 border-l border-Neutral-07">
              <p>Gift & Decoration Store</p>
            </div>
          </div>
          <nav>
            <ul className="flex font-inter gap-10">
              <li>Home</li>
              <li>Shop</li>
              <li>Product</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </div>
        <div className="bottom flex justify-between items-center pt-4 pb-12">
          <ul className="flex font-poppins items-center gap-7">
            <li>
              <p className="font-normal text-xs">
                Copyright © 2023 3legant. All rights reserved
              </p>
            </li>
            <li>
              <a className="font-semibold" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="font-semibold" href="#">
                Terms of Use
              </a>
            </li>
          </ul>
          <ul className="flex gap-6">
            <li>
              <img src={instaIcon} alt="#" />
            </li>
            <li>
              <img src={facebookIcon} alt="#" />
            </li>
            <li>
              <img src={youtubeIcon} alt="#" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
