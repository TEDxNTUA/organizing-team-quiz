export type ScoreCardProps = {
  name: string;
  score: number;
};

function ScoreCard({ name, score }) {
  console.log("SCorecard props", name, score);
  const getTeam = (score: number) => {
    if (score < 10) return "IT team";
    if (score >= 10 && score < 13) return "Experience team";
    if (score >= 13 && score < 15) return "Design team";
    if (score >= 15 && score < 17) return "Media and Marketing team";
    if (score >= 17 && score < 19) return "Speakers team";
    if (score >= 19 && score < 21) return "Venue team";
    if (score >= 21 && score < 24) return "Fundraising team";
    if (score >= 24) return "Curator";
    return "Unknown";
  };

  const team = getTeam(score);
  return (
    <>
      <div className="card p-4">
        <h3>
          Hello, {name}. The team that suits you best is {team}
        </h3>
        <button
          onClick={() => window.location.reload()}
          className="btn btn-primary mt-3"
        >
          Restart
        </button>
      </div>
    </>
  );
}

export default ScoreCard;
