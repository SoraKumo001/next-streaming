import Link from "next/link";
import { Header } from "../components/Header";

const TopPage = () => {
  return (
    <Header>
      <p>
        Immediately after switching the page, it will work with CSR. <br />
        Please reload your browser to see how it works.
      </p>
      <p>
        Source:
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/SoraKumo001/next-streaming"
        >
          https://github.com/SoraKumo001/next-streaming
        </a>
      </p>
      <hr />
      <section>
        <p>
          <Link href="/csr">Static + Client Side Data Fetching</Link>
        </p>
      </section>
      <section>
        <p>
          <Link href="/ssr">SSR</Link>
        </p>
      </section>
      <section>
        <p>
          <Link href="/ssr-slow">SSR with API Delays</Link>
        </p>
      </section>
      <section>
        <p>
          <Link href="/ssr-streaming">SSR Streaming</Link>
        </p>
      </section>
      <section>
        <p>
          <Link href="/ssr-streaming-slow">SSR Streaming with API Delays</Link>
        </p>
      </section>
    </Header>
  );
};
export default TopPage;
