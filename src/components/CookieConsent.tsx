"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [isOpenRequiredDesc, setIsOpenRequiredDesc] = useState(false);
  const [isOpenAnalyticalDesc, setIsOpenAnalyticalDesc] = useState(false);
  const [isOpenMarketingDesc, setIsOpenMarketingDesc] = useState(false);

  const [isAnalytical, setIsAnalytical] = useState(false);
  const [isMarketing, setIsMarketing] = useState(false);

  useEffect(() => {
    const consentCookie = Cookies.get("cookieConsent");
    if (!consentCookie) {
      setIsOpen(true);
    }
  }, []);

  const saveSettings = (consentData: {
    required: boolean;
    analytical: boolean;
    marketing: boolean;
  }) => {
    Cookies.set("cookieConsent", JSON.stringify(consentData), {
      expires: 365,
    });
  };

  const handleAcceptAll = () => {
    const consentData = { required: true, analytical: true, marketing: true };
    saveSettings(consentData);
    setIsOpen(false);
  };

  const handleSaveSettings = () => {
    const consentData = {
      required: true,
      analytical: isAnalytical,
      marketing: isMarketing,
    };
    saveSettings(consentData);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[1000px]">
        {showSettings ? (
          <>
            <h2 className="text-lg font-semibold">Ciastko ciastku nierówne.</h2>
            <p className="mt-2 text-xs text-gray-600">
              Wykorzystujemy trzy rodzaje ciasteczek. W tym miejscu możesz
              przejść na ciasteczkową dietę i je zablokować, choć będziemy Ci
              bardzo wdzięczni jeśli pozostawisz je włączone. Dzięki temu wiemy
              w co klikasz i kupujesz, dzięki czemu możemy ulepszać nasz sklep
              dla Ciebie i następnych zakupowiczów.
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Więcej informacji znajdziesz w naszej{" "}
              <a
                href="https://prezentowe-emocje.pl/polityka-prywatnosci"
                className="text-primary hover:underline"
              >
                Polityce Prywatności.
              </a>
            </p>

            <div className="mt-4">
              <h3 className="text-md font-semibold">Ustawienia ciasteczek:</h3>
              <div className="mt-2">
                <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 my-2">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setIsOpenRequiredDesc(!isOpenRequiredDesc)}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked
                        disabled
                        id="cookies_required"
                        className="w-5 h-5 cursor-not-allowed accent-gray-400"
                      />
                      <label
                        htmlFor="cookies_required"
                        className="font-semibold text-gray-700"
                      >
                        Wymagane
                      </label>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-300 ${
                        isOpenRequiredDesc ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <path
                        d="M2 5L7 10L12 5"
                        stroke="#746E78"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {isOpenRequiredDesc && (
                    <p className="mt-2 text-[10px] text-gray-600">
                      Tego rodzaju pliki cookie nie mogą być wyłączone, gdyż są
                      one niezbędne do prawidłowego działania naszej strony.
                      Dzięki temu możemy przechowywać dane o Twoim zalogowaniu,
                      zawartości koszyka czy produktach dodanych do listy
                      ulubionych. Przechowują one również informacje o
                      wszelkiego rodzaju konfiguracji funkcji naszej strony, np.
                      filtrów i wyszukiwania. Jeśli chcesz, możesz ręcznie
                      deaktywować wszystkie pliki cookie z poziomu Twojej
                      przeglądarki internetowej. Może to jednak doprowadzić do
                      sytuacji, w której nie będziesz w stanie sprawnie
                      korzystać z naszego serwisu i napotkasz błędy.
                    </p>
                  )}
                </div>
                <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 my-2">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() =>
                      setIsOpenAnalyticalDesc(!isOpenAnalyticalDesc)
                    }
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="cookies_analytical"
                        className="w-5 h-5 accent-gray-400"
                        checked={isAnalytical}
                        onChange={(e) => setIsAnalytical(e.target.checked)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <label
                        htmlFor="cookies_analytical"
                        className="font-semibold text-gray-700"
                      >
                        Funkcjonalne i analityczne
                      </label>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-300 ${
                        isOpenAnalyticalDesc ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <path
                        d="M2 5L7 10L12 5"
                        stroke="#746E78"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {isOpenAnalyticalDesc && (
                    <p className="mt-2 text-[10px] text-gray-600">
                      Tego rodzaju pliki cookie pozwalają nam analizować
                      zachowanie naszych klientów i mierzyć wykorzystanie
                      poszczególnych funkcji w naszym serwisie. Dzięki temu
                      ciągle uczymy się i dowiadujemy co należy poprawić a co
                      usunąć. W szczególności, jeśli chodzi o błędy. Ciasteczka
                      tego rodzaju należą do nas lub zaufanych partnerów,
                      podmiotów współpracujących i stron trzecich. Pozwalają nam
                      one analizować skąd przychodzą do nas użytkownicy oraz
                      jakie strony w naszym serwisie odwiedzają. Dane te są w
                      pełni zanonimizowane - rozpoznanie na ich podstawie
                      pojedynczego użytkownika nie jest możliwe.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 my-2">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setIsOpenMarketingDesc(!isOpenMarketingDesc)}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="cookies_marketing"
                      className="w-5 h-5 accent-gray-400"
                      checked={isMarketing}
                      onChange={(e) => setIsMarketing(e.target.checked)}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <label
                      htmlFor="cookies_marketing"
                      className="font-semibold text-gray-700"
                    >
                      Personalizacja i marketing
                    </label>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${
                      isOpenMarketingDesc ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      d="M2 5L7 10L12 5"
                      stroke="#746E78"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {isOpenMarketingDesc && (
                  <p className="mt-2 text-[10px] text-gray-600">
                    Tego rodzaju pliki cookie - należące zarówno do nas jak i
                    naszych partnerów i stron trzecich - są wykorzystywane w
                    celu wyświetlania Ci dopasowanych i odpowiednich treści i
                    reklam na stronach internetowych. Dotyczy to zarówno
                    personalizacji w obrębie naszego serwisu jak i na
                    zewnętrznych stronach trzecich. Dzięki tym ciasteczkom
                    próbujemy przewidzieć najbardziej odpowiednie dla Ciebie
                    treści i produkty by nie wyświetlać Ci tych, które
                    najprawdopodobniej Cię nie zainteresują. Dane te są
                    zanonimizowane - rozpoznanie na ich podstawie pojedynczego
                    użytkownika nie jest możliwe. Wyłączenie tych ciastek nie
                    zablokuje wyświetlania reklam naszej witryny, lecz będą one
                    dobierane losowo bez określonych kryteriów dopasowanych do
                    Ciebie.
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setShowSettings(false)}
              >
                Kontynuuj z wybranymi
              </button>
              <button
                className="px-4 py-2 text-sm bg-primary text-white rounded hover:bg-blue-700"
                onClick={handleSaveSettings}
              >
                Zapisz ustawienia
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold">Pliki Cookies</h2>
            <p className="mt-2 text-[10px] text-gray-600">
              Prezentowe-emocje korzysta z plików cookie (tzw. ciasteczek) by
              zapewnić właściwe funkcjonowanie serwisu i tworzyć bezpieczną i
              wygodną przestrzeń dla Twoich zakupów. Wybierając opcję “Akceptuję
              Ciasteczka”, wyrażasz zgodę na stosowanie plików cookie i innych
              technologii w celu przetwarzania Twoich danych, dopasowaniu i
              wyświetlaniu personalizowanych treści lub reklam i mierzeniu ich
              skuteczności. Dane mogą zostać przekazane do naszych Zaufanych
              Partnerów (w tym partnerów reklamowych w sieciach takich jak
              Google czy Facebook), którzy również korzystają z plików cookie i
              innych technologii w celu personalizacji, pomiaru i analizy
              działań reklamowych. Jeśli nie chcesz wyrazić zgody, zmienić jej
              zakres lub wycofać udzieloną zgodę, skorzystaj z przycisku
              “Zarządzaj ustawieniami ciastek i śledzenia”. Więcej informacji na
              temat ciasteczek oraz administratora Twoich danych znajdziesz w
              naszej{" "}
              <a
                href="https://prezentowe-emocje.pl/polityka-prywatnosci"
                className="text-primary hover:underline"
              >
                polityce prywatności.
              </a>
              .
            </p>
            <div className="mt-4 flex justify-end gap-2 ">
              <button
                className="px-4 py-2 text-sm bg-primary text-white rounded hover:bg-white hover:text-primary border border-primary"
                onClick={handleAcceptAll}
              >
                Akceptuję Ciasteczka
              </button>
            </div>
            <div className="mt-4 flex justify-end gap-2 text-[12px] hover:text-primary">
              <button onClick={() => setShowSettings(true)}>
                Zarządzaj ustawieniami ciasteczek i śledzenia
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
