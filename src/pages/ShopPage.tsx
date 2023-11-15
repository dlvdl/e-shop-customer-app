import { FunctionComponent } from "react"
import { BackgroundBox, Header, Shop } from "../components"

interface Props {}

const ShopPage: FunctionComponent<Props> = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Header />
      <BackgroundBox />
      <Shop />
    </div>
  )
}

export default ShopPage
