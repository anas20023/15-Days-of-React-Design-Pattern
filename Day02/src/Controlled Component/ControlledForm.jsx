import { useState, useRef } from "react"

const ControlledForm = () => {
    const [formdata, setFormData] = useState({ name: "", email: "", gender: "", age: "", message: "" })
    const nameref = useRef();
    const emailref = useRef();
    const genderref = useRef();
    const ageref = useRef();
    const msgref = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);
        setFormData({ ...formdata, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formdata.name) {
            nameref.current.focus();
            return
        }
        if (!formdata.email) {
            emailref.current.focus();
            return
        }
        if (!formdata.gender) {
            genderref.current.focus();
            return
        }
        if (!formdata.age) {
            ageref.current.focus();
            return
        }
        if (!formdata.message) {
            msgref.current.focus();
            return
        }
        console.log("Form Submitted !", formdata);
    }
    const handleReset = () => {
        setFormData({ name: "", email: "", gender: "", age: "", message: "" })
    }
    return (
        <div className="flex bg-gray-300 w-4/5 h-auto mx-auto m-2 rounded px-6 py-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
                <div className="flex flex-col">
                    <label htmlFor="name" className="font-medium">Name</label>
                    <input ref={nameref} onChange={handleChange} value={formdata.name} type="text" name="name" id="name" className="bg-gray-50 rounded px-2 py-1 border" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="font-medium">Email</label>
                    <input ref={emailref} onChange={handleChange} value={formdata.email} type="email" name="email" id="email" className="bg-gray-50 rounded px-2 py-1 border" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="gender" className="font-medium">Gender</label>
                    <select ref={genderref} onChange={handleChange} value={formdata.gender} name="gender" id="gender" className="bg-gray-50 rounded px-2 py-1 border">
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="age" className="font-medium">Age</label>
                    <input ref={ageref} onChange={handleChange} value={formdata.age} type="number" name="age" id="age" className="bg-gray-50 rounded px-2 py-1 border" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="font-medium">Message</label>
                    <textarea ref={msgref} onChange={handleChange} value={formdata.message} name="message" id="message" rows="4" className="bg-gray-50 rounded px-2 py-1 border"></textarea>
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

export default ControlledForm
