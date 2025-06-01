
import Guitar from "./components/guitar";
import Header  from "./components/header";

import { useCart } from "./hooks/useCart";


function App() {

  const { data,
          cart,
          addToCart,
          removeFromCart,
          incrementando,
          decrementando,
          cleanCart,
          isEmpty,
          cartTotal
         } = useCart(); // Custom hook para manejar el carrito, si es necesario
  

  
  return (
    <>
        <Header 
            cart={cart}
            removeFromCart={removeFromCart}
            incrementando={incrementando}
            decrementando={decrementando}
            cleanCart={cleanCart}
            isEmpty={isEmpty}
            cartTotal={cartTotal}
        />
               
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
                {data.map(guitar => (
                    <Guitar 
                        key={guitar.id}
                        guitar={guitar}                                                        
                        addToCart={addToCart}                                   
                    />
                ))}              
            </div>
        </main>


        <footer className="bg-dark mt-5 py-5">
            <div className="container-xl">
                <p className="text-white text-center fs-4 mt-4 m-md-0">Derechos Reservados - Full Stack Dev JC PONTE</p>
            </div>
        </footer>

    </>
  )
}

export default App
