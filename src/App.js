import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbarmenu from './components/navbar.js';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';



 
//const style = {
  //backgroundColor:'red',
  //color: 'blue',
  //fontSize:'301',
  //textAlign:'center'

//}


function App() {

  return(  
    <div>
<Navbarmenu />
<ItemListContainer />

</div>


  );
}

function World(){
  return <div style={{ }}>
  Hello World!
  
</div>
  
}



export default App;