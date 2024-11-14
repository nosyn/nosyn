import Link from 'next/link';

export const Header = () => {
  return (
    <header className='flex justify-between my-4 border-b-2'>
      <Link href='/'>Son Nguyen</Link>
      <ul className='flex space-x-4'>
        <li>
          <a href='/posts'>Posts</a>
        </li>
        <li>
          <a href='/projects'>Projects</a>
        </li>
      </ul>
    </header>
  );
};
