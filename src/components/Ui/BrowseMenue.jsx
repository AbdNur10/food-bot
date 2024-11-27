import React,{useEffect,useState} from 'react'; 
import Image001 from '../../assets/images/Bangla khichuri.jpg';
import Image002 from '../../assets/images/Bangladeshi Fish Dish.jpg';
import Image003 from '../../assets/images/Beef with andana kabab beef tikka and mandi biryani rice tomato and onion served in dish.jpg'; 
import Image004 from '../../assets/images/Bengali thali.jpg'; 
import Image005 from '../../assets/images/Buyal Fish Curry.jpg'; 
import Image006 from '../../assets/images/Chicken Rezala.jpg'; 
import Image007 from '../../assets/images/Chingri Malai Curry.jpg'; 
import Image008 from '../../assets/images/Chirer_Pulao.jpg'; 
import Image009 from '../../assets/images/Cholar dal and patol aloo sabzi served with fried Luchi or poori, bengali food.jpg'; 
import Image010 from '../../assets/images/Delicious chicken biryani.jpg'; 
import Image011 from '../../assets/images/Delicious mutton biryani.jpg'; 
import Image012 from '../../assets/images/Delicious spicy mutton biryani.jpg'; 
import Image013 from '../../assets/images/Doi.jpg'; 
import Image014 from '../../assets/images/Indian Fish dolma.jpg'; 
import Image015 from '../../assets/images/Khir khasa.jpg'; 
import Image016 from '../../assets/images/Luchi.jpg'; 
import Image017 from '../../assets/images/Malvani surmai fish Thali..jpg'; 
import Image018 from '../../assets/images/Mutton kasha and rutis(JPG).jpg'; 
import Image019 from '../../assets/images/pilaf Morog Polao made from chicken and spicy basmati rice with boiled eggs and fried onions.jpg';
import Image020 from '../../assets/images/Rice & small fish fry.jpg';
import Image021 from '../../assets/images/Rich & Spicy Fish Curry.jpg';
import Image022 from '../../assets/images/Roti  Curry .jpg';
import Image023 from '../../assets/images/Special sondes.jpg';
import Image024 from '../../assets/images/spicy and hot Bengali fish curry.jpg';
import Image025 from '../../assets/images/Thai-inspired overhead view of a dish with chicken, cashews, rice, and herbs.jpg';
import Image026 from '../../assets/images/Vegetable Karahi korma masala.jpg'
const breakfast = [
    {
        id: "01",
        name: "Khichuri",
        price: 99,
        desc: "Bengali dish of spiced rice and lentils (khichuri) paired with golden-fried eggplant slices (begun bhaja).",
        rating: 4.2,
        image: Image001,
    },
    {
        id: "02",
        name: "Bengali Luchi & Cholar Dal",
        price: 149,
        desc: "A classic Bengali meal of mildly sweet cholar dal, spiced patol aloo sabzi, and fluffy fried luchi or poori.",
        rating: 4.4,
        image: Image009,
    },
    {
        id: "03",
        name: "Luchi with Vegetable Curry",
        price: 99,
        desc: "A delightful Bengali breakfast of soft, golden luchis paired with a flavorful and aromatic vegetable curry.",
        rating: 3.9,
        image: Image016,
    },
    {
        id: "04",
        name: "Spiced Mutton Kasha With Nan Rutis",
        price: 299,
        desc: "A hearty Bengali dish of slow-cooked, spiced mutton kasha served with soft, warm rutis.",
        rating: 4.6,
        image: Image018,
    },
    {
        id: "05",
        name: "Rice & Fried Small Fish",
        price: 199,
        desc: "A simple yet flavorful Bengali meal of steamed rice paired with crispy fried small fish.",
        rating: 4.5,
        image: Image020,
    },
    {
        id: "06",
        name: "Vegetable Karahi Korma Masala",
        price: 199,
        desc: "A rich and aromatic dish of mixed vegetables cooked in a creamy karahi-style korma masala.",
        rating: 4.0,
        image: Image026,
    },
];

const launch = [
    {
        id: "07",
        name: "Bangladeshi Fish Dish",
        price: 499,
        desc: "A traditional Bangladeshi fish dish featuring tender fish cooked in a fragrant mustard or spiced curry sauce.",
        rating: 4.7,
        image: Image002,
    },
    {
        id: "08",
        name: "Biryani With Mutton Tikka",
        price: 699,
        desc: "A lavish platter of succulent mutton tikka, flavorful andana kababs, aromatic mandi biryani rice, and fresh tomato and onion slices, all served together.",
        rating: 4.4,
        image: Image003,
    },
    {
        id: "09",
        name: "Traditional Bengali Thali",
        price: 999,
        desc: "A traditional Bengali thali featuring steamed rice, shukto, dal, vegetable curry, fish or mutton curry, chutney, papad, and a sweet like roshogolla or mishti doi.",
        rating: 5.0,
        image: Image004,
    },
    {
        id: "10",
        name: "Boal Fish Curry",
        price: 799,
        desc: "A hearty Bengali dish of tender boal fish cooked in a rich, spiced curry with mustard or tomato-based gravy.",
        rating: 4.7,
        image: Image005,
    },
    {
        id: "11",
        name: "Chicken Rezala",
        price: 499,
        desc: "A flavorful Bengali chicken dish featuring tender chicken pieces cooked in a creamy, aromatic white gravy made with yogurt, cashews, and spices.",
        rating: 4.3,
        image: Image006,
    },
    {
        id: "12",
        name: "Chingri Malai Curry",
        price: 899,
        desc: "A classic Bengali dish of succulent prawns cooked in a rich, creamy coconut milk gravy, flavored with aromatic spices.",
        rating: 4.6,
        image: Image007,
    },
];

const dinner = [
    {
        id: "20",
        name: "Malvani Surmai Fish Thali",
        price: 399,
        desc: "A Malvani thali with spicy surmai fish curry, rice, chapati, and fried fish.",
        rating: 4.4,
        image: Image017,
    },
    {
        id: "21",
        name: "Morog Polao",
        price: 299,
        desc: "A rich Bengali dish of fragrant rice cooked with succulent chicken, yogurt, and aromatic spices.",
        rating: 4.3,
        image: Image019,
    },
    {
        id: "22",
        name: "Hyderabadi Biryani",
        price: 499,
        desc: "A fragrant rice dish layered with tender chicken and bold spices, served on a traditional platter.",
        rating: 4.6,
        image: Image010,
    },
    {
        id: "23",
        name: "Hot Spicy Fish Curry",
        price: 199,
        desc: "A fiery and flavorful fish curry cooked with bold spices, chilies, and a tangy gravy.",
        rating: 4.3,
        image: Image024,
    },
];

const dessert = [
    {
        id: "32",
        name: "Doi",
        price: 49,
        desc: "Doi is a traditional Bengali yogurt, often served as a side dish or dessert.",
        rating: 5.0,
        image: Image013,
    },
    {
        id: "33",
        name: "Khir Khasa",
        price: 159,
        desc: "Khir Khasa is a rich and creamy Bengali dessert made with condensed milk, rice, and sugar, flavored with cardamom, nuts, and sometimes saffron, creating a thick, luxurious pudding.",
        rating: 5.0,
        image: Image015,
    },
    {
        id: "34",
        name: "Rasgulla",
        price: 159,
        desc: "Rasgulla (Roshogolla) is a soft, spongy Bengali sweet made from chhena soaked in sugar syrup.",
        rating: 5.0,
        image: Image014,
    },
    {
        id: "35",
        name: "Special Sondes",
        price: 159,
        desc: "Special Sondes is a Bengali sweet made of chhena, sugar, and cardamom, often flavored with saffron or rose water.",
        rating: 5.0,
        image: Image023,
    },
];



const BrowseMenu = () => { 
    const [currentCategory, setCurrentCategory] = useState('All');
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState(''); 


    const allMenuItems = [...breakfast, ...launch, ...dinner, ...dessert];

    // Get filtered items based on category and search
    const getFilteredItems = () => {
      let items = currentCategory === 'All' ? allMenuItems : {
        Breakfast: breakfast,
        Lunch: launch,
        Dinner: dinner,
        Dessert: dessert,
      }[currentCategory];
  
      return items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    };

    const handleAddToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
      };
  return (  
    <div>
      {/* Category Buttons */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        {['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'].map((category) => (
          <button
            key={category}
            style={{
              padding: '20px 20px',
              border: 'none',
              backgroundColor: currentCategory === category ? '#ff6347' : '#007BFF',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '5px',
              transition: 'background-color 0.3s',
            }}
            onClick={() => setCurrentCategory(category)}
          >
            {category}
          </button>
        ))}
        <input
          type="text"
          placeholder="Search"
          style={{
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '300px',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Menu Items */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        {getFilteredItems().map((item) => (
          <div
            key={item.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              maxWidth: '300px',
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <p>
              <strong>Price:</strong> ${item.price}
            </p>
            <p>
              <strong>Rating:</strong> {item.rating}
            </p>
            <button
              style={{
                marginTop: '10px',
                padding: '10px 15px',
                border: 'none',
                backgroundColor: '#ec441f',
                color: 'white',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div
        style={{
          marginTop: '20px',
          padding: '30px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <h3>Cart Summary</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <p>
            <strong>Total:</strong> ${cart.reduce((total, item) => total + item.price, 0)}
          </p>
        )}
      </div>
    </div>
  );  
}  

export default BrowseMenu;