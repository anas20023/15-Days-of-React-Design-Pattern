const TabUI = ({ children }) => {
    return (
        <div className="bg-gray-50 mx-auto max-w-6xl w-full rounded-lg shadow-lg p-4">
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    )
}
const TabHeader = ({ children }) => {
    return <div className="flex flex-row border-b border-gray-200">
        {children}
    </div>
}
const TabBody = ({ children }) => {
    return <div className="mt-4">
        {children}
    </div>
}
TabUI.Header = TabHeader;
TabUI.Body = TabBody;
export default TabUI
