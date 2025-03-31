import React from "react"; // Import React if not already

export type ScoreCardProps = {
  name: string;
  score: number;
  // Optional: Pass total questions if you want to display score like 'X out of Y'
  // totalQuestions?: number;
};

function ScoreCard({ name, score }: ScoreCardProps) {
  // console.log("ScoreCard props", name, score);

  // --- Function to determine the team based on score ---
  const getTeam = (scoreValue: number): string => {
    // Ensure scoreValue is treated as a number
    const numScore = Number(scoreValue);

    if (isNaN(numScore)) return "Invalid Score"; // Handle potential non-numeric input

    if (numScore < 10) return "IT team";
    if (numScore >= 10 && numScore < 13) return "Experience team";
    if (numScore >= 13 && numScore < 15) return "Design team";
    if (numScore >= 15 && numScore < 17) return "Media and Marketing team";
    if (numScore >= 17 && numScore < 19) return "Speakers team";
    if (numScore >= 19 && numScore < 21) return "Venue team";
    if (numScore >= 21 && numScore < 24) return "Fundraising team";
    if (numScore >= 24) return "Curator";
    return "Unknown Team"; // Default case
  };

  const team = getTeam(score);

  // --- JSX Structure with Tailwind Classes ---
  return (
    // Outer wrapper to center the card, similar to the Quiz component
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 w-full max-w-md text-center">
        {/* Optional: A more prominent title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Quiz Complete!
        </h2>

        {/* Personalized Result Message */}
        <p className="text-lg md:text-xl text-gray-700 mb-2">
          Great job,{" "}
          <span className="font-semibold text-gray-900">{name}!</span>
        </p>

        {/* Displaying the determined team */}
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          {" "}
          {/* Added more margin-bottom */}
          Based on your answers, the team that might suit you best is:
          <br /> {/* Line break for emphasis */}
          <span className="block mt-2 text-xl md:text-2xl font-bold text-red-600">
            {" "}
            {/* Highlighted Team */}
            {team}
          </span>
        </p>

        {/* Optional: Display the actual score */}
        <p className="text-md text-gray-500 mb-8">
          {" "}
          {/* Added more margin-bottom */}
          Your final score: {score}
        </p>

        {/* Restart Button - Styled like the main quiz button */}
        <button
          onClick={() => window.location.reload()} // Simple page reload to restart
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
