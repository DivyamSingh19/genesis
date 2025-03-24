 
import LandingBot from "@/components/3d/LandingBot"
 
 
export default function Home() {
 
  return (

     <div className="w-screen h-screen abolute top-0 left-0 bg-[#e3e3e3]">
       
      <section id="#home"> 
      <div className="flex items-center justify-between"> 
        {/* Left side */}
        <div className="w-1/2 relative ">
          <title></title>
        </div>

        {/* Right side */}
      <div className="w-1/2 h-screen relative bg-red"> 
      <div className="max-w-screen h-screen rounded-xl flex items-center justify-end"> 
      <LandingBot/>
      </div>
      </div>
      </div>
      </section>
      <section>
        <div>
           
        </div>
      </section>
    </div>
  );
}
