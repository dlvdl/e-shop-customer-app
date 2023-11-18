import { Listbox } from "@headlessui/react"
import { FunctionComponent, useState } from "react"

interface Props {
  title: string
  options: Array<{ id: number; name: string; checked: boolean }>
}

const CustomCheckBox: FunctionComponent<Props> = ({ title, options }) => {
  const [selectedOptions, setSelectedOptions] = useState(options[0])
  const [selectedBoxes, setSelectedBoxes] = useState(options)

  const onCheckHandler = (i: number) => {
    return () => {
      setSelectedBoxes(updateSelectedBoxes(selectedBoxes, i))
    }
  }

  const updateSelectedBoxes = (
    items: Array<{ id: number; name: string; checked: boolean }>,
    i: number
  ) => {
    return items.map((item, idx) => {
      if (idx === i) {
        item = { ...item, checked: !item.checked }
      }
      return item
    })
  }

  return (
    <div>
      <h3 className="uppercase text-base font-semibold font-inter mb-3">
        {title}
      </h3>
      <Listbox value={selectedOptions} onChange={setSelectedOptions}>
        {/* <Listbox.Button>{selectedOptions.name}</Listbox.Button> */}
        <Listbox.Options className={"flex flex-col gap-3"} static>
          {selectedBoxes.map((option, i) => (
            <Listbox.Option
              key={option.id}
              value={option}
              className=" text-sm text-Black-500 font-semibold font-inter  flex justify-between"
            >
              <label
                className="text-sm text-Black-500 font-inter "
                htmlFor="price"
              >
                {option.name}
              </label>
              <input
                type="checkbox"
                name="price"
                value={option.name}
                onChange={onCheckHandler(i)}
                checked={option.checked}
              />
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}

export default CustomCheckBox
