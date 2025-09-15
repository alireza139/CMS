import Home from './pages/home/Home'
import Users from './pages/users/Users'
import NewUser from './pages/newUser/NewUser'
import ProductsList from './pages/productsList/ProductsList'
import Product from './pages/singleProduct/Product'
import Error404 from './pages/error404/Error404'


const routes = [
    { path: '/', element: <Home></Home> },
    { path: '/users', element: <Users></Users> },
    { path: '/newUser', element: <NewUser></NewUser> },
    { path: '/products', element: <ProductsList></ProductsList> },
    { path: 'product/:productID', element: <Product></Product> },

    // باید آخرین روت باشه
    { path: '*', element: <Error404 /> },
]
export default routes