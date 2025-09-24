const SpinLoader = ({ message }) => {
    return (
        <div className="flex flex-col justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
            <p className="my-8 text-xl text-center font-medium"> {message}</p>
        </div>
    )
}

export default SpinLoader
