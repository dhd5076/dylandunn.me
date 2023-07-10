export default function Register() {
    return (
    <>
    <div className="mt-16 flex items-center py-32">
        <div className="bg-white/75 sm:w-96 mx-auto my-auto">
            <form className="p-4">
                <h1 className="pb-8 text-2xl font-semibold"> Register </h1>
                <input className="block w-full mb-2 rounded py-2 px-4 inner-shadow bg-black/25 shadow-inner text-white font-semibold placeholder-gray-100" placeholder="Email"/>
                <input className="block w-full rounded mb-2 py-2 px-4 inner-shadow bg-black/25 shadow-inner text-white font-semibold placeholder-gray-100" placeholder="Password"/>
                <button className="ml-auto block bg-blue-500 px-4 py-2 rounded font-semibold text-white mt-2"> Login</button>
            </form>
        </div>
    </div>
    </>
    )
}