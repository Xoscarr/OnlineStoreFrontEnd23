import "./prodCount.css";

const ProdCount = (props) => {
  return (
    <h5 className="prodCount">
      We have {props.count} new products waiting for you!
    </h5>
  );
};
export default ProdCount;
