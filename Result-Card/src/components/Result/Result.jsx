import React from "react";
import reactionIcon from "../../assets/images/icon-reaction.svg";
import memoryIcon from "../../assets/images/icon-memory.svg";
import verbalIcon from "../../assets/images/icon-verbal.svg";
import visualIcon from "../../assets/images/icon-visual.svg";
import "../Result/Result.scss";
import SummaryCategory from "../SummaryCategory/SummaryCategory";

// TODO: SUBMIT HOVER / MOBILE DESIGN

export default function Result() {
  return (
    <div className="container">
      <div className="result">
        <h2 className="result-title">Your Result</h2>

        <div className="score">
          <div className="score-value">76</div>
          <div className="max-score">of 100</div>
        </div>

        <h2 className="score-evaluation">Great</h2>

        <p className="score-description">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      <div className="summary">
        <h2 className="summary-title">Summary</h2>

        <div className="summary-categories">
          <SummaryCategory
            summaryTitle="Reaction"
            summaryIcon={reactionIcon}
            score={80}
            fontColor="#ff6463"
            bgColor="#fff6f5"
          />
          <SummaryCategory
            summaryTitle="Memory"
            summaryIcon={memoryIcon}
            score={92}
            fontColor="#eeb84f"
            bgColor="#fffbf2"
          />
          <SummaryCategory
            summaryTitle="Verbal"
            summaryIcon={verbalIcon}
            score={61}
            fontColor="#12b891"
            bgColor="#f2fbfa"
          />
          <SummaryCategory
            summaryTitle="Visual"
            summaryIcon={visualIcon}
            score={72}
            fontColor="#3746af"
            bgColor="#f3f3fd"
          />
        </div>

        <button type="submit" className="submit">
          Continue
        </button>
      </div>
    </div>
  );
}
