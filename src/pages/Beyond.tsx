import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, Trophy, Brain, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
const Beyond = () => {
  return <div className="min-h-screen bg-gray-900 text-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-[13px] px-0 mx-[74px] my-[5px]">
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
      <section className="bg-gray-800 px-[14px] mx-0 py-0 my-[20px]">
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
                <img src="/lovable-uploads/f68ceb52-d483-44d1-8709-302444ea3955.png" alt="Nitra stadium" className="w-full h-full object-cover" />
              </div>
              <p className="text-center text-sm text-gray-400 mt-2">Nitra stadium</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 text-gray-900 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-amber-300">
          <div className="text-center mb-16 text-zinc-50">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Filosofía</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto bg-neutral-900">En los últimos cinco años, la ciencia del rendimiento ha evolucionado de medir kilos levantados a valorar calidad de movimiento, resiliencia articular y equilibrio neuro-vegetativo. Las artes marciales, combinadas con elementos acrobáticos y prácticas de atención plena, constituyen mi modelo de -CONTROL CORPORAL- gracias a la disciplina del -Breaking-</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500 bg-gray-950">
              <CardContent className="p-0 bg-gray-950">
                <Star className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-100">Movilidad Avanzada</h3>
                <p className="mb-4 text-zinc-300">
                  Un estudio polaco con karatekas encontró correlación directa entre movilidad de hombro y 
                  adaptaciones articulares específicas sin comprometer la salud estructural.
                </p>
                <p className="text-sm text-amber-400">
                  En Taekwondo, 14 sesiones elevaron la flexibilidad de cadera un 50% (p = 0,002), 
                  validando protocolos intensivos de las artes marciales.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-green-500 bg-gray-950">
              <CardContent className="p-0">
                <Shield className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-green-600">Fuerza Funcional</h3>
                <p className="mb-4 text-gray-300">
                  La fuerza construida lanzando golpes y proyecciones es multiplanar y reactiva. 
                  Un ensayo con 146 sujetos demostró mejoras significativas en estabilidad articular.
                </p>
                <p className="text-sm text-amber-400">
                  12 semanas de karate vs entrenamiento convencional: solo el grupo marcial 
                  mejoró equilibrio y prevención de esguinces.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-500 bg-slate-950">
              <CardContent className="p-0">
                <Heart className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-purple-500">Técnica de Caídas</h3>
                <p className="mb-4 text-gray-300">
                  El 70% de lesiones traumáticas ocurren durante aterrizajes. El concepto japonés 
                  <em> ukemi</em> enseña a distribuir la energía del impacto.
                </p>
                <p className="text-sm text-yellow-400">
                  Practicantes de judo cometen 60% menos errores al caer y sufren menos 
                  fracturas que controles activos (241 sujetos estudiados).
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500 bg-slate-950">
              <CardContent className="p-0">
                <Zap className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-orange-500">Explosividad</h3>
                <p className="mb-4 text-gray-50">
                  Los flips y salidas de grappling son pliometría avanzada con rotación. 
                  Meta-análisis 2024 mostró mejoras significativas en sprint y cambios de dirección.
                </p>
                <p className="text-sm text-amber-500">
                  6-8 semanas de entrenamiento: Hedges g = 0,42–1,01 en salto vertical 
                  y capacidad explosiva en jóvenes futbolistas.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-red-500 bg-gray-950">
              <CardContent className="p-0">
                <Trophy className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-red-500">Prevención Integral</h3>
                <p className="mb-4 text-zinc-300">
                  El tridente movilidad-fuerza-técnica reduce simultáneamente riesgo y severidad 
                  de lesiones: menos LCA, acromioclaviculares y esguinces.
                </p>
                <p className="text-sm text-yellow-500">
                  Flexibilidad + fuerza multiplanar + técnica de caída = 
                  protección articular completa y menor pérdida de partidos.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-indigo-500 bg-gray-950">
              <CardContent className="p-0">
                <Brain className="w-12 h-12 text-indigo-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-sky-500">Meditación & Recuperación</h3>
                <p className="mb-4 text-gray-300">
                  La reactivación parasimpática se mide por HRV. Técnicas de respiración consciente 
                  aceleran el restablecimiento del sistema vagal.
                </p>
                <p className="text-sm text-amber-400">
                  8 semanas de mindfulness aumentaron HRV y redujeron ansiedad competitiva 
                  más que la imaginería motora en atletas universitarios.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Training Session */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Sesión Integradora de Referencia (60 min)</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-sm font-bold">10'</div>
                <p className="text-sm">Calentamiento dinámico + movilidad</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-sm font-bold">10'</div>
                <p className="text-sm">Running 2 km (Z2-Z3)</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-sm font-bold">15'</div>
                <p className="text-sm">Circuito marcial–acrobático</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-sm font-bold">15'</div>
                <p className="text-sm">Breakdance (footwork + power moves)</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-sm font-bold">10'</div>
                <p className="text-sm">Enfriamiento + meditación</p>
              </div>
            </div>
          </div>

          {/* Key Conclusions */}
          <div className="mt-16 bg-white rounded-lg p-8 border-l-4 border-purple-600">
            <h3 className="text-2xl font-bold mb-6 text-purple-600">Conclusiones Operativas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">🥋 Más movilidad = menos lesiones</h4>
                <p className="text-gray-600 text-sm">Los datos confirman que las artes marciales alcanzan rangos articulares que amortiguan picos de tensión.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">💪 Fuerza que se mueve</h4>
                <p className="text-gray-600 text-sm">La potencia en giros y patadas supera la especificidad de la sala de pesas.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">🤸 Caer bien es clave</h4>
                <p className="text-gray-600 text-sm">Dominar ukemi reduce fracturas y dislocaciones en deportes de contacto.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">🧘 La mente dirige la recuperación</h4>
                <p className="text-gray-600 text-sm">5-10 minutos de mindfulness mejoran la activación vagal post-entrenamiento.</p>
              </div>
            </div>
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
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Gracias al *Breaking me desarrolle en el futbol y medio una alternativa de ir más allá.</p>
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
    </div>;
};
export default Beyond;