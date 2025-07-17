import { CSSProperties } from "react";
import RingLoader from "react-spinners/RingLoader";

const override: CSSProperties = {
    margin: "0 auto",
    position:'relative',
    top:'40%',
    translate:'(-50%,-50%)',
};

function LoaderScreen() {

  return (


    <div className="sweet-loading fixed z-50 top-0 bottom-0 left-0 right-0 main-bg">
        <RingLoader
        color={'#e5ff05'}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
    </div>

  );
}

export default LoaderScreen;