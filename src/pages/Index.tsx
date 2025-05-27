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
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-transparent z-50">
        <div className="flex items-center justify-between px-6 py-4 lg:px-12">
          {/* Logo D10 */}
          <div className="text-2xl font-bold tracking-widest uppercase">
            D10⚽
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-sm font-semibold uppercase text-white hover:text-gray-300 transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('beyond')}
              className="text-sm font-semibold uppercase text-white hover:text-gray-300 transition-colors"
            >
              Beyond
            </button>
            <button 
              onClick={() => scrollToSection('historia')}
              className="text-sm font-semibold uppercase text-white hover:text-gray-300 transition-colors"
            >
              Historia
            </button>
            <button 
              onClick={() => scrollToSection('fans')}
              className="text-sm font-semibold uppercase text-white hover:text-gray-300 transition-colors"
            >
              Fans
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300"
              aria-label="Menú"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute inset-x-0 top-full bg-gray-900/90 backdrop-blur-md">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-6 py-4 border-b border-gray-700 hover:bg-gray-800 text-white"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('beyond')}
              className="block w-full text-left px-6 py-4 border-b border-gray-700 hover:bg-gray-800 text-white"
            >
              Beyond
            </button>
            <button 
              onClick={() => scrollToSection('historia')}
              className="block w-full text-left px-6 py-4 border-b border-gray-700 hover:bg-gray-800 text-white"
            >
              Historia
            </button>
            <button 
              onClick={() => scrollToSection('fans')}
              className="block w-full text-left px-6 py-4 hover:bg-gray-800 text-white"
            >
              Fans
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section - Inicio */}
      <section 
        id="inicio" 
        className="relative flex h-screen items-center justify-center text-center"
        style={{
          background: "url('https://scontent.fbts7-1.fna.fbcdn.net/v/t39.30808-6/499373749_1115437377295704_5121590539011153473_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mUEQkp4GvewQ7kNvwEAElkS&_nc_oc=AdlzqbzoJOQAHSvBBVZGDGmEdod-DG2cL4j2G_CRY8pF8m_m_PurKBBpjYQIzqFP-r8&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=x9Yio9R_wXIfX02HmOlQ5A&oh=00_AfLMOdvqqcjwan6R0PsKnzydfsONhQqt4M4dCS_wjvNz3A&oe=683A82CC') center/cover no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Denis Vela
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-200">
            Futbolista Profesional &mdash; Extremo Dr | Club Libre
          </p>
          <Button
            onClick={() => scrollToSection('beyond')}
            className="mt-8 rounded-2xl bg-red-600 px-8 py-3 text-base font-semibold uppercase tracking-widest hover:bg-red-700"
          >
            Conoce mi historia
          </Button>
          
          {/* Social Media Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <a 
              href="#" 
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="https://www.youtube.com/watch?v=4XJFU3kNrDA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110"
              aria-label="YouTube"
            >
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
                <iframe
                  src="https://www.youtube.com/embed/4XJFU3kNrDA"
                  title="Denis Vela - Highlights"
                  className="absolute inset-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Section */}
      <section id="beyond" className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">Beyond the Field</h2>
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">Mi Historia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
            <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">Comunidad de Fans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Únete a una comunidad apasionada que comparte el amor por el fútbol y los valores deportivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Fan Club Oficial</h3>
                <p className="text-gray-600 mb-4">
                  Acceso exclusivo a contenido, eventos especiales y encuentros con el jugador.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Únete Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Experiencias VIP</h3>
                <p className="text-gray-600 mb-4">
                  Vive momentos únicos con acceso a entrenamientos y eventos exclusivos.
                </p>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                  Conoce Más
                </Button>
              </CardContent>
            </Card>

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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Denis Vela</h3>
            <p className="text-gray-400 mb-6">Jugador Profesional de Fútbol</p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Instagram
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                LinkedIn
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Facebook
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                YouTube
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
              © 2024 Denis Vela. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection('inicio')}
        className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-40"
      >
        <ChevronDown className="w-6 h-6 rotate-180" />
      </button>
    </div>
  );
};

export default Index;
