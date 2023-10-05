import Image from 'next/image';
import cuteCat from '../public/images/cuteCat.jpg';
import GenerateButton from './GenerateButton';
import LocalStorage from './LocalStorage';

export default function Home() {
  return (
    <main>
      <GenerateButton />
      <LocalStorage />
      <h1>Hello UpLeveled</h1>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XJPRDnIA0GsmRMrerEX_gwAAAA%26pid%3DApi&f=1&ipt=8fa9ad0efd27cc6381813b5cae8fd33fb1adf219a35e7fa31cfdd72d85cbcbcd&ipo=images"
        alt="cute cat"
      />
      <Image src="/cuteCat.jpg" alt="cute cat" width={200} height={200} />
      <Image src={cuteCat} alt="cute cat" />
    </main>
  );
}
