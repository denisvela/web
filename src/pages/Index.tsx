import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, Users, ChevronDown, Menu, X, Youtube, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section - Inicio */}
      <section id="inicio" className="relative flex h-screen items-center justify-center text-center" style={{
      background: "url('https://scontent-mrs2-1.xx.fbcdn.net/v/t39.30808-6/467553662_977425757763534_5921363224878748512_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=lneuUP4uw0kQ7kNvwF4FSFF&_nc_oc=AdmPayt2S5iOKS7KNeNJ1To3VFVL9xSsxUtdhliEB1NtvZa2VBbReKl1yORYpt16_1A&_nc_zt=23&_nc_ht=scontent-mrs2-1.xx&_nc_gid=vB4tE_gt51yjM0QB-TMntA&oh=00_AfK0XUAyBfcffa_bQ1bUE8rUOX2Oci_IJeHnP6qxXNgyug&oe=68464DF1') center/cover no-repeat"
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl px-6">
          
          <p className="mt-4 text-lg sm:text-xl text-amber-400 font-light lg:text-5xl">
            Más allá...
          </p>
          
          {/* Button to Historia */}
          <Link to="/historia">
            <Button className="mt-8 rounded-2xl bg-red-600 text-base font-semibold uppercase tracking-widest hover:bg-red-700 px-[10px] mx-0 my-[4px] py-0 text-gray-50">Conoce mi historia</Button>
          </Link>
          
          {/* Social Media Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://www.instagram.com/denisvela30/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/denis.vela.568089/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/watch?v=c-Oo6x-V9CA" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110" aria-label="YouTube">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">Últimos Highlights</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revive los mejores momentos de mi carrera y mantente al día con mi contenido más reciente.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="relative aspect-video">
                <iframe src="https://www.youtube.com/embed/4XJFU3kNrDA" title="Denis Vela - Highlights" className="absolute inset-0 w-full h-full rounded-lg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historia Section - Resumen */}
      <section id="historia" className="py-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 bg-gray-950">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-amber-600 via-red-600 to-purple-600 bg-clip-text text-transparent relative">
              Mi Historia
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-600 via-red-600 to-purple-600 rounded-full mx-auto w-24"></div>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-zinc-50">
              Un viaje desde los barrios humildes hasta los estadios más importantes del mundo.
            </p>
          </div>

          <div className="text-center">
            <Card className="p-8 max-w-4xl mx-auto">
              <CardContent>
                <h3 className="text-2xl font-bold mb-6">Resumen de mi carrera</h3>
                <p className="text-gray-600 text-lg mb-4">De jugar en tierra a festejar goles bajo los focos, disciplina,  perseverancia, arte y el impulso constante de mi familia. Centenares de botas y balones rotos y cada obstáculo superado con confianza dan sentido a la celebración al marcar que me define.</p>
                <p className="text-gray-600 text-lg mb-6">
                  Cada paso de mi carrera ha sido una lección, cada desafío una oportunidad 
                  de crecimiento que me ha convertido en el jugador que soy hoy.
                </p>
                <Link to="/historia">
                  <Button className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white px-8 py-3">
                    Ver Historia Completa
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clubes & Academias Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent relative">
              Clubes & Academias
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 rounded-full mx-auto w-24"></div>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Equipos que han sido parte de mi trayectoria futbolística profesional.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img alt="CE Sabadell" className="h-16 w-16 object-contain mb-2" src="/lovable-uploads/19a98292-a8ed-4a1b-b19b-9c9f87f0cf9b.jpg" />
              <span className="text-gray-800 font-semibold text-sm text-center">CE Sabadell</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img alt="RCD Espanyol" className="h-16 w-16 object-contain mb-2" src="/lovable-uploads/98a48ed3-c17a-4858-9a78-b472727e543a.png" />
              <span className="text-gray-800 font-semibold text-sm text-center">RCD Espanyol</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img alt="OFK Branc" className="h-16 w-16 object-contain mb-2" src="/lovable-uploads/b03a53e8-7ca5-440d-b91d-181b97a7d85b.png" />
              <span className="text-gray-800 font-semibold text-sm text-center">OFK Branc</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img alt="FK Bucdonost" className="h-16 w-16 object-contain mb-2" src="/lovable-uploads/667217d0-af56-42b6-bb68-b3362decf950.png" />
              <span className="text-gray-800 font-semibold text-sm text-center">FK Bucdonost</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img alt="UDA Gramanet" className="h-16 w-16 object-contain mb-2" src="/lovable-uploads/3e205ec6-8ec9-4b58-a781-3815f86832bf.jpg" />
              <span className="text-gray-800 font-semibold text-sm text-center">CE Mercantil</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img alt="UD Socuéllamos" className="h-16 w-16 object-contain mb-2" src="/lovable-uploads/d8f31e47-661b-4a6f-8c64-b0ab0844350a.png" />
              <span className="text-gray-800 font-semibold text-sm text-center">UD Socuéllamos</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img alt="FTC Filakovo" className="h-16 w-16 object-contain mb-2" src="/lovable-uploads/ecaff125-ea92-4852-b3fd-1f6a148120c2.png" />
              <span className="text-gray-800 font-semibold text-sm text-center">FTC Filakovo</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img alt="FC Nitra" className="h-16 w-16 object-contain mb-2" src="/lovable-uploads/ec13cd0f-5fbc-4ddf-83e9-8436f7b443b4.png" />
              <span className="text-gray-800 font-semibold text-sm text-center">FC Nitra</span>
            </div>
          </div>
        </div>
      </section>

      {/* Último Partido Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 bg-clip-text text-transparent relative">
              Último Partido en Vivo
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 rounded-full mx-auto w-24"></div>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revive la emoción de mi último partido en vivo.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="relative aspect-video">
                <iframe src="https://sportnet.sme.sk/futbalnet/z/zsfz/zapas/668fcc21b1444d2ac675ba32/videozaznam/" title="Denis Vela - Último Partido en Vivo" className="absolute inset-0 w-full h-full rounded-lg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-white text-gray-900 mx-0 my-0 py-[7px] px-0">
        <div className="max-w-5xl bg-zinc-50 mx-0 px-[3px] py-0 my-0">
          <div className="text-center mb-16 bg-zinc-950">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-indigo-600 via-pink-600 to-red-600 bg-clip-text text-transparent relative">
              Sponsors
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-600 via-pink-600 to-red-600 rounded-full mx-auto w-24"></div>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-zinc-50">
              Orgulloso de contar con el apoyo de estas prestigiosas marcas que confían en mi carrera profesional.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-7 gap-8 items-center py-[14px] my-[43px] px-[16px] mx-[15px]">
            <div className="flex justify-center">
              <img src="https://www.grandhotelsole.sk/uploads/base/grand-hotel-sole-nitra-slovakia-logo.svg" alt="Grand Hotel Sole" className="h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex justify-center">
              <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f3ae590a-357e-4818-ab48-ca60b7c7c500._CR0%2C0%2C3000%2C600_SX1500_.jpg" alt="Amazon" className="h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex justify-center">
              <img alt="Decathlon" className="h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" src="/lovable-uploads/39a7179d-cc74-4448-be9b-503cc5dd66ca.jpg" />
            </div>
            <div className="flex justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/ca/thumb/2/2c/Logotip_UB.svg/1200px-Logotip_UB.svg.png" alt="Universitat de Barcelona" className="h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex justify-center">
              <img src="https://scontent-mrs2-1.xx.fbcdn.net/v/t39.30808-6/504190565_1128088222697286_2196400931264221023_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=Ip1aTdcAKWQQ7kNvwEO1QwJ&_nc_oc=Adl6oHjJAyxqR150PqcLcqRL_yK8uY5a-vDqfsYh2SduvJJrJvraeawEBTyQuExUylo&_nc_zt=23&_nc_ht=scontent-mrs2-1.xx&_nc_gid=Broz7oYrfSt1x95MpsBk-g&oh=00_AfOzqpZxdqZb0ydCMRM8-a6reDCFLofEp88kCfB1WCswvQ&oe=68494A6F" alt="Sponsor" className="h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex justify-center">
              <img src="https://brandlogos.net/wp-content/uploads/2023/12/coppel-logo_brandlogos.net_21m2l.png" alt="Coppel" className="h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex justify-center px-0 mx-0 my-0 py-0">
              <img alt="G-Shock Casio" className="h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" src="/lovable-uploads/c8ce4dd1-43ca-435c-9745-35b6a7e2b97a.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            <p className="text-gray-400 mb-6">Jugador Profesional de Fútbol</p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.instagram.com/denisvela30/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Instagram
                </Button>
              </a>
              <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  LinkedIn
                </Button>
              </a>
              <a href="https://www.facebook.com/denis.vela.568089/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Facebook
                </Button>
              </a>
              <a href="https://www.youtube.com/watch?v=c-Oo6x-V9CA" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  YouTube
                </Button>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
              © 2024 Denis Vela. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button onClick={() => scrollToSection('inicio')} className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-40">
        <ChevronDown className="w-6 h-6 rotate-180" />
      </button>
    </div>;
};
export default Index;