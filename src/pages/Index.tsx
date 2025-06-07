import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, Users, ChevronDown, Menu, X, Youtube, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';
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
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-transparent z-50">
        <div className="flex items-center justify-between px-6 py-4 lg:px-12">
          {/* Logo D10 */}
          <div className="text-2xl font-bold tracking-widest uppercase">
            Denis Vela
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-sm font-semibold uppercase text-white hover:text-gray-300 transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('beyond')} className="text-sm font-semibold uppercase text-white hover:text-gray-300 transition-colors">
              Beyond
            </button>
            <button onClick={() => scrollToSection('historia')} className="text-sm font-semibold uppercase text-white hover:text-gray-300 transition-colors">
              Historia
            </button>
            <button onClick={() => scrollToSection('fans')} className="text-sm font-semibold uppercase text-white hover:text-gray-300 transition-colors">
              Fans
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-gray-300" aria-label="Menú">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden absolute inset-x-0 top-full bg-gray-900/90 backdrop-blur-md">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left px-6 py-4 border-b border-gray-700 hover:bg-gray-800 text-white">
              Inicio
            </button>
            <button onClick={() => scrollToSection('beyond')} className="block w-full text-left px-6 py-4 border-b border-gray-700 hover:bg-gray-800 text-white">
              Beyond
            </button>
            <button onClick={() => scrollToSection('historia')} className="block w-full text-left px-6 py-4 border-b border-gray-700 hover:bg-gray-800 text-white">
              Historia
            </button>
            <button onClick={() => scrollToSection('fans')} className="block w-full text-left px-6 py-4 hover:bg-gray-800 text-white">
              Fans
            </button>
          </div>}
      </nav>

      {/* Hero Section - Inicio */}
      <section id="inicio" className="relative flex h-screen items-center justify-center text-center" style={{
      background: "url('https://scontent-mrs2-1.xx.fbcdn.net/v/t39.30808-6/467553662_977425757763534_5921363224878748512_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=lneuUP4uw0kQ7kNvwF4FSFF&_nc_oc=AdmPayt2S5iOKS7KNeNJ1To3VFVL9xSsxUtdhliEB1NtvZa2VBbReKl1yORYpt16_1A&_nc_zt=23&_nc_ht=scontent-mrs2-1.xx&_nc_gid=vB4tE_gt51yjM0QB-TMntA&oh=00_AfK0XUAyBfcffa_bQ1bUE8rUOX2Oci_IJeHnP6qxXNgyug&oe=68464DF1') center/cover no-repeat"
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl px-6">
          
          <p className="mt-4 text-lg sm:text-xl text-amber-400 font-light lg:text-5xl">
            Más allá...
          </p>
          
          {/* Social Media Links */}
          <Button onClick={() => scrollToSection('beyond')} className="mt-8 rounded-2xl bg-red-600 px-8 py-3 text-base font-semibold uppercase tracking-widest hover:bg-red-700">
            Más allá...
          </Button>
          
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

      {/* Beyond Section */}
      <section id="beyond" className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent relative">
              Más allá...
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-full mx-auto w-24"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más que un jugador, soy una persona comprometida con causas sociales, 
              el desarrollo comunitario y la inspiración de las nuevas generaciones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Impacto Social</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4"></div>
                  <p className="text-gray-600">Fundación para jóvenes en situación de vulnerabilidad</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4"></div>
                  <p className="text-gray-600">Programas de educación deportiva en comunidades rurales</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4"></div>
                  <p className="text-gray-600">Embajador de valores deportivos y Fair Play</p>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <CardContent>
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "El fútbol me ha dado todo, y es mi responsabilidad devolver a la comunidad 
                  lo que el deporte me ha enseñado: disciplina, trabajo en equipo y perseverancia."
                </blockquote>
                <cite className="text-green-600 font-semibold">— Denis Vela</cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Historia Section */}
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

          <div className="space-y-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <Card className="p-6">
                  <CardContent>
                    <Badge className="mb-4 bg-blue-100 text-blue-800">2010 - Inicios</Badge>
                    <h3 className="text-2xl font-bold mb-4">Los Primeros Pasos</h3>
                    <p className="text-gray-600">
                      Comenzé jugando en las calles de mi barrio, con una pelota hecha de trapos 
                      y el sueño de algún día llegar a ser profesional. Mi familia siempre creyó en mí.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:w-1/2 h-64 bg-gradient-to-br from-green-200 to-blue-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-center">Imagen: Primeros pasos en el fútbol</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <Card className="p-6">
                  <CardContent>
                    <Badge className="mb-4 bg-green-100 text-green-800">2015 - Profesional</Badge>
                    <h3 className="text-2xl font-bold mb-4">El Salto al Profesionalismo</h3>
                    <p className="text-gray-600">
                      Mi debut profesional marcó el inicio de una carrera llena de desafíos, 
                      victorias y aprendizajes que me han convertido en el jugador que soy hoy.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:w-1/2 h-64 bg-gradient-to-br from-yellow-200 to-green-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-center">Imagen: Debut profesional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fans Section */}
      <section id="fans" className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent relative">
              Comunidad de Fans
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-full mx-auto w-24"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Únete a una comunidad apasionada que comparte el amor por el fútbol y los valores deportivos.
            </p>
          </div>

          {/* Fan Community Image */}
          <div className="mb-12 flex justify-center">
            <div className="w-full max-w-2xl my-0 py-0 mx-[89px] px-[181px]">
              <img src="https://scontent-mrs2-1.xx.fbcdn.net/v/t39.30808-6/499732034_1118749313631177_1066404946131252977_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TPrHLC4CuQIQ7kNvwEzt2Id&_nc_oc=AdkF-g6w8ZX6PARu5p4_KWHy5fJmWOW-rVnLqVg694Vun9gwJQUKqtD8vNG6AsM6BIM&_nc_zt=23&_nc_ht=scontent-mrs2-1.xx&_nc_gid=1G0eiKNL56w-Yn81fnmJqw&oh=00_AfNslc77d6_A9u1e8pqmUkECI-mOAocGjx_43dwnrpIvig&oe=684954FC" alt="Comunidad de Fans Denis Vela" className="w-full h-auto rounded-lg shadow-lg object-contain" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <Trophy className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Competencias</h3>
                <p className="text-gray-600 mb-4">
                  Participa en torneos y actividades organizadas por la comunidad de fans.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Participar
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Eventos</h3>
                <p className="text-gray-600 mb-4">
                  Únete a eventos exclusivos y experiencias únicas con Denis Vela.
                </p>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                  Ver Eventos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto px-6 bg-green-800">
          <div className="text-center mb-16 bg-zinc-950">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-indigo-600 via-pink-600 to-red-600 bg-clip-text text-transparent relative">
              Sponsors
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-600 via-pink-600 to-red-600 rounded-full mx-auto w-24"></div>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-zinc-50">
              Orgulloso de contar con el apoyo de estas prestigiosas marcas que confían en mi carrera profesional.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-7 gap-8 items-center my-[51px]">
            <div className="flex justify-center">
              <img src="https://www.grandhotelsole.sk/uploads/base/grand-hotel-sole-nitra-slovakia-logo.svg" alt="Grand Hotel Sole" className="h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex justify-center">
              <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f3ae590a-357e-4818-ab48-ca60b7c7c500._CR0%2C0%2C3000%2C600_SX1500_.jpg" alt="Amazon" className="h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex justify-center">
              <img src="https://mecaluxes.cdnwm.com/clientes/decathlon-logo.2.7.jpg?imdensity=1" alt="Decathlon" className="h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
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
            <div className="flex justify-center">
              
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