import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

// @ts-ignore
const Preloader = () => (
  <div className={'preloader'}>
    <Loader
      type="ThreeDots"
      color="#ad45ff"
      height={50}
      width={50}
      timeout={3000} //3 secs
    />
  </div>
)

export default Preloader;