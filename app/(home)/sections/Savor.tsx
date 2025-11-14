
const data = [
    {
        image: "/shrimp.jpg",
    },
    {
        image: "/shrimp.jpg",
    },
    {
        image: "/shrimp.jpg",
    },
    {
        image: "/shrimp.jpg",
    },
    {
        image: "/shrimp.jpg",
    },
    {
        image: "/shrimp.jpg",
    },
];

function Savor() {
    return (
        <div className="w-full">
            <div className="wrapper">
                <div className="max-w-2xl">
                    <h2 className="heading2">
                        Savor The Flavors
                    </h2>
                    <p className="normal my-4">
                        Let your appetite be inspired by our stunning food photography. From sizzling
                        entrées to savory sides, each image tells a delicious story worth savoring.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {data.map((e, i) => (
                        <div className="" key={i}>
                            <img
                                src={e.image}
                                alt={e.image}
                                className="w-full rounded-2xl hover:scale-105 transition-all duration-200"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Savor