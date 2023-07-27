import ReactDOM from 'react-dom/client'

import { Button } from './components/Button'
const text = 'clickMe'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div>
    <Button text={text + 1}/>
    <Button text={text + 2}/>
    <Button text={text + 3}/>
  </div>
)