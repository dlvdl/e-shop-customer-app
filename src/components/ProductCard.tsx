import { FunctionComponent } from "react"
import Rating from "./Rating"
import { Heart } from "../assets"

interface Props {
  image: string
  rating: number
  name: string
}

const ProductCard: FunctionComponent<Props> = ({ image, name, rating }) => {
  return (
    <div className="w-full">
      <div className="relative group">
        <div className="z-10 brightness-95">
          <img src={image} alt="product_image" />
        </div>
        <button className="group-hover:opacity-100 transition-opacity opacity-0 absolute top-2 right-2 p-2 bg-white aspect-square rounded-full flex items-center justify-center">
          <img className="w-5 h-5 " src={Heart} alt="heart" />
        </button>
        <button className="group-hover:opacity-100 transition-opacity opacity-0 rounded-lg font-medium text-base py-2 absolute bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-20 text-Black-200 w-5/6 bg-Black-900">
          Add to cart
        </button>
      </div>
      <Rating count={5} rate={rating} />

      <p className="font-semibold text-Black-900 text-base font-inter">
        {name}
      </p>
      <p className="font-semibold text-Black-900 text-sm font-inter">$199.00</p>
    </div>
  )
}

export default ProductCard
