import Link from "next/link";

const TopPage = () => {
  return (
    <>
      <section>
        <p>
          <Link href="/csr">CSR</Link>
        </p>
      </section>
      <section>
        <p>
          <Link href="/csr-slow">CSR with API Delays</Link>
        </p>
      </section>
      <section>
        <p>
          <Link href="/ssr">
            Hybrid SSR (Perform static SSR for 1.4 seconds and switch to
            Streaming when time expires)
          </Link>
        </p>
      </section>
      <section>
        <p>
          <Link href="/ssr-slow">Hybrid SSR with API Delays</Link>
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
    </>
  );
};
export default TopPage;
