import { FunctionComponent } from "react"
import { CustomCheckBox, CustomListBox } from "."
import { FilterIcon } from "../assets"
import { Grid_1, Grid_2, Grid_3, Grid_4, P } from "../assets"

import ProductCard from "./ProductCard"

interface Props {}

const options = [
  { id: 1, name: "All Rooms", unavailable: false, static: false },
  { id: 2, name: "Living Room", unavailable: false, static: false },
  { id: 3, name: "Bedroom", unavailable: false, static: false },
  { id: 4, name: "Kitchen", unavailable: true, static: false },
  { id: 5, name: "Bathroom", unavailable: false, static: false },
  { id: 6, name: "Dinning", unavailable: true, static: false },
  { id: 7, name: "Outdoor", unavailable: false, static: false },
]

const prices = [
  { id: 1, name: "$0.00 - 99.99", checked: false },
  { id: 2, name: "$100.00 - 199.99", checked: false },
  { id: 3, name: "$200.00 - 299.99", checked: false },
  { id: 4, name: "$300.00 - 399.99", checked: true },
  { id: 5, name: "$400.00+", checked: false },
]

const sortCategory = [
  { id: 1, name: "price", unavailable: false },
  { id: 2, name: "date", unavailable: false },
]

const Shop: FunctionComponent<Props> = () => {
  return (
    <div className="grid grid-cols-6 h-full grid-rows-[1fr,min-content] gap-6">
      <div>
        <div className="flex items-center gap-2 mb-10">
          <img className="w-6 h-6" src={FilterIcon} alt="#" />
          <p className="font-semibold text-lg font-inter">Filter</p>
        </div>
        <div className="mb-9">
          <CustomListBox title="Categories" options={options} _static={true} />
        </div>
        <div>
          <CustomCheckBox title="Price" options={prices} />
        </div>
      </div>
      <div className="col-start-2 col-end-7">
        <div className="flex justify-between mb-10">
          <p className="font-semibold text-lg font-inter">Living Room</p>
          <div className="flex items-center gap-8">
            <CustomListBox
              options={sortCategory}
              _static={false}
              title="Sort by"
            />
            <div className="grid grid-cols-4">
              <button className="p-2 border border-Neutral-03 hover:bg-Neutral-03">
                <img src={Grid_1} alt="" />
              </button>
              <button className="p-2 border border-Neutral-03 hover:bg-Neutral-03">
                <img src={Grid_2} alt="" />
              </button>
              <button className="p-2 border border-Neutral-03 hover:bg-Neutral-03">
                <img src={Grid_3} alt="" />
              </button>
              <button className="p-2 border border-Neutral-03 hover:bg-Neutral-03">
                <img src={Grid_4} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 auto-cols-fr  gap-4 w-full h-full relative">
          <ProductCard image={P} name="Sofa" rating={4} />
          <ProductCard image={P} name="Sofa" rating={5} />
          <ProductCard image={P} name="Sofa" rating={3} />
          <ProductCard image={P} name="Sofa" rating={4} />
          <ProductCard image={P} name="Sofa" rating={5} />
          <ProductCard image={P} name="Sofa" rating={3} />
          <ProductCard image={P} name="Sofa" rating={4} />
          <ProductCard image={P} name="Sofa" rating={5} />
          <ProductCard image={P} name="Sofa" rating={3} />
          <div className="col-span-3 flex justify-center mt-20 mb-24">
            <button className="border rounded-[80px] border-Neutral-04 max-h-10 flex justify-center items-center">
              <p className="px-10 leading-7 py-2 font-medium font-inter text-base text-Neutral-04">
                Show more
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
