import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, ImageIcon, Zap, Palette, Layers, ChevronRight, Check } from "lucide-react"

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold">PixelMuse</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-purple-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 px-3 py-1 text-sm">
                    AI-Powered Creativity
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Your Ideas Into Stunning Images
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Create beautiful, unique images in seconds with our advanced AI. No design skills required.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Try for Free <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    See Examples
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Input placeholder="A futuristic city with flying cars and neon lights" className="flex-1" />
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <Sparkles className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt="AI generated futuristic city"
                        className="rounded-lg w-full h-auto aspect-square object-cover"
                      />
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt="AI generated futuristic city variation"
                        className="rounded-lg w-full h-auto aspect-square object-cover"
                      />
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt="AI generated futuristic city variation"
                        className="rounded-lg w-full h-auto aspect-square object-cover"
                      />
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt="AI generated futuristic city variation"
                        className="rounded-lg w-full h-auto aspect-square object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        4K
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Realistic
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Sci-Fi
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      Download All
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 px-3 py-1 text-sm">Features</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Everything You Need to Create Amazing Images
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered platform offers a wide range of features to help you create stunning images in seconds.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Lightning Fast</h3>
                <p className="text-gray-500">Generate high-quality images in seconds, not minutes or hours.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Palette className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Endless Styles</h3>
                <p className="text-gray-500">Choose from hundreds of artistic styles or create your own unique look.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Layers className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Advanced Editing</h3>
                <p className="text-gray-500">Fine-tune your creations with our intuitive editing tools.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 px-3 py-1 text-sm">
                  How It Works
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Create Amazing Images in Three Simple Steps
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes it easy to turn your ideas into stunning visuals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="relative flex flex-col items-center space-y-4 rounded-lg p-6 bg-white shadow-sm">
                <div className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
                  1
                </div>
                <ImageIcon className="h-10 w-10 text-purple-600" />
                <h3 className="text-xl font-bold">Describe Your Vision</h3>
                <p className="text-gray-500 text-center">
                  Type a detailed description of the image you want to create.
                </p>
              </div>
              <div className="relative flex flex-col items-center space-y-4 rounded-lg p-6 bg-white shadow-sm">
                <div className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
                  2
                </div>
                <Sparkles className="h-10 w-10 text-purple-600" />
                <h3 className="text-xl font-bold">AI Generation</h3>
                <p className="text-gray-500 text-center">
                  Our AI analyzes your description and generates multiple image options.
                </p>
              </div>
              <div className="relative flex flex-col items-center space-y-4 rounded-lg p-6 bg-white shadow-sm">
                <div className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
                  3
                </div>
                <Palette className="h-10 w-10 text-purple-600" />
                <h3 className="text-xl font-bold">Refine & Download</h3>
                <p className="text-gray-500 text-center">
                  Edit your favorite images, then download in high resolution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Example Gallery */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 px-3 py-1 text-sm">Gallery</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  See What Others Have Created
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse through our gallery of AI-generated images to get inspired.
                </p>
              </div>
            </div>
            <Tabs defaultValue="all" className="mt-12">
              <TabsList className="mx-auto mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="landscapes">Landscapes</TabsTrigger>
                <TabsTrigger value="portraits">Portraits</TabsTrigger>
                <TabsTrigger value="abstract">Abstract</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <img
                      key={i}
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={`AI generated image example ${i}`}
                      className="rounded-lg w-full h-auto aspect-square object-cover hover:opacity-90 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="landscapes" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={`AI generated landscape ${i}`}
                      className="rounded-lg w-full h-auto aspect-square object-cover hover:opacity-90 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="portraits" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={`AI generated portrait ${i}`}
                      className="rounded-lg w-full h-auto aspect-square object-cover hover:opacity-90 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="abstract" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={`AI generated abstract art ${i}`}
                      className="rounded-lg w-full h-auto aspect-square object-cover hover:opacity-90 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="gap-1">
                View Full Gallery <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 px-3 py-1 text-sm">Pricing</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Choose the Perfect Plan for You
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer flexible pricing options to suit your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>Perfect for trying out our platform</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-3xl font-bold">$0</div>
                  <p className="text-sm text-gray-500">Forever free</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>10 images per month</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Standard quality</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Basic editing tools</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col border-purple-200 bg-purple-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Pro</CardTitle>
                    <Badge>Popular</Badge>
                  </div>
                  <CardDescription>For creators and professionals</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-3xl font-bold">$19</div>
                  <p className="text-sm text-gray-500">per month</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>100 images per month</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>HD quality</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Advanced editing tools</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Priority generation</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Subscribe Now</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For teams and businesses</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-3xl font-bold">$99</div>
                  <p className="text-sm text-gray-500">per month</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Unlimited images</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>4K quality</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>All editing tools</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>API access</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Dedicated support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Ideas Into Reality?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of creators who are already using PixelMuse to bring their visions to life.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Get Started for Free <Sparkles className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-purple-600" />
                <span className="text-xl font-bold">PixelMuse</span>
              </div>
              <p className="text-sm text-gray-500">Transform your ideas into stunning images with AI.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Product</h3>
                <ul className="flex flex-col gap-2 text-sm text-gray-500">
                  <li>
                    <a href="#" className="hover:underline">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      API
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Company</h3>
                <ul className="flex flex-col gap-2 text-sm text-gray-500">
                  <li>
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Resources</h3>
                <ul className="flex flex-col gap-2 text-sm text-gray-500">
                  <li>
                    <a href="#" className="hover:underline">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-gray-500">© 2025 PixelMuse. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
