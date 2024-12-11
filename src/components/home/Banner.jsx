
const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://img.freepik.com/free-vector/male-couple-shopping-mall_1308-140061.jpg?t=st=1733911738~exp=1733915338~hmac=ff9be57b5747c112b769eeeab0c460bff07befb4108474a19540d9d91a6f97cf&w=1380)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Wellcome to Gadget Shop</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Shop</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
