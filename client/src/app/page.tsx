 
import {Navbar} from '@/components/navbar/Navbar'
import { Spotlight } from '@/components/spotlight/Spotlight'
import { Menu, Sparkle } from 'lucide-react'
import { HeroGeometric } from '@/components/ui/shape-landing-hero'
import { Dock } from '@/components/magicui/dock'
import Landing from "@/components/landing/Landing"
import { LandingButton } from '@/components/buttons/LandingButtons'
export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
       <section id='#'>
          <LandingButton/>
        </section>
         
    </main>
  )
}