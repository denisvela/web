import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
const Historia = () => {
  return <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider bg-gradient-to-r from-amber-600 via-red-600 to-purple-600 bg-clip-text text-transparent">HISTORIA </h1>
          <p className="text-xl text-gray-300 mt-4">
            El viaje completo desde mis humildes inicios hasta convertirme en jugador profesional
          </p>
        </div>
      </div>

      {/* Trayectoria Section */}
      <div className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <Card className="p-8 mb-16">
            <CardContent>
              <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-amber-600 via-red-600 to-purple-600 bg-clip-text text-transparent px-[10px] mx-[7px] my-[45px] py-[15px]">Trayectoria </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p>
                  Denis Vela dio sus primeros pasos en el fútbol profesional a una edad inusualmente temprana con la UD Socuéllamos. Allí, bajo la tutela y el aliento constante de su padre, fue puliendo un talento natural que ya despuntaba. Sin embargo, una grave enfermedad de un familiar y la posterior mudanza de su padre a Brasil alteraron el rumbo de su vida deportiva: Denis tuvo que regresar a su localidad natal con su madre y, sin recursos ni un club de nivel a su alcance, el balón quedó en pausa.
                </p>
                
                <p>
                  Tras un periodo de búsqueda, se incorporó al Badia del Vallès con la promesa de portar el dorsal 10 en el primer equipo. Pero un cambio de directiva al año siguiente lo relegó al banquillo de Segunda Regional. Desmotivado y con escasas posibilidades de moverse por falta de apoyo económico, decidió canalizar su energía en el Breaking, disciplina que acabaría enriqueciendo su habilidad atlética y su expresión corporal.
                </p>
                
                <p>
                  En el Breaking cosechó una trayectoria plagada de competiciones y trofeos, llegando incluso a realizar competiciones en el ámbito internacional. Aunque el baile se convirtió en una nueva pasión, nunca se desvinculó del fútbol: participó con regularidad en torneos locales y de la provincia de Barcelona para mantener vivo su instinto competitivo.
                </p>
                
                <p>
                  El punto de inflexión llegó cuando un amigo lo invitó a la Liga ADLC, un prestigioso torneo anual de fútbol 11 retransmitido para Latinoamérica y con presencia de jugadores de primer nivel. Denis participó en 14 encuentros, firmó goles memorables y alcanzó los cuartos de final. Aquel escaparate reavivó su convicción: <strong>debía regresar a las grandes ligas</strong>.
                </p>
                
                <p>
                  Se fijó entonces un reto singular y simbólico: <strong>anotar en un partido profesional y celebrar el gol con un paso de breaking</strong>, convirtiéndose en el primer futbolista en hacerlo. Esa meta, que fusiona sus dos grandes pasiones, lo motivó al máximo y marcó su retorno al fútbol profesional a los 28 años.
                </p>
                
                <p>
                  Hoy, Denis Vela continúa representando el breaking dentro del fútbol, honrando una disciplina que le ayudó a reinventarse y a potenciar facetas impensadas de su juego. Su historia es la prueba de que perseverancia y autenticidad pueden converger para crear un estilo único—dentro y fuera del terreno de juego.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <div className="space-y-16">
            
            {/* 2008 - Primeros pasos */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <Card className="p-8">
                  <CardContent>
                    <Badge className="mb-4 bg-blue-100 text-blue-800">2008 - Los Inicios</Badge>
                    <h3 className="text-3xl font-bold mb-4">Los Primeros Pasos</h3>
                    <p className="text-gray-600 mb-4">
                      Todo comenzó en las calles polvorientas de mi barrio, donde improvisamos una pelota 
                      con trapos y botellas plásticas. Era todo lo que teníamos, pero era suficiente para 
                      alimentar mi pasión por el fútbol.
                    </p>
                    <p className="text-gray-600">
                      Mi familia, aunque con recursos limitados, siempre creyó en mi potencial. 
                      Mi madre trabajaba largas horas para conseguir mis primeros zapatos de fútbol, 
                      y mi padre me acompañaba a entrenar en bicicleta cada tarde después del trabajo.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:w-1/2 h-80 bg-gradient-to-br from-blue-200 to-green-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-center px-4">Primeros entrenamientos en el barrio</p>
              </div>
            </div>

            {/* 2012 - Club local */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <Card className="p-8">
                  <CardContent>
                    <Badge className="mb-4 bg-green-100 text-green-800">2012 - Club Local</Badge>
                    <h3 className="text-3xl font-bold mb-4">Primeros Logros</h3>
                    <p className="text-gray-600 mb-4">
                      A los 14 años, logré ingresar al equipo juvenil del club local. Era un sueño hecho realidad, 
                      pero también el inicio de sacrificios más grandes. Levantarme a las 5 AM para entrenar antes 
                      de ir a la escuela se convirtió en rutina.
                    </p>
                    <p className="text-gray-600">
                      Mi primera victoria importante llegó cuando ganamos el campeonato regional juvenil. 
                      Esa medalla de oro, aunque pequeña, representaba años de trabajo duro y esperanza.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:w-1/2 h-80 bg-gradient-to-br from-green-200 to-yellow-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-center px-4">Primer trofeo con el club juvenil</p>
              </div>
            </div>

            {/* 2015 - Debut profesional */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <Card className="p-8">
                  <CardContent>
                    <Badge className="mb-4 bg-purple-100 text-purple-800">2015 - Debut Profesional</Badge>
                    <h3 className="text-3xl font-bold mb-4">El Salto al Profesionalismo</h3>
                    <p className="text-gray-600 mb-4">
                      Mi debut profesional fue el 15 de marzo de 2015, a los 17 años. Recuerdo cada detalle: 
                      el peso de la camiseta, el rugido de la multitud, la responsabilidad de representar no solo 
                      al club, sino a mi familia y comunidad.
                    </p>
                    <p className="text-gray-600">
                      Los primeros meses fueron desafiantes. La velocidad del juego profesional era completamente 
                      diferente, pero cada entrenamiento, cada partido, me hacía más fuerte y más sabio.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:w-1/2 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-center px-4">Debut profesional - Marzo 2015</p>
              </div>
            </div>

            {/* 2018 - Primer gol profesional */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <Card className="p-8">
                  <CardContent>
                    <Badge className="mb-4 bg-yellow-100 text-yellow-800">2018 - Primer Gol</Badge>
                    <h3 className="text-3xl font-bold mb-4">El Momento Dorado</h3>
                    <p className="text-gray-600 mb-4">
                      Mi primer gol profesional llegó en el minuto 89 de un partido crucial. 
                      Era un cabezazo tras un córner, y cuando la pelota cruzó la línea, 
                      sentí que todos mis sacrificios habían valido la pena.
                    </p>
                    <p className="text-gray-600">
                      Esa noche llamé a mi madre llorando de felicidad. Era más que un gol; 
                      era la confirmación de que el niño que jugaba con trapos en las calles 
                      había llegado lejos.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:w-1/2 h-80 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-center px-4">Celebración del primer gol profesional</p>
              </div>
            </div>

            {/* 2020-2024 - Evolución */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <Card className="p-8">
                  <CardContent>
                    <Badge className="mb-4 bg-red-100 text-red-800">2020-2024 - Consolidación</Badge>
                    <h3 className="text-3xl font-bold mb-4">Madurez y Liderazgo</h3>
                    <p className="text-gray-600 mb-4">
                      Los últimos años han sido de crecimiento personal y profesional. 
                      He aprendido que ser jugador profesional va más allá del talento; 
                      requiere disciplina mental, liderazgo y responsabilidad social.
                    </p>
                    <p className="text-gray-600">
                      Hoy, cada vez que entro al campo, cargo conmigo no solo mis sueños, 
                      sino los de todos los niños que, como yo, sueñan con llegar lejos 
                      desde lugares humildes.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:w-1/2 h-80 bg-gradient-to-br from-red-200 to-purple-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-center px-4">Liderazgo en el campo</p>
              </div>
            </div>

          </div>

          {/* Beyond Section - Moved from Index */}
          <section className="py-20 bg-blue-950">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent relative">
                Más allá...
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-full mx-auto w-24"></div>
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Más que un jugador, soy una persona comprometida con causas sociales, 
                el desarrollo comunitario y la inspiración de las nuevas generaciones.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Impacto Social</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4"></div>
                    <p className="text-gray-300">Fundación para jóvenes en situación de vulnerabilidad</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4"></div>
                    <p className="text-gray-300">Programas de educación deportiva en comunidades rurales</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4"></div>
                    <p className="text-gray-300">Embajador de valores deportivos y Fair Play</p>
                  </div>
                </div>
              </div>
              <Card className="p-8 bg-gray-800 border-gray-700">
                <CardContent>
                  <blockquote className="text-lg italic text-gray-300 mb-4">
                    "El fútbol me ha dado todo, y es mi responsabilidad devolver a la comunidad 
                    lo que el deporte me ha enseñado: disciplina, trabajo en equipo y perseverancia."
                  </blockquote>
                  <cite className="text-green-400 font-semibold">— Denis Vela</cite>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to action */}
          <div className="text-center mt-16">
            <Card className="p-8 max-w-2xl mx-auto">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">La Historia Continúa</h3>
                <p className="text-gray-600 mb-6">
                  Cada partido es una nueva página en mi historia. Cada entrenamiento, 
                  una oportunidad de crecer. El viaje apenas está comenzando.
                </p>
                <Link to="/">
                  <Button className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white px-8 py-3">
                    Volver al Inicio
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default Historia;