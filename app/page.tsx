"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "../components/ui/badge";
import ReviewText from "../components/ui/ReviewText";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Wifi,
  Car,
  Utensils,
  Shield,
  Clock,
  Users,
  Home,
  CheckCircle,
  Camera,
  Heart,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function HostelWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Header */}
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-lg border-b border-blue-100 rounded-b-xl">
        <div className="container mx-auto max-w-6xl flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 md:py-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <Home className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
            <span className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">Shri Niwas Residency</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link 
              href="#home" 
              className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              About
            </Link>
            <Link 
              href="#facilities" 
              className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Facilities
            </Link>
            <Link 
              href="#gallery" 
              className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Gallery
            </Link>
            <Link 
              href="#map" 
              className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Map
            </Link>
            <Link 
              href="#footer" 
              className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
          
      {/* Hero Section */}
      <section id="home" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-gradient-to-br from-blue-100/70 to-white border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-3 sm:mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 text-sm sm:text-base">Inclusive Rental Living</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              A Safe & Comfortable
              <span className="text-blue-600 block mt-2 sm:mt-3">Home for Everyone</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you're a student, working professional, or family, Shri Niwas Residency provides a secure, modern, and welcoming space for all. Enjoy comfort and community in a place you can truly call home.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="#footer" passHref legacyBehavior>
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3">
                  Schedule a Visit
                </Button>
              </Link>
              <Link href="#gallery" passHref legacyBehavior>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent"
                >
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 md:py-32 bg-white border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Happy Families</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Security</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">4.8★</div>
              <div className="text-gray-600">Parent Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-white border-b border-blue-100 shadow-sm">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">About Shri Niwas Residency</Badge>
<h3 className="text-3xl font-bold text-gray-800 mb-6">Shri Niwas Residency (Fully Furnished 1 BHK Apartments)</h3>
<p className="text-gray-600 mb-6 leading-relaxed">
▪ It's around 300 - 600 meters from Coaching Campuses Satyarth, Samunnat and Sarokar in Jawahar Nagar and Talwandi.<br />
▪ DAV Public School, Emmanuel Public School and Modern Public School are also within 500 meters from our building.<br />
▪ Renowned Doctors and Hospitals are also very nearby.
</p>
<div className="space-y-4">
  <div className="flex items-center space-x-3">
    <CheckCircle className="h-5 w-5 text-green-600" />
    <span className="text-gray-700">Contact Number : 8949886399</span>
  </div>
</div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Hostel common area"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 md:py-32 bg-white border-b border-blue-100 shadow-sm">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Amenities</Badge>
      <h3 className="text-3xl font-bold text-gray-800 mb-4">Amenities</h3>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Our apartments come with a host of amenities for a comfortable and secure stay.
      </p>
    </div>
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <Image src="/icons/icons8-air-conditioner-50.png" alt="AC Rooms" width={48} height={48} />
          <span className="text-gray-800 text-base font-medium mt-2">AC Rooms</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/icons/icons8-park-50.png" alt="Park Facing" width={48} height={48} />
          <span className="text-gray-800 text-base font-medium mt-2">Park Facing</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/icons/icons8-gas-burner-50.png" alt="Gas Burner" width={48} height={48} />
          <span className="text-gray-800 text-base font-medium mt-2">Gas Burner</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/icons/icons8-kitchen-50.png" alt="Modular Kitchen" width={48} height={48} />
          <span className="text-gray-800 text-base font-medium mt-2">Modular Kitchen</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/icons/icons8-water-filter-50.png" alt="Personal RO" width={48} height={48} />
          <span className="text-gray-800 text-base font-medium mt-2">Personal RO</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/icons/icons8-water-supply-50.png" alt="Municipal Water Supply" width={48} height={48} />
          <span className="text-gray-800 text-base font-medium mt-2">Municipal Water Supply</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/icons/icons8-office-80.png" alt="Fully Furnished Rooms" width={48} height={48} />
          <span className="text-gray-800 text-base font-medium mt-2">Fully Furnished Rooms</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/icons/icons8-balcony-100.png" alt="Personal Open Space" width={48} height={48} />
          <span className="text-gray-800 text-base font-medium mt-2">Personal Open Space</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/icons/icons8-power-off-button-50.png" alt="24x7 Power Backup" width={48} height={48} />
          <span className="text-gray-800 text-base font-medium mt-2">24x7 Power Backup</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/icons/icons8-cctv-50.png" alt="CCTV Surveillance" width={48} height={48} />
          <span className="text-gray-800 text-base font-medium mt-2">CCTV Surveillance</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/icons/icons8-wifi-50.png" alt="Paid Wi-Fi" width={48} height={48} />
          <span className="text-gray-800 text-base font-medium mt-2">Paid Wi-Fi</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/icons/icons8-elevator-50.png" alt="Elevator" width={48} height={48} />
          <span className="text-gray-800 text-base font-medium mt-2">Elevator</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/icons/icons8-security-guard-50.png" alt="24x7 Security" width={48} height={48} />
          <span className="text-gray-800 text-base font-medium mt-2">24x7 Security</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 bg-gray-50 border-b border-blue-100 shadow-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gray-100 text-gray-800 hover:bg-gray-100">Gallery</Badge>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Take a Virtual Tour</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See our clean, comfortable facilities and get a feel for the environment your child will call home
            </p>
          </div>

          <div className="columns-2 sm:columns-3 md:columns-4 gap-4">
            {[
              {
                src: "/images/apartment-kitchenette.png",
                alt: "Apartment kitchenette"
              },
              {
                src: "/images/wide-viewroom.png",
                alt: "Room"
              },
              {
                src: "/images/bathroom-sliding-door.png",
                alt: "Bathroom sliding door"
              },
              {
                src: "/images/bathroom.png",
                alt: "Bathroom"
              },
              {
                src: "/images/bathroom2.png",
                alt: "Bathroom"
              },
              {
                src: "/images/front-view.png",
                alt: "Front view"
              },
              {
                src: "/images/hostel-room-1.png",
                alt: "Hostel room"
              },
              {
                src: "/images/kitchen-area.png",
                alt: "Kitchen area"
              },
              {
                src: "/images/living-room.png",
                alt: "Living room"
              },
              {
                src: "/images/lobby.png",
                alt: "Lobby"
              },
              {
                src: "/images/parkview.png",
                alt: "Park view"
              },
            ].map((img) => (
              <div key={img.src} className="relative mb-4 break-inside-avoid group rounded-xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={200}
                  height={150}
                  className="w-full h-auto block rounded-xl transition-shadow duration-200 shadow-sm hover:shadow-lg"
                  style={{ display: 'block', maxWidth: '100%' }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors flex items-center justify-center pointer-events-none rounded-xl">
                  <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity text-center px-2">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 md:py-32 bg-gradient-to-br from-green-50 to-blue-50 border-b border-blue-100 shadow-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Location</Badge>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Location & Address</h3>
<p className="text-gray-600 max-w-2xl mx-auto">
  <b>Address:</b><br />
  Shri Niwas Residency<br />
  251 C, Near Tikona Park, kali mata mandir ke samne, Behind Kothari Skin clinic, Modi Boys Hostel ke samne wali lane me<br />
  Talwandi
</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <iframe
  src="https://maps.app.goo.gl/gqcJftAjj5Z84p8Q8"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-lg"
></iframe>
            </div>

            {/* Location Details */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-6">Prime Location Benefits</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Strategic Location</div>
                      <div className="text-gray-600 text-sm">
                        Near City Mall, Borkhera, Kota - Easy access to shopping and entertainment
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Educational Hub</div>
                      <div className="text-gray-600 text-sm">
                        Close to coaching institutes and colleges - Perfect for students
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Car className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Transport Connectivity</div>
                      <div className="text-gray-600 text-sm">
                        Well-connected by buses and auto-rickshaws to all parts of the city
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">24/7 Accessibility</div>
                      <div className="text-gray-600 text-sm">
                        Safe neighborhood with round-the-clock security and lighting
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nearby Places */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h5 className="font-semibold text-gray-800 mb-4">Nearby Landmarks</h5>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">City Mall</span>
                    <span className="font-medium text-green-600">10 min drive</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bus Stand</span>
                    <span className="font-medium text-blue-600">20 min drive</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Market Area</span>
                    <span className="font-medium text-purple-600">2 min walk</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hospital</span>
                    <span className="font-medium text-red-600">5 min walk</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Railway Station</span>
                    <span className="font-medium text-orange-600">30 min drive</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Restaurans</span>
                    <span className="font-medium text-gray-600">5 min walk</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span className="text-gray-600">Coaching-Centre</span>
                    <span className="font-medium text-gray-600">5 min walk</span>
                  </div> */}
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="text-center">
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/dir//Shri+Niwas+Residency+(Fully+Furnished+1+BHK+Apartments+%7C+Studio+Apartments)",
                      "_blank",
                    )
                  }
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews & Parent Testimonials */}
      <section className="py-20 md:py-32 bg-white border-b border-blue-100 shadow-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Resident Reviews</Badge>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">What Our Residents Say</h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-800">4.7</span>
              <span className="text-gray-600">• 33 Google Reviews</span>
            </div>
          </div>

          {/* Google Reviews Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Top Google Reviews</h4>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="border-red-100 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">G</span>
                    </div>
                  </div>
                  <ReviewText
  text={`Shri Niwas Residency is an excellent place to stay in Kota for both students and their parents.
The flat is fully furnished and has all the necessary household items and furniture, which allows students and parents to stay focused on studies without worrying about daily needs. The support staff, especially Shri Vishnu Bhai, is very helpful and cooperative. The owners, Mr. and Mrs. Maheshwari, come from an educational background and understand the lifestyle and routine of students very well. They are always just a phone call away and ready to help—even with personal concerns if needed. They also offer useful guidance for exam preparation from time to time.

The location is also a big plus. It is right opposite a public park with lots of greenery, which adds a calm and fresh environment to the daily routine.

We highly recommend Shri Niwas Residency as one of the best accommodation options in Kota for students preparing for competitive exams like JEE and NEET.`}
/>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">Swapnil Kanage</div>
                      <div className="text-xs text-gray-500">2 months ago</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Verified
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-100 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">G</span>
                    </div>
                  </div>
                  <ReviewText
  text={`I am incredibly pleased with my experience at this hostel. The property is perfectly located, facing a beautiful park, which adds to the serene and peaceful environment. The cleanliness is top-notch, All the flats are occupied by decent, respectful families, creating a safe and welcoming atmosphere. The owner and support staff are outstanding – always helpful, attentive, and kind. I highly recommend this hostel to anyone looking for a comfortable and well-maintained place to stay.`}
/>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">Monica J</div>
                      <div className="text-xs text-gray-500">1 month ago</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Verified
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-100 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                    <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">G</span>
                    </div>
                  </div>
                  <ReviewText
  text={`Shri Niwas Residency is one of the best fully furnished Studio apartment in Kota . The atmosphere is wonderful and is full of positive vibes. The rooms and surroundings are very well maintained and the cleanliness is top notch. The staff is very prompt and attend to any problem immediately. Moreover the owners are very cooperative and supportive to the residents and are always available. Being close to coaching, all in all the best place for students to stay in Kota`}
/>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">Sandeep Gupta</div>
                      <div className="text-xs text-gray-500">5 Months ago</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Verified
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-red-100 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                    <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">G</span>
                    </div>
                  </div>
                  <ReviewText
  text={`I was resident of Shree niwas Residency. Very well and fully furnished flats .24/7 water and electricity supply.The location is very good. Very humble, polite,kind and responsible owner and caretakers . Sir and Ma'am pays special attention to residents.`}
/>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">Anita Prasad</div>
                      <div className="text-xs text-gray-500">3 Months ago</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Verified
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="outline" className="border-red-500 text-red-600 hover:bg-red-50 bg-transparent">
                <div className="w-4 h-4 bg-red-500 rounded mr-2 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                View All Google Reviews
              </Button>
            </div>
          </div>
          </div>
</section>
          {/* Traditional Testimonials
          <div>
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold text-gray-800">More Parent Testimonials</h4>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-blue-100">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "My daughter has been staying here for 2 years. The care and attention she receives makes me feel
                    like she's in safe hands. Regular updates keep me informed about her well-being."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Heart className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Mrs. Sharma</div>
                      <div className="text-sm text-gray-600">Parent from Delhi</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The food quality and cleanliness is exceptional. My son is happy and healthy, which gives us
                    complete peace of mind. The hostel feels like a second home."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <Heart className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Mr. Patel</div>
                      <div className="text-sm text-gray-600">Parent from Mumbai</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-100">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The supportive environment and regular communication has made this the best decision for our
                    family. The staff treats every student with care and respect."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <Heart className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Mrs. Singh</div>
                      <div className="text-sm text-gray-600">Parent from Pune</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
        </div>
        </div> */}

      {/* Contact & Footer Section */}
      <footer id="footer" className="bg-gradient-to-b from-blue-600 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                {/* <Image src="/placeholder-logo.svg" alt="Shri Niwas Residency" width={48} height={48} /> */}
                <span className="text-2xl font-bold">Shri Niwas Residency</span>
              </div>
              <p className="text-blue-100 text-lg">
                Providing comfortable and secure accommodation for students in Kota. Your home away from home.
              </p>
              
              <div className="space-y-6 pt-4">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">
                      Shri Niwas Residency<br />
                      251 C, Near Tikona Park, kali mata mandir ke samne,<br />
                      Behind Kothari Skin clinic, In Opposite lane of Modi Boys Hostel<br />
                      Talwandi, Kota, Rajasthan - 324001
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a href="tel:+919782178173" className="text-blue-100 hover:underline">+91 8949886399</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:shrinivasresidencykota@gmail.com" className="text-blue-100 hover:underline">
                    shriniwasredincy@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="h-full">
              <div className="h-full rounded-xl overflow-hidden shadow-2xl border-2 border-white/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.967654321012!2d75.8445!3d25.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f9b30c41cc1e5%3A0x6406f6e1b9c5a0a5!2sShri%20Niwas%20Residency!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-blue-200 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Shri Niwas Residency. All rights reserved.
              </div>
              {/* <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.415-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
    
  )
}
