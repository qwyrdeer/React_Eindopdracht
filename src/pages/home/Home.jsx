import './Home.css';

import MessageOverlay from "../../components/messageOverlay/MessageOverlay.jsx";

function Home() {


return (
  <>
      <div className="fullTestPageBox">

      <p>end of feed.</p>
          <MessageOverlay
              Homepage= 'true'
              Message='Hey visitor! We need your help to locate all shiny Pokemon... Create your own hunter account in
                                        the right top corner - we kinda depend on you!'
          />
      </div>
  </>
);
}
export default Home;
