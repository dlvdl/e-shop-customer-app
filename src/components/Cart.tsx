import { FunctionComponent, useState } from "react"
import { RadioGroup } from "@headlessui/react"
import { closeIcon } from "../assets"

interface Props {
  products: Product[]
}

interface Product {
  name: string
  image: string
  quantity: number
}

interface CartItemProp {
  product: Product
  quantity: number
}

const Cart: FunctionComponent<Props> = ({ products }) => {
  return (
    <div className="w-full flex gap-16 font-inter">
      <div className="w-3/5 ">
        <table className="w-full">
          <tr className="flex">
            <th className="w-2/5 flex">Product</th>
            <th className="w-1/5">Quantity</th>
            <th className="w-1/5">Price</th>
            <th className="w-1/5">Subtotal</th>
          </tr>

          {products.map((item) => {
            return <CartItem product={item} quantity={2} />
          })}
        </table>
      </div>
      <div className="flex  flex-1">
        <form
          className="w-full p-6 flex-col border border-Neutral-07`"
          method="POST"
        >
          <CustomRadioGroup />
          <div className="flex justify-between mt-3 font-inter">
            <p>Subtotal</p>
            <p className="font-semibold">$1234.00</p>
          </div>
          <div className="flex justify-between mt-3 mb-8 font-inter">
            <p className="font-semibold text-lg">Total</p>
            <p className="font-semibold text-lg">$1345.00</p>
          </div>

          <button
            className="rounded-lg font-medium text-base py-2  w-full text-Black-200  bg-Black-900"
            type="submit"
          >
            Checkout
          </button>
        </form>
      </div>
    </div>
  )
}

const CartItem: FunctionComponent<CartItemProp> = ({ product }) => {
  return (
    <tr className="flex font-inter">
      <td className="flex items-center pr-14  w-2/5">
        <img className="w-20 h-24" src={product.image} alt="productImage" />
        <div>
          <h4 className="text-sm font-semibold">{product.name}</h4>
          <button className="text-Neutral-07 flex items-end">
            <img src={closeIcon} alt="#" />
            <span>Remove</span>
          </button>
        </div>
      </td>
      <td className="flex justify-center items-center w-1/5">
        <Input />
      </td>
      <td className="flex justify-center items-center  text-center w-1/5 text-lg">
        $5.00
      </td>
      <td className="flex justify-center items-center w-1/5 text-lg font-semibold">
        $20.00
      </td>
    </tr>
  )
}

const plans = [
  { id: 1, name: "Free shipping", price: "$0.00" },
  { id: 2, name: "Express shipping", price: "+$15.00" },
  { id: 3, name: "Enterprise", price: "%21.0" },
]

const CustomRadioGroup = () => {
  const [plan, setPlan] = useState(plans[0])

  return (
    <RadioGroup value={plan} onChange={setPlan} className={"w-full"}>
      <RadioGroup.Label className={`font-poppins text-lg font-medium `}>
        <p className="mb-4">Cart summary</p>
      </RadioGroup.Label>
      <div className="flex flex-col gap-3">
        {plans.map(({ id, name, price }) => {
          return (
            <RadioGroup.Option value={price} key={id}>
              {({ checked }) => (
                <div
                  className={`${
                    checked && "bg-blue-200"
                  } flex justify-between items-center px-4 py-3 border  border-Neutral-07 rounded cursor-pointer`}
                >
                  <div className="flex gap-4">
                    <div
                      className={`w-5 h-5 border aspect-square rounded-full ${
                        checked ? "border-Black-900" : "border-Neutral-07"
                      }  flex justify-center items-center`}
                    >
                      {checked && (
                        <div className="w-2 h-2 aspect-square rounded-full bg-Black-900"></div>
                      )}
                    </div>
                    <p className="font-inter">{name}</p>
                  </div>
                  <p>{price}</p>
                </div>
              )}
            </RadioGroup.Option>
          )
        })}
      </div>
    </RadioGroup>
  )
}

const Input = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="flex px-2 py-2 border border-Neutral-07 rounded">
      <button
        className=" w-5 text-base  flex items-center justify-center px-2"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1)
          }
        }}
      >
        -
      </button>
      <input
        className="max-w-[50px] text-center border-none outline-none font-semibold"
        value={count}
        onChange={(e) => setCount(+e.target.value)}
        type="number"
      />
      <button
        className="w-5 text-base  flex items-center justify-center px-2"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +
      </button>
    </div>
  )
}

export default Cart
