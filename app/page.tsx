"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, BookOpen, Globe, Star, Sparkles, GraduationCap } from "lucide-react"

export default function ThankYouPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentQuote, setCurrentQuote] = useState(0)

  const quotes = [
    "Merci pour votre patience et votre dévouement extraordinaire",
    "Dziękuję za wszystko, co dla mnie robiłaś",
    "Vous êtes une enseignante exceptionnelle et inspirante",
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Éléments flottants */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Heart className="w-6 h-6 text-rose-400 opacity-70" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Star className="w-5 h-5 text-yellow-400 opacity-70" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <Sparkles className="w-7 h-7 text-pink-400 opacity-70" />
        </div>
        <div className="absolute top-60 right-10 animate-float-delayed">
          <BookOpen className="w-6 h-6 text-blue-400 opacity-70" />
        </div>
        <div className="absolute bottom-20 right-40 animate-float">
          <Globe className="w-5 h-5 text-green-400 opacity-70" />
        </div>
        <div className="absolute top-32 left-1/2 animate-float-delayed">
          <Star className="w-4 h-4 text-purple-400 opacity-60" />
        </div>
        <div className="absolute bottom-60 left-1/3 animate-float">
          <Heart className="w-5 h-5 text-rose-300 opacity-50" />
        </div>
      </div>

      <div className="relative z-10">
        {/* En-tête */}
        <header
          className={`text-center pt-16 pb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Merci Beaucoup
            </h1>
            <Heart className="w-8 h-8 text-rose-400 animate-pulse" />
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Un remerciement sincère à une enseignante extraordinaire
          </p>
        </header>

        {/* Contenu principal */}
        <main className="container mx-auto px-4 pb-16">
          {/* Carte principale */}
          <Card
            className={`max-w-4xl mx-auto mb-12 shadow-2xl border-0 bg-gray-800/80 backdrop-blur-sm transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="flex justify-center gap-2 mb-6">
                  <Badge variant="secondary" className="bg-red-900/50 text-red-300 hover:bg-red-800/50 border-red-700">
                    🇵🇱 Polonaise
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-900/50 text-blue-300 hover:bg-blue-800/50 border-blue-700"
                  >
                    🇾🇪 Yemen
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-yellow-900/50 text-yellow-300 hover:bg-yellow-800/50 border-yellow-700"
                  >
                    🇧🇪 Belgique
                  </Badge>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6">
                  À Ma Formidable Professeure Polonaise
                </h2>

                <div className="relative h-16 mb-8">
                  <p
                    className={`absolute inset-0 text-lg md:text-xl text-gray-300 italic transition-all duration-500 ${currentQuote === 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  >
                    "{quotes[0]}"
                  </p>
                  <p
                    className={`absolute inset-0 text-lg md:text-xl text-gray-300 italic transition-all duration-500 ${currentQuote === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  >
                    "{quotes[1]}"
                  </p>
                  <p
                    className={`absolute inset-0 text-lg md:text-xl text-gray-300 italic transition-all duration-500 ${currentQuote === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  >
                    "{quotes[2]}"
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-200 leading-relaxed">
                <p className="text-center mb-6">
                  Ce qui vous rend vraiment spéciale, ce n'est pas seulement votre incroyable capacité à enseigner le
                  français, mais aussi la perspective unique que vous apportez en tant qu'enseignante polonaise en
                  Belgique. Vous m'avez montré que l'apprentissage des langues va bien au-delà de la grammaire et du
                  vocabulaire—il s'agit de connecter les cultures, de partager des histoires et de construire des ponts
                  entre différents mondes.
                </p>

                <p className="text-center mb-6">
                  Votre patience, votre dévouement et votre passion pour l'enseignement ont rendu chaque cours un
                  plaisir. Vous m'avez aidé(e) non seulement à apprendre le français, mais aussi à apprécier la belle
                  complexité de la communication multilingue. À travers vos yeux, j'ai vu comment la langue peut être un
                  pont entre la Pologne, la France et la Belgique—et comment une seule enseignante peut faire toute la
                  différence.
                </p>

                <p className="text-center font-medium text-purple-300">
                  Merci pour tout ce que vous faites. Vous êtes vraiment appréciée ! 💜
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cartes d'appréciation */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card
              className={`group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-rose-900/40 to-pink-900/40 hover:scale-105 backdrop-blur-sm border border-rose-700/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-500`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-rose-800/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-rose-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">Passion</h3>
                <p className="text-gray-300">Votre amour pour l'enseignement brille dans chaque leçon</p>
              </CardContent>
            </Card>

            <Card
              className={`group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 hover:scale-105 backdrop-blur-sm border border-blue-700/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-700`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-800/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">Pont Culturel</h3>
                <p className="text-gray-300">Connecter magnifiquement les cultures polonaise, française et belge</p>
              </CardContent>
            </Card>

            <Card
              className={`group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-green-900/40 to-emerald-900/40 hover:scale-105 backdrop-blur-sm border border-green-700/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-900`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-800/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-green-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">Dévouement</h3>
                <p className="text-gray-300">
                  Votre engagement envers la réussite des étudiants est vraiment inspirant
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Message final */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 text-2xl font-medium text-purple-300 mb-4">
              <Sparkles className="w-6 h-6" />
              <span>Avec toute ma gratitude</span>
              <Sparkles className="w-6 h-6" />
            </div>
            <p className="text-gray-400 text-lg">De votre élève reconnaissant <a href="https://mohamedalakhaly.github.io/my-portfolio/" className="text-white">Mohamed</a> 🎓</p>
          </div>
        </main>
      </div>
    </div>
  )
}
