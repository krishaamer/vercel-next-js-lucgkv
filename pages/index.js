import Link from 'next/link';

export default function IndexPage() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/about">
        <a>About adasd ad 123</a>
      </Link>
    </div>
  );
}
