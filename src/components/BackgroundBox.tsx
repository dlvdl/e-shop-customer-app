import {
  FunctionComponent,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from "react"
import {} from "../assets"

type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined

interface Props {
  bg: string
  children: ReactNode
}

const BackgroundBox: FunctionComponent<Props> = ({ bg, children }) => {
  return (
    <div
      style={{
        backgroundImage: `url('${bg}')`,
      }}
      className={`w-full min-h-[392px] flex justify-center items-center bg-no-repeat bg-cover grow`}
    >
      <div>{children}</div>
    </div>
  )
}

export default BackgroundBox
