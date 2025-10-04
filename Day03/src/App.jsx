import Container from "./components/ContainerMessy"
import ContainerPatterned from "./components/ContainerPatterned"
import TabContainer from "./components/Tab Component/TabContainer"

const App = () => {
  return (
    <div>
      {/* <Container /> */}
      {/* <ContainerPatterned title="Wireless Headphones"
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
      } /> */}
      <TabContainer />
    </div>
  )
}

export default App
