import {TEAMS} from '@data/TeamSet';

export type ScoreCardProps = {
  name: string;
  score: number;
  // totalQuestions?: number;
};

function ScoreCard({name, score}: ScoreCardProps) {
  const getTeam = scoreValue => {
    const numScore = Number(scoreValue);
    if (isNaN(numScore)) return null;

    return (
      TEAMS.find(team => numScore >= team.scoreRange[0] && numScore <= team.scoreRange[1]) || {
        name: 'Unknown Team',
        scoreRange: [0, 0],
        image_url: ''
      }
    );
  };

  const team = getTeam(score);
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 w-full max-w-md text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Quiz Complete!</h2>

        <p className="text-lg md:text-xl text-gray-700 mb-2">
          Great job, <span className="font-semibold text-gray-900">{name}!</span>
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          {' '}
          Based on your answers, the team that might suit you best is:
          <br />
          <span className="block mt-2 text-xl md:text-2xl font-bold text-red-600">
            {team?.name}
          </span>
        </p>
        <p className="text-md text-gray-500 mb-8"> You also scored: {score}/28</p>

        <button
          onClick={() => window.location.reload()}
          className={`
                    w-full sm:w-auto px-8 py-3 rounded-lg text-white font-semibold
                    transition-all duration-200 ease-in-out
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400
                    bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-md hover:shadow-lg hover:cursor-pointer active:scale-[0.98]
                `}
        >
          Take Quiz Again?
        </button>
      </div>
    </div>
  );
}

export default ScoreCard;
