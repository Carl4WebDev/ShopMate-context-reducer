import {ProductCard} from "../components"
import { useTitle } from "../hooks/useTitle"

import  Logo  from "../assets/images/logo.png"
import  Image1  from "../assets/images/1001.png"
import  Image2  from "../assets/images/1002.png"
import  Image3  from "../assets/images/1003.png"
import  Image4  from "../assets/images/1004.png"
import  Image5  from "../assets/images/1005.png"
import  Image6  from "../assets/images/1006.png"


export const Home = () => {
  useTitle("Home");

  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": Image1},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": Image2},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": Image3},
    {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": Image4},
    {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": Image5},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": Image6}
  ]


 

  return (
    <main>
      <section className="products">
      {products.map((product) => (

        <ProductCard key={product.id} product={product}/>
        
      ))}
      </section>
    </main>
  )
}
