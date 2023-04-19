import "./styles.scss";

export default function Loading() {
  return (
    <div className="ring">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
