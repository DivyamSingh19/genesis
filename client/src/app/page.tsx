 
import Navbar from '@/components/navbar/Navbar'
import { Spotlight } from '@/components/spotlight/Spotlight'
import { Menu, Sparkle } from 'lucide-react'
import { HeroGeometric } from '@/components/ui/shape-landing-hero'
export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
       <section id='#'>
        <HeroGeometric
                       badge='Genesis.ai'
                       title1='IMAGINE. TYPE. CREATE'
                       title2='From Brain to Pixels at the speed of thought.'

       /></section>
        
       
    </main>
  )
}