import React from 'react'

const ServicesCard = () => {
    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-10 mx-auto">
                    <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Portfolio
                    </h1>

                    <p class="mt-4 text-center text-gray-500 dark:text-gray-300">
                        Check our latest projects and services we offer top class services to our clients <br />our company offer best services to our clients and thay are very happy with our services
                    </p>


                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        <div>
                            <img class="object-cover w-full rounded-lg h-96 "
                                src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                                alt=""/>
                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Best website
                                    collections</h2>
                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
                        </div>

                        <div>
                            <img class="object-cover w-full rounded-lg h-96 "
                                src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                alt=""/>
                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Block of Ui kit
                                    collections</h2>
                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Ui kit</p>
                        </div>
                        <div>
                            <img class="object-cover w-full rounded-lg h-96 "
                                src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                alt=""/>
                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Block of Ui kit
                                    collections</h2>
                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Ui kit</p>
                        </div>

                        <div>
                            <img class="object-cover w-full rounded-lg h-96 "
                                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt=""/>
                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Ton’s of mobile mockup
                                </h2>
                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Mockups</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesCard
