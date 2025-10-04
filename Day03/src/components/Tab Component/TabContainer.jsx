import { useState } from 'react';
import TabUI from './TabUI';
import ContainerPatterned from '../ContainerPatterned';
const TabContainer = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const tabs = [
        {
            id: 'tab1', label: 'Tab 01', content: (
                <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tab 01 Content</h2>
                    <p className="text-gray-600">This is the content for Tab 01. You can add any JSX elements here, such as text, images, or other components.</p>
                </div>
            )
        },
        {
            id: 'tab2', label: 'Tab 02', content: (
                <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tab 02 Content</h2>
                    <p className="text-gray-600">This is the content for Tab 02. Customize it with your own content or components.</p>
                </div>
            )
        },
        {
            id: 'tab3', label: 'Tab 03', content: (
                <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tab 03 Content</h2>
                    <p className="text-gray-600">This is the content for Tab 03. Add your own dynamic content here.</p>
                </div>
            )
        },
    ];

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <TabUI>
            <TabUI.Header>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`flex-1 py-3 px-4 text-center font-medium text-sm transition-all duration-300 ease-in-out
                ${activeTab === tab.id
                                ? 'border-b-2 border-blue-500 text-blue-600 bg-white'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </TabUI.Header>
            <TabUI.Body>
                {tabs.find((tab) => tab.id === activeTab)?.content}
                <ContainerPatterned title="Wireless Headphones"
                    body="High-quality wireless headphones with noise cancellation and 20-hour battery life."
                    image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lfGVufDB8fDB8fHww"
                    price={99.99}
                    rating={4.5}
                    discount={20}
                    stock={15}
                    category="Electronics"
                    brand="SoundMax"
                    primaryAction={
                        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Add to Cart
                        </button>
                    }
                    secondaryAction={
                        <button className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
                            View Details
                        </button>
                    } />
            </TabUI.Body>
        </TabUI>
    );
};

export default TabContainer;