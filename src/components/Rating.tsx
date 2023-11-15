import { Star_f, Star_h } from "../assets"
import { FunctionComponent } from "react"

interface Props {
  count: number
  rate: number
}

const Rating: FunctionComponent<Props> = ({ count, rate }) => {
  if (rate > count) {
    throw new Error("Rate of the product cannot be greater than " + count)
  }

  return (
    <div className="flex">
      {Array.from({ length: rate }).map(() => {
        return <img className="w-4 h-4" src={Star_f} alt="filled_star" />
      })}

      {Array.from({ length: count - rate }).map(() => {
        return <img className="w-4 h-4" src={Star_h} alt="hollow_star" />
      })}
    </div>
  )
}

export default Rating
