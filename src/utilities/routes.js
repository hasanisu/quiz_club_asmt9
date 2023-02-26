import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from '../components/Home'
import QuizItem from "../components/QuizItem";
import Statistic from "../components/Statistic";
import Blogs from "../components/Blogs";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
        },
            
        children:[
            {path:'/',
             element:<Home></Home>,
             
            },
            {
                path: '/home/:id',
                loader: async ({params})=>{
                        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                    }, 
                element: <QuizItem></QuizItem>
            },
            {
                path: '/statistic',
                element: <Statistic></Statistic>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
         
    },
    
])

export default router;