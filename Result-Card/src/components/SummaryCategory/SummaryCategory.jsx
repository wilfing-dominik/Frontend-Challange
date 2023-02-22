import "./SummaryCategory.scss";

export default function SummaryCategory({
  summaryTitle,
  summaryIcon,
  score,
  fontColor,
  bgColor,
}) {
  return (
    <div
      className="summary-category"
      style={{ backgroundColor: bgColor + "f5" }}
    >
      <span className="category-details">
        <img src={summaryIcon} alt="visual icon" />
        <span style={{ color: fontColor }}>{summaryTitle}</span>
      </span>

      <span className="category-score">
        <span>{score} </span>

        <span className="max-score">
          <span>&#47;</span> 100
        </span>
      </span>
    </div>
  );
}
