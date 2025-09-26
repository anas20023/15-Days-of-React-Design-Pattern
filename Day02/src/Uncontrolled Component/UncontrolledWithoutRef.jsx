const UncontrolledWithoutRef = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Form Submitted !", data);
        // e.target.reset()//
    }
    const handleReset = (e) => {
        e.target.reset()
    }
    return (
        <div className="flex flex-col bg-gray-300 w-4/5 h-auto mx-auto m-2 rounded px-6 py-4">
            <p className="text-center">UnControlled Component without useRef</p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
                <div className="flex flex-col">
                    <label htmlFor="name" className="font-medium">Name</label>
                    <input required type="text" name="name" id="name" className="bg-gray-50 rounded px-2 py-1 border" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="font-medium">Email</label>
                    <input required type="email" name="email" id="email" className="bg-gray-50 rounded px-2 py-1 border" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="gender" className="font-medium">Gender</label>
                    <select required name="gender" id="gender" className="bg-gray-50 rounded px-2 py-1 border">
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="age" className="font-medium">Age</label>
                    <input required type="number" name="age" id="age" className="bg-gray-50 rounded px-2 py-1 border" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="font-medium">Message</label>
                    <textarea required name="message" id="message" rows="4" className="bg-gray-50 rounded px-2 py-1 border"></textarea>
                </div>

                <div className="flex flex-row gap-2">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-fit">
                        Submit
                    </button>
                    <button
                        type="reset"
                        onClick={handleReset}
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-fit">
                        Reset
                    </button>
                </div>
            </form>
        </div>

    )
}

export default UncontrolledWithoutRef
