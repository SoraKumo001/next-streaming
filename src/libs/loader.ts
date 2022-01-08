export const topLoader = ({ wait }: { wait: number }): Promise<number> =>
  fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
    .then(async (v) => {
      wait && (await new Promise((r) => setTimeout(r, wait)));
      return v;
    })
    .then((v) => v.json());

export type StoryType = {
  id: number;
  title: string;
  time: number;
  url: string;
  by: String;
  score: number;
  descendants: number;
  kids: number[];
  text: string;
};

export const storyLoader = ({
  id,
  wait,
}: {
  id: number;
  wait: number;
}): Promise<StoryType> =>
  fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then(async (v) => {
      wait && (await new Promise((r) => setTimeout(r, wait)));
      return v;
    })
    .then((v) => v.json());
