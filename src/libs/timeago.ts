import ms from "ms";

const map = {
  s: "seconds",
  ms: "milliseconds",
  m: "minutes",
  h: "hours",
  d: "days",
};

export const timeAgo = (date: number) =>
  date
    ? ms(new Date().getTime() - date).replace(
        /[a-z]+/,
        (str) => " " + map[str as keyof typeof map]
      )
    : "";
