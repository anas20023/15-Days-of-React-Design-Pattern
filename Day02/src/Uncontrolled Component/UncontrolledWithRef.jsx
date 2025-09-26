import { useRef } from "react"

const UncontrolledWithRef = () => {
    const nameref = useRef();
    const emailref = useRef();
    const genderref = useRef();
    const ageref = useRef();
    const msgref = useRef();

    // const handleChange = () => {
    //    // const { name, value } = e.target;
    //     //  console.log(e);
    //    // setFormData({ ...formdata, [name]: value })

    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nameref.current.value) {
            nameref.current.focus();
            return
        }
        if (!emailref.current.value) {
            emailref.current.focus();
            return
        }
        if (!genderref.current.value) {
            genderref.current.focus();
            return
        }
        if (!ageref.current.value) {
            ageref.current.focus();
            return
        }
        if (!msgref.current.value) {
            msgref.current.focus();
            return
        }
        console.log("Form Submitted !", {name:nameref.current.value, email:emailref.current.value , gender:genderref.current.value,age:ageref.current.value,message:msgref.current.value});
    }
    const handleReset = () => {
        //setFormData({ name: "", email: "", gender: "", age: "", message: "" })
    }
    return (
        <div className="flex flex-col bg-gray-300 w-4/5 h-auto mx-auto m-2 rounded px-6 py-4">
            <p className="text-center">UnControlled Component with useRef</p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
                <div className="flex flex-col">
                    <label htmlFor="name" className="font-medium">Name</label>
                    <input ref={nameref}  value={nameref.current} type="text" name="name" id="name" className="bg-gray-50 rounded px-2 py-1 border" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="font-medium">Email</label>
                    <input ref={emailref}  value={emailref.current} type="email" name="email" id="email" className="bg-gray-50 rounded px-2 py-1 border" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="gender" className="font-medium">Gender</label>
                    <select ref={genderref}  value={genderref.current} name="gender" id="gender" className="bg-gray-50 rounded px-2 py-1 border">
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="age" className="font-medium">Age</label>
                    <input ref={ageref}  value={ageref.current} type="number" name="age" id="age" className="bg-gray-50 rounded px-2 py-1 border" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="font-medium">Message</label>
                    <textarea ref={msgref}  value={msgref.current} name="message" id="message" rows="4" className="bg-gray-50 rounded px-2 py-1 border"></textarea>
                </div>

                <div className="flex flex-row gap-2">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-fit">
                        Submit
                    </button>
                    <button
                        onClick={handleReset}
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-fit">
                        Reset
                    </button>
                </div>
            </form>
        </div>

    )
}

export default UncontrolledWithRef
