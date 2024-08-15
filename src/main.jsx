
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Main from './Main/Main'
import router from './Routes/router'

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}>
      <Main/>
    </RouterProvider>
  </>,
)
