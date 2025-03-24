import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center min-h-screen">
      <div className="relative p-6  backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 hover:scale-105 transition-transform duration-300">
      <Spline
        scene="https://prod.spline.design/2tmBW-J6B7Fa-kfv/scene.splinecode" 
      />
      </div>
      </div>
    </main>
  );
}
