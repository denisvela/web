
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Beyond = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Más Allá
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Donde el fútbol trasciende los límites del campo y se convierte en arte, pasión y legado.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Más Allá del Juego
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Para mí, el fútbol no es solo un deporte, es una forma de vida que va más allá de los 90 minutos 
                en el campo. Es la combinación perfecta entre técnica, creatividad y expresión personal.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Mi objetivo es ser el primer jugador profesional en celebrar un gol con un movimiento de breaking, 
                fusionando dos mundos que me han formado como persona y atleta.
              </p>
              <Link to="/historia">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
                  Conoce Mi Historia
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/f68ceb52-d483-44d1-8709-302444ea3955.png" 
                  alt="Nitra stadium" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm text-gray-400 mt-2">Nitra stadium</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mi Filosofía
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían mi carrera y mi vida personal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-l-4 border-purple-500">
              <CardContent>
                <Heart className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Pasión</h3>
                <p className="text-gray-600">
                  Cada jugada, cada entrenamiento, cada momento en el campo nace desde el corazón. 
                  La pasión es el combustible que impulsa la excelencia.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-l-4 border-blue-500">
              <CardContent>
                <Star className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Innovación</h3>
                <p className="text-gray-600">
                  Romper barreras y crear nuevas formas de expresión en el deporte. 
                  La innovación nos lleva más allá de lo convencional.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-l-4 border-green-500">
              <CardContent>
                <Trophy className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Perseverancia</h3>
                <p className="text-gray-600">
                  Los obstáculos son oportunidades disfrazadas. La perseverancia 
                  transforma los sueños en realidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Mi Misión
          </h2>
          <blockquote className="text-xl italic text-gray-200 mb-8 leading-relaxed">
            "Inspirar a la próxima generación de atletas a que abrasen su autenticidad, 
            combinen sus pasiones y nunca se conformen con los límites establecidos. 
            El verdadero éxito está en ir más allá de lo que otros consideran posible."
          </blockquote>
          <div className="text-right">
            <cite className="text-purple-300 font-semibold">— Denis Vela</cite>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Únete al Viaje
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Sígueme en este camino donde cada partido es una oportunidad de crear historia 
            y cada momento es una chance de ir más allá.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/fans">
              <Button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-3">
                Ver Último Partido
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3">
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beyond;
