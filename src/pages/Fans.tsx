import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Trophy, Calendar, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
const Fans = () => {
  return <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 bg-clip-text text-transparent">
            Último Partido en Vivo
          </h1>
          <p className="text-xl text-gray-300 mt-4">
            Revive la emoción y únete a nuestra comunidad de seguidores
          </p>
        </div>
      </div>

      {/* Video Section */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-5xl">
              <div className="relative aspect-video">
                <iframe src="https://sportnet.sme.sk/futbalnet/z/zsfz/zapas/668fcc21b1444d2ac675ba32/videozaznam/" title="Denis Vela - Último Partido en Vivo" className="absolute inset-0 w-full h-full rounded-lg shadow-2xl" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Partido Destacado</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Un partido lleno de emociones donde pudimos demostrar nuestro mejor nivel de juego. 
              Cada jugada cuenta la historia de dedicación y trabajo en equipo.
            </p>
          </div>
        </div>
      </section>

      {/* Comunidad de Fans */}
      <section className="py-20 bg-gray-100 text-gray-900">
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
            <div className="w-full max-w-2xl">
              <img src="https://scontent-mrs2-1.xx.fbcdn.net/v/t39.30808-6/499732034_1118749313631177_1066404946131252977_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TPrHLC4CuQIQ7kNvwEzt2Id&_nc_oc=AdkF-g6w8ZX6PARu5p4_KWHy5fJmWOW-rVnLqVg694Vun9gwJQUKqtD8vNG6AsM6BIM&_nc_zt=23&_nc_ht=scontent-mrs2-1.xx&_nc_gid=1G0eiKNL56w-Yn81fnmJqw&oh=00_AfNslc77d6_A9u1e8pqmUkECI-mOAocGjx_43dwnrpIvig&oe=684954FC" alt="Comunidad de Fans Denis Vela" className="w-full h-auto rounded-lg shadow-lg object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Eventos</h3>
                <p className="text-gray-600 mb-4">
                  Únete a eventos exclusivos y experiencias únicas con Denis Vela.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Ver Eventos
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Estadísticas de la comunidad */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-[43px]">
            <Card className="p-6 text-center px-0 py-0">
              <CardContent className="bg-gray-950">
                <Instagram className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-pink-500 mb-2">10k</div>
                <p className="text-zinc-300">Seguidores Activos</p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
                <blockquote className="text-gray-600 italic mb-4">
                  "Seguir a Denis ha sido increíble. Su dedicación y pasión inspiran a toda nuestra familia."
                </blockquote>
                <cite className="text-green-600 font-semibold">— María González, Fan desde 2018</cite>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
                <blockquote className="text-gray-600 italic mb-4">
                  "La comunidad de Denis es como una gran familia. Nos apoyamos y celebramos juntos cada victoria."
                </blockquote>
                <cite className="text-blue-600 font-semibold">— Carlos Rodríguez, Miembro VIP</cite>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/">
              <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3">
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Fans;