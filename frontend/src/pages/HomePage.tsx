import { MapView } from '../components/MapView'

export function HomePage() {
  return (
    <div
      style={{ position: 'relative', height: '100svh', width: '100%', overflow: 'hidden' }}
      className="bg-gray-200"
    >
      {/* Carte plein écran */}
      <MapView />

      {/* Dégradé pour lisibilité du header sur la carte */}
      <div
        style={{ pointerEvents: 'none' }}
        className="absolute inset-x-0 top-0 z-10 h-48 bg-gradient-to-b from-black/50 to-transparent"
        aria-hidden="true"
      />

      {/* UI overlay */}
      <div className="absolute inset-x-0 top-0 z-20 flex flex-col gap-3 p-4 sm:p-6">
        {/* Titre */}
        <header>
          <div className="flex items-center gap-2">
            <span className="text-3xl" role="img" aria-label="Accessibilité">
              ♿
            </span>
            <h1 className="text-2xl font-bold tracking-tight text-white drop-shadow-md sm:text-3xl">
              HandiPark
            </h1>
          </div>
          <p className="mt-0.5 text-sm text-white/75 drop-shadow sm:text-base">
            Points d&apos;intérêt accessibles · Île de la Réunion
          </p>
        </header>

        {/* Champ de recherche */}
        <div className="w-full max-w-sm sm:max-w-md">
          <label htmlFor="search-poi" className="sr-only">
            Rechercher des points d&apos;intérêt
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </span>
            <input
              id="search-poi"
              type="search"
              placeholder="Points d'intérêt"
              className="w-full rounded-2xl bg-white py-3 pl-10 pr-4 text-sm text-gray-800 shadow-xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-base"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
