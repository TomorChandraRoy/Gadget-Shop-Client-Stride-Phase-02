import Banner from "../components/home/Banner"
import FeaturedProducts from "../components/home/FeaturedProducts"
import UserReview from "../components/home/UserReview"

const Home = () => {
  return (
    <>
        <Banner/>
        <div className="my-24">
            <h1 className="mb-16 text-2xl font-semibold text-center">Featured Products</h1>
            <FeaturedProducts/>
        </div>
        <div className="my-24">
            <h1 className="mb-16 text-2xl font-semibold text-center">UserReview </h1>
            <UserReview/>
        </div>
    </>

  )
}

export default Home