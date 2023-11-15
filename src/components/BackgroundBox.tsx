import { FunctionComponent } from "react"
import {} from "../assets"

interface Props {}

const BackgroundBox: FunctionComponent<Props> = () => {
  return (
    <div className="bg-header-texture w-full h-[392px] flex justify-center items-center bg-no-repeat bg-cover">
      <div>
        <h1 className="text-[54px] text-black font-poppins text-center tracking-tight">
          Shop Page
        </h1>
        <p className="text-lg font-inter text-center leading-8">
          Let’s design the place you always imagined.
        </p>
      </div>
    </div>
  )
}

export default BackgroundBox
