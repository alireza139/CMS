import Home from './pages/home/Home'
import Users from './pages/users/Users'
import NewUser from './pages/newUser/NewUser'
import Products from './pages/products/Products'
import Product from './pages/singleProduct/Product'

const routes = [
    { path: '/', element: <Home></Home> },
    { path: '/users', element: <Users></Users> },
    { path: '/newUser', element: <NewUser></NewUser> },
    { path: '/products', element: <Products></Products> },
    { path: '/product/:productID', element: <Product></Product> },
    
]
export default routes