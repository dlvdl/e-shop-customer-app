import { FunctionComponent, useState } from "react"
import { Tab } from "@headlessui/react"

type TabItem = { index: number; name: string; disabled: boolean; panel: string }

let tabs = [
  {
    index: 0,
    name: "Shoping cart",
    disabled: false,
    panel: "cart",
  },
  {
    index: 1,
    name: "Checkout details",
    disabled: true,
    panel: "detail",
  },
  {
    index: 2,
    name: "Offer complete",
    disabled: true,
    panel: "complete",
  },
]

const allowToProceed = (tabs: TabItem[], currentIndex: number): TabItem[] => {
  return tabs.map((item) => {
    if (item.index === currentIndex) {
      return { ...item, disabled: false }
    }
    return item
  })
}

const Tabs: FunctionComponent = () => {
  const [selectIdx, setSelectIdx] = useState(0)

  return (
    <>
      <Tab.Group selectedIndex={selectIdx} onChange={setSelectIdx}>
        <Tab.List className="flex gap-8">
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
        <Tab.Panels>
          {tabs.map((item) => {
            return <Tab.Panel>{item.panel}</Tab.Panel>
          })}
        </Tab.Panels>
      </Tab.Group>
      <button
        onClick={() => {
          const nv = selectIdx + 1
          if (nv < 3) {
            tabs = allowToProceed(tabs, nv)
            setSelectIdx(nv)
          }
        }}
        className="bg-red-500"
      >
        Next
      </button>
      <button
        onClick={() => {
          const nv = selectIdx - 1
          if (nv > -1) {
            setSelectIdx(nv)
          }
        }}
        className="bg-red-500"
      >
        prev
      </button>
    </>
  )
}

export default Tabs
