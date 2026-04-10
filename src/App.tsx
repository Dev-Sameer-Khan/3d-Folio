import GradualBlurMemo from './components/Blur'
import Cursor from './components/Cursor'
import CameraController from './components/MouseMove'
import Noise from './components/Noise'
import Experience from './sections/Experience'

const App = () => {
  return (
    <>
    <Cursor/>
    <Noise/>
    <GradualBlurMemo/>
    <Experience/>
    </>
  )
}

export default App