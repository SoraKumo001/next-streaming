export const topLoader = async ({
  wait,
}: {
  wait: number;
}): Promise<number[]> => {
  wait && (await new Promise((r) => setTimeout(r, wait)));
  return fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`).then(
    (v) => v.json()
  );
};

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

export const storyLoader = async ({
  id,
  wait,
}: {
  id: number;
  wait: number;
}): Promise<StoryType> => {
  wait && (await new Promise((r) => setTimeout(r, wait)));
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
    (v) => v.json()
  );
};

export type UserType = {
  created: number;
  id: string;
  submitted: number[];
};

export const userLoader = async ({
  id,
  wait,
}: {
  id: string;
  wait: number;
}): Promise<UserType> => {
  wait && (await new Promise((r) => setTimeout(r, wait)));
  return fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`).then(
    (v) => v.json()
  );
};
