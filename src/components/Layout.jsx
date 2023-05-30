import Link from "next/link";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  const { locale, locales, asPath } = useRouter();
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
          <li>
            <Link href="/translation">Translation</Link>
          </li>
        </ul>
        <ol>
          {locales.map((l) => (
            <li key={l}>
              <Link 
              href={asPath}
              className={locale === l  ? "active": ""}
              locale={l}>
                {l}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      {children}
    </main>
  );
};

export default Layout;
