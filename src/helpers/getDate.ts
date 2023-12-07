export const DateMonthYear = new Date().toLocaleDateString("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export const Year = new Date().getFullYear();