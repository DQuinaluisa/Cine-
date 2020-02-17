import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Detalle from '../screens/detalle';
import Compra from '../screens/compra';
import Cartelera from '../screens/cartelera';

const screens = {
    Cartelera: {
        screen: Cartelera,
        
    },
    Detalle : {
        screen: Detalle,
          
    },
    Compra: {
        screen: Compra,
        
    },
    
}
const PeliStack = createStackNavigator(screens);

export default createAppContainer(PeliStack);