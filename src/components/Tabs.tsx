import { FunctionComponent, useState } from "react"
import { Tab } from "@headlessui/react"
import { Cart } from "."
import { P } from "../assets"

// type TabItem = {
//   index: number
//   name: string
//   disabled: boolean
//   Panel: JSX.Element
//   data: { name: string; image: string; quantity: number }
// }

const products = [
  {
    name: "Chair",
    image: P,
    quantity: 20,
  },
  {
    name: "Chair",
    image: P,
    quantity: 20,
  },
]

// const allowToProceed = (tabs: TabItem[], currentIndex: number): TabItem[] => {
//   return tabs.map((item) => {
//     if (item.index === currentIndex) {
//       return { ...item, disabled: false }
//     }
//     return item
//   })
// }

const Tabs: FunctionComponent = () => {
  const [selectIdx, setSelectIdx] = useState(0)

  const tabs = [
    {
      index: 0,
      name: "Shoping cart",
      disabled: false,
      Panel: Cart,
      data: products,
    },
    {
      index: 1,
      name: "Checkout details",
      disabled: true,
      Panel: Cart,
      data: products,
    },
    {
      index: 2,
      name: "Offer complete",
      disabled: true,
      Panel: Cart,
      data: products,
    },
  ]

  return (
    <Tab.Group selectedIndex={selectIdx} onChange={setSelectIdx}>
      <Tab.List className="flex gap-8 justify-center mb-20">
        {tabs.map((item) => {
          return (
            <Tab disabled={item.disabled}>
              <div
                className={`flex  min-w-256px h-26 items-center gap-4  border-Neutral-04 pb-6 pr-12 font-inter font-semibold text-base ${
                  selectIdx === item.index ? "border-b-2" : "opacity-60"
                }`}
              >
                <p className="px-6 py-4 bg-Neutral-04 rounded-full aspect-square text-white  ">
                  {item.index + 1}
                </p>

                <p className="text-Neutral-04">{item.name}</p>
              </div>
            </Tab>
          )
        })}
      </Tab.List>
      <Tab.Panels className={`w-full`}>
        {tabs.map((item) => {
          const { data, Panel } = item
          return (
            <Tab.Panel className={`w-full`}>
              <Panel products={data} />
            </Tab.Panel>
          )
        })}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Tabs
