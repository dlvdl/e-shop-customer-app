import { FunctionComponent } from "react"
import { Footer, Header, Tabs } from "../components"

interface Props {}

const CartPage: FunctionComponent<Props> = () => {
  return (
    <div className="flex flex-col h-full  grow">
      <Header />
      <main className="flex-1 flex flex-col">
        <div className="max-w-screen-xl mx-auto flex flex-col flex-1 px-1">
          <div className="mb-14">
            <h1 className="text-center font-poppins text-5xl font-medium mt-20 mb-10">
              Cart
            </h1>
            <Tabs />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CartPage
