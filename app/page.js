import Image from 'next/image';
import cookieMonster from '../public/images/cookieMonster.png';

/* import LocalStorage from './LocalStorage'; */

export default function Home() {
  return (
    <main>
      {/*       <LocalStorage /> {/* simulates dar mode, but doesnt really exist */}
      <h1> Welcome to Cookie World </h1>
      <h3> every sane's human paradaise (no exceptions!) </h3>
      <Image src={cookieMonster} alt="cute cat" />
    </main>
  );
}
