import Link from "next/link";

export function Footer() {
  return (
    <footer className="colophon-footer">
      <span className="hedera" aria-hidden="true">
        ❧
      </span>
      <p style={{ margin: 0 }}>
        Set in Alegreya &amp; Courier Prime, after Bringhurst ·{" "}
        <Link href="/colophon">Colophon</Link>
      </p>
    </footer>
  );
}
