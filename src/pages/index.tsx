import Link from "next/link";

const TopPage = () => {
  return (
    <>
      <style jsx>{`
        section {
          margin: 8px 0;
        }
      `}</style>
      <section>
        <p>
          <Link href="/news?type=csr&wait=0">CSR</Link>
        </p>
      </section>
      <section>
        <p>
          <Link href="/news?type=csr&wait=500">CSR with API Delays</Link>
        </p>
      </section>
      <section>
        <p>
          <Link href="/news?type=ssr&wait=0">
            Hybrid SSR (Perform static SSR for 1.4 seconds and switch to
            Streaming when time expires)
          </Link>
        </p>
      </section>
      <section>
        <p>
          <Link href="/news?type=ssr&wait=500">Hybrid SSR with API Delays</Link>
        </p>
      </section>
      <section>
        <p>
          <Link href="/news?type=streaming&wait=0">SSR Streaming</Link>
        </p>
      </section>
      <section>
        <p>
          <Link href="/news?type=streaming&wait=500">
            SSR Streaming with API Delays
          </Link>
        </p>
      </section>
    </>
  );
};
export default TopPage;
