import { Listbox } from "@headlessui/react"
import { FunctionComponent, useState } from "react"

interface Props {
  title: string
  options: Array<{
    id: number
    name: string
    unavailable: boolean
  }>
  _static: boolean
}

const CustomListbox: FunctionComponent<Props> = ({
  title,
  options,
  _static,
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0])

  return (
    <div>
      {_static && (
        <h3 className="uppercase text-base font-semibold font-inter">
          {title}
        </h3>
      )}
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        {!_static && <Listbox.Button>{title}</Listbox.Button>}
        <Listbox.Options className={"flex flex-col"} static={_static}>
          {options.map((option) => (
            <Listbox.Option
              key={option.id}
              value={option}
              disabled={option.unavailable}
              className=" text-sm text-Black-500 font-inter"
            >
              <p className="cursor-pointer inline-block font-semibold font-inter  hover:underline hover:text-Black-900">
                {option.name}
              </p>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}

export default CustomListbox
