'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import style from './GenerateButton.module.scss';

export default function GenerateButton() {
  const [color, setColor] = useState('');
  const router = useRouter();

  // Cookies example
  // const allCookies = document.cookie;
  // console.log(allCookies);

  useEffect(() => {
    const buttonColor = document.cookie
      .split('; ')
      .find((row) => row.startsWith('test2='))
      ?.split('=')[1];
    setColor(buttonColor || );
  });

  return (
    <div>
      <button
        className={style.generateButton}
        style={{ backgroundColor: color }}
        onClick={() => {
          const newColor = `#${Math.floor(Math.random() * 16777215).toString(
            16,
          )}`;
          document.cookie = `buttonColor=${newColor}`;
          setColor(newColor);
          router.refresh();
        }}
      >
        Generate
      </button>
    </div>
  );
}

/*
<button
style={{backgroundColor: color}}
onClick={() => {
  steColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
}}
*/

/*
export default function App() {
  const [hexColor, setColor] = useState(randomColor);
  //const [message, setMessage] = useState('initial Color');
  const ranCol = randomColor();

  return (
    <>
      <div style={{ backgroundColor: ranCol, fontSize: '100px' }}>
        {hexColor}
      </div>

      <div style={{ backgroundColor: ranCol }}>
        <button
          onClick={() => {
            //setMessage('Generated Color: ');
            setColor(ranCol);
          }}
        >
          Generate
        </button>
        <div style={{ fontSize: '60px' }}>Generated Color: {hexColor}</div>
      </div>
    </>
  );
}
*/
