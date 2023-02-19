import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from '../components/Home'
import QuizItem from "../components/QuizItem";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
        },
            
        children:[
            {path:'/',
             element:<Home></Home>
            },
            {
                path: '/home/:id',
                loader: async ({params})=>{
                    console.log(params)
                        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                    }, 
                element: <QuizItem></QuizItem>
            }
        ]
        
        
    }
])

export default router;