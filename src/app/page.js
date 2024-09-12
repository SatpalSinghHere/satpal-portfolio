import { Portfolio } from "@/components/component/portfolio";
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/3DModel'), { ssr: false });

export default function Home() {
  return (
    <div>
      <div style={{ height: '50vh', width: '50%' }}>
        <Scene />
      </div>
      <Portfolio />
      {/* <TestComponent />    */}
    </div>
  );
}
