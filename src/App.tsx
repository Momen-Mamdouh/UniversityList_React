
import './App.css'
// import '@fortawesome/fontawesome-free/css/all.css';

import Home from './Pages/Home/Home'
import Layout from './Layout/Layout'

import { createHashRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UniversityList from './Pages/UniversityList/universityList';
import Blogs from './Pages/Blogs/blogs';
import Articles from './Pages/Atricles/articles';
import About from './Pages/About/about';
import Books from './Pages/Books/books';
import NotFound from './Pages/NotFound/notFound';

const myRouters = createHashRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '',
        element: <Home />
      },

      {
        path: '/home',
        element: <Home />
      },

      {
        path: '/uniList',
        element: <UniversityList />
      },


      {
        path: '/blogs/:id',  
        element: <Blogs />
      },

      {
        path: '/articles/:id',
        element: <Articles />
      },

      {
        path: '/about',
        element: <About />
      },

      {
        path: '/books',
        element: <Books />
      },

      {
        path:'*',
        element:<NotFound />
      },

    ]
  },

  {
    path:'*',
    element:<NotFound />
  }
]);

const myClient = new QueryClient({
});


function App() {


  return (
    <>
    <QueryClientProvider client={myClient}>
        <RouterProvider router={myRouters} />
      </QueryClientProvider>
    </>
  )
}

export default App
