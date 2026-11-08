export type ScoreboardContext = {
  /** The month the scoreboard covers, e.g. "November 2026". */
  period: string;
  players: {
    name: string;
    latestScore: number;
    emoji: string;
    position: number;
    positionDelta: string | null;
    scorePercentage: number;
    color: string | number[];
    totalScore: number;
  }[];
}

export type PodiumContext = {
  /** The month the podium covers, e.g. "November 2026". */
  period: string;
  players: {
    name: string;
    emoji?: string;
    position: number;
    color: string | number[];
    totalScore: number;
    stat: string;
  }[];
}