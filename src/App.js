import Navbar from './components/Navbar';
import { Products } from './components/products';
import contents from './content';


const App = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <h1 className='presentation'> TELEPHONE IPHONE</h1>
            <div className='App'>
               {contents.map(contents => (
                   <Products 
                       key={contents.id}
                       image={contents.image}
                       name={contents.name}
                       price={contents.price}
                       timeLeft={contents.timeLeft}
                   />
               ))}
           </div>
        </div>
    );
};

export default App;