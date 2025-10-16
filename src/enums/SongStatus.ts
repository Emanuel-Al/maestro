export const SongStatusValues = {
  WANT_TO_LEARN: "WANT_TO_LEARN",
  LEARNING: "LEARNING",
  PRACTICING: "PRACTICING",
  LEARNT: "LEARNT",
} as const;

export type SongStatus = typeof SongStatusValues[keyof typeof SongStatusValues];
