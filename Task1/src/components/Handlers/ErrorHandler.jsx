const ErrorHandler = ({ message }) => {
    return (
        <>
            <div className="bg-red-500 text-center m-4 px-8 py-4 w-2xl rounded-xl">
                <p className="text-white text-xl">{message}</p>
            </div>
            <button className="bg-green-700 text-white my-2 px-4 py-2 font-semibold rounded-full cursor-pointer">Try Again</button>
            
        </>)
}

export default ErrorHandler
