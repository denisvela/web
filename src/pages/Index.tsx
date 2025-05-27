
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, Users, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Denis Vela
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('beyond')}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Beyond
              </button>
              <button 
                onClick={() => scrollToSection('historia')}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Historia
              </button>
              <button 
                onClick={() => scrollToSection('fans')}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Fans
              </button>
              <button 
                onClick={() => scrollToSection('tienda')}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Tienda
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                >
                  Inicio
                </button>
                <button 
                  onClick={() => scrollToSection('beyond')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                >
                  Beyond
                </button>
                <button 
                  onClick={() => scrollToSection('historia')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                >
                  Historia
                </button>
                <button 
                  onClick={() => scrollToSection('fans')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                >
                  Fans
                </button>
                <button 
                  onClick={() => scrollToSection('tienda')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                >
                  Tienda
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Inicio */}
      <section id="inicio" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              Pro Football Player
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Denis 
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Vela
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Jugador profesional de fútbol dedicado a la excelencia, la pasión y el compromiso. 
              Descubre mi historia, mis logros y únete a mi comunidad de fanáticos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                onClick={() => scrollToSection('historia')}
              >
                Conoce mi Historia
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
                onClick={() => scrollToSection('fans')}
              >
                Únete a los Fans
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
                <p className="text-gray-600">Trofeos Ganados</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <Star className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
                <p className="text-gray-600">Goles en Carrera</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">10K+</h3>
                <p className="text-gray-600">Seguidores</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beyond Section */}
      <section id="beyond" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Beyond the Field</h2>
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
      <section id="historia" className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mi Historia</h2>
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
      <section id="fans" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comunidad de Fans</h2>
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

      {/* Tienda Section */}
      <section id="tienda" className="py-20 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tienda Oficial</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lleva contigo un pedazo de la pasión y el espíritu deportivo con nuestra línea oficial de productos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Camiseta Oficial", price: "$89.99", category: "Ropa" },
              { name: "Balón Autografiado", price: "$159.99", category: "Coleccionables" },
              { name: "Gorra Deportiva", price: "$34.99", category: "Accesorios" },
              { name: "Poster Firmado", price: "$49.99", category: "Memorabilia" }
            ].map((product, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                    <ShoppingBag className="w-16 h-16 text-gray-400" />
                  </div>
                  <Badge className="mb-2 bg-gray-100 text-gray-800">{product.category}</Badge>
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-green-600 mb-4">{product.price}</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Comprar Ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Ver Toda la Tienda
            </Button>
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
                Twitter
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Facebook
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
