import { FunctionComponent } from "react"
import { Footer, Header, Tabs } from "../components"

interface Props {}

const CartPage: FunctionComponent<Props> = () => {
  return (
    <div className="flex flex-col h-full  grow">
      <Header />
      <main className="flex-1 flex ">
        <div className="max-w-screen-xl  flex flex-col flex-1  px-1 mx-auto">
          <div className="mb-14 w-full max-w-screen-xl">
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
