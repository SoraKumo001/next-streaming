export const loader = ({
  type,
  wait,
}: {
  type: string;
  wait: number;
}): Promise<unknown | undefined> =>
  fetch(`https://hacker-news.firebaseio.com/v0/${type}.json`)
    .then((v) => v.json())
    .then(
      async (v) =>
        (await new Promise((r) =>
          wait ? setTimeout(r, wait) : r(undefined)
        )) || v
    )
    .catch(() => undefined);
