export const Spinner = () => {
  return (
    <>
      <style jsx>
        {`
          .spinner {
            display: flex;
            align-items: center;
            height: 64px;
          }
          .spinner > div {
            margin-left: 24px;
            width: 28px;
            height: 28px;
            animation: spinner-rotating 1.2s infinite;
            animation-timing-function: steps(12, end);
          }
          .spinner > div:before {
            content: "";
            display: block;
            width: 4px;
            height: 4px;
            margin: 0;
            margin-left: 12px;
            border-radius: 50%;
            background: #888;
            color: #ccc;
            box-shadow: 6px 1.61px, 10.39px 6px, 12px 12px, 10.39px 18px,
              6px 22.39px, 0 24px, -6px 1.61px #999, -10.39px 6px #aaa,
              -12px 12px #bbb, -10.39px 18px, -6px 22.39px;
          }
          @keyframes spinner-rotating {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <div className="spinner">
        <div />
      </div>
    </>
  );
};
