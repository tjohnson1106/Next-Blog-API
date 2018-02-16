import Header from "../components/header";
import withMUI from "../shared/MUI/withMUI";

const Index = ({ title = "Hello next.js" }) => (
  <div>
    <Header />
    <h2>{title}</h2>
  </div>
);

export default withMUI(Index);
