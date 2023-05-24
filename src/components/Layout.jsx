import Link from "next/link";
const Layout = ({ children }) => {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/csr">CSR</Link>
          </li>
          <li>
            <Link href="/ssr">SSR</Link>
          </li>
          <li>
            <Link href="/ssg">SSG</Link>
          </li>
          <li>
            <Link href="/isr">ISR</Link>
          </li>
          <li>
            <Link href="/friends">Friends</Link>
          </li>
          <li>
            <Link href="/images">Images</Link>
          </li>

        </ul>
      </nav>
      {children}
    </main>
  );
};

export default Layout;
