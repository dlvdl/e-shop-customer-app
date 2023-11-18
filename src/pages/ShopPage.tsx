import { FunctionComponent } from "react"
import { BackgroundBox, Footer, Header, Shop } from "../components"
import { ImagePlaceholder, ImagePlaceholder2, email } from "../assets"

interface Props {}

const ShopPage: FunctionComponent<Props> = () => {
  return (
    <div className="flex flex-col h-full  grow">
      <Header />
      <main className="flex-1 flex flex-col">
        <div className="max-w-screen-xl mx-auto flex flex-col flex-1 px-1">
          <div className="mb-14">
            <BackgroundBox bg={ImagePlaceholder}>
              <h1 className="text-[54px] text-black font-poppins text-center tracking-tight">
                Shop Page
              </h1>
              <p className="text-lg font-inter text-center leading-8">
                Let’s design the place you always imagined.
              </p>
            </BackgroundBox>
          </div>
          <div className="flex grow">
            <Shop />
          </div>
        </div>
        <BackgroundBox bg={ImagePlaceholder2}>
          <h2 className="text-[40px] font-poppins font-medium leading-10 text-Neutral-04 px-9 text-center mb-2">
            Join Our Newsletter
          </h2>
          <p className="text-[18px] font-inter text-Neutral-04 text-center mb-10">
            Sign up for deals, new products and promotions
          </p>

          <form className="relative w-full" method="POST">
            <input
              className="border-b border-l-0 border-r-0 border-t-0 relative z-10 px-10 w-full py-2 font-inter outline-none text-Neutral-04 bg-Custom-White "
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
            />
            <label
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30"
              htmlFor="email"
            >
              <img className="w-6 h-6" src={email} alt="emailImage" />
            </label>
            <button
              className="absolute z-30 right-2 top-1/2 -translate-y-1/2 font-inter text-Neutral-07"
              type="submit"
            >
              Signup
            </button>
          </form>
        </BackgroundBox>
      </main>
      <Footer />
    </div>
  )
}

export default ShopPage
