import CarForm from "./CarForm"

const App = () => {

  let initialData = {
  name: "Lamborghini",
  model: "Miura",
  year: "2023",
  color: "Rosso"
  }

return (
      <>
      <CarForm initialData={initialData}/>
      </>
    );
}

export default App