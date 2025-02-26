import { Mail, Facebook, Youtube } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="relative h-[36vw] min-h-96 flex items-center justify-center text-center px-4">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80 hero"
        />
        <div className="relative z-10">
          <h1 className="font-courgette text-6xl md:text-8xl mb-8 animate-fade-in">
            Sarah and Silas
          </h1>
          <div className="space-x-4">
            <a 
              href="https://mailchi.mp/baaa15a34476/sarahandsilas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors"
            >
              Get Fun Emails!
            </a>
            <a 
              href="#music" 
              className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-full transition-colors"
            >
              Hear Music!
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Shows Section */}
      <section className="py-20 px-4" id="shows">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-courgette text-4xl md:text-5xl text-center mb-12">
            Upcoming Shows
          </h2>
          <div className="bg-slate-800/50 p-6 rounded-lg shadow-xl">
            <a 
              href="https://www.songkick.com/artists/10210021" 
              className="songkick-widget" 
              data-theme="dark" 
              data-other-artists="on" 
              data-track-button="on" 
              data-detect-style="true" 
              data-background-color="transparent" 
              data-locale="en"
              data-share-button="on" 
              data-country-filter="off" 
              data-rsvp="on" 
              data-request-show="on" 
              data-past-events="off" 
              data-past-events-offtour="off" 
              data-remind-me="off"
            >
              Sarah & Silas upcoming shows
              {/* Start "loader" placeholder */}
              <div className="flex animate-pulse space-x-4">
                <div className="size-10 rounded-full bg-gray-700"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 rounded bg-gray-700"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 h-2 rounded bg-gray-700"></div>
                      <div className="col-span-1 h-2 rounded bg-gray-700"></div>
                    </div>
                    <div className="h-2 rounded bg-gray-700"></div>
                  </div>
                </div>
              </div>
              {/* End "loader" placeholder */}  
            </a>
            {/* To make this work, the songkick <script> tag needs to go at the end of the page */}
          </div>
          <p className="text-center mt-8">
            Interested in hosting a house concert? Email us at{' '}
            <a href="mailto:hello@sarahandsilas.com" className="text-indigo-400 hover:text-indigo-300">
              hello@sarahandsilas.com
            </a>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-courgette text-4xl md:text-5xl text-center mb-12">
            Who are Sarah and Silas?
          </h2>
          <blockquote className="text-xl italic text-center mb-12">
            "Animated, amusing and accomplished ... the talented pair's future looks beaming, like their stage persona."
            <footer className="mt-4 text-sm">
              — Rob Dickens,{' '}
              <a 
                href="https://listeningthroughthelens.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
                listeningthroughthelens.com
              </a>
            </footer>
          </blockquote>
          <div className="space-y-6 text-lg">
            <p>
              Sarah (violin, vocals) and Silas (violin, guitar, vocals and other things...) 
              met at a music festival and quickly became festival sweethearts.
            </p>
            <p>
              They love to write heartfelt, thoughtful and intimate songs about love and life, 
              and their live performances enchant audiences and radiate warmth and charm.
            </p>
            <p>
              Sarah and Silas have been lucky enough to play music all over Australia and in 
              6 countries overseas (even Tasmania!) They were also nominated as Finalists of 
              the 2022 and 2023 Australian Folk Music Awards.
            </p>
            <p>
              They also often play with{' '}
              <a 
                href="https://theroyalhighjinx.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
                The Royal High Jinx
              </a>
              ,{' '}
              <a 
                href="https://thebeez.de/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
                The Beez
              </a>
              ,{' '}
              <a 
                href="https://thebushwackers.com.au/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
                The Bushwackers
              </a>
              {' '}and{' '}
              <a 
                href="https://alannaandalicia.bandcamp.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Alanna and Alicia
              </a>
              .
            </p>
            <p className="text-center font-semibold">
              Don't miss them at a festival near you!
            </p>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-20 px-4" id="music">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-courgette text-4xl md:text-5xl text-center mb-12">
            Releases
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-[35/47]">
              <iframe 
                style={{ border: 0, width: '100%', height: '100%' }}
                src="https://bandcamp.com/EmbeddedPlayer/album=3942729876/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
                seamless
                title="Hearts In My Coffee"
              />
            </div>
            <div className="aspect-[35/47]">
              <iframe 
                style={{ border: 0, width: '100%', height: '100%' }}
                src="https://bandcamp.com/EmbeddedPlayer/album=1851766441/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
                seamless
                title="Gold Standard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-courgette text-4xl md:text-5xl text-center mb-12">
            Remember 2020?
          </h2>
          <div className="aspect-video mb-6">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/videoseries?list=PLERPq41aU9makWuLO3hYuarjUMO1cE4gl"
              title="Lockdown - official video clip"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="text-center">
            <a 
              href="https://youtu.be/BprIRyxbTtw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300"
            >
              More videos here
            </a>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-courgette text-4xl md:text-5xl mb-12">
            Be Social
          </h2>
          <div className="flex justify-center gap-8 mb-8">
            <a 
              href="https://fb.me/sarahandsilas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition-colors"
            >
              <Facebook size={32} />
            </a>
            <a 
              href="https://youtu.be/BprIRyxbTtw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition-colors"
            >
              <Youtube size={32} />
            </a>
            <a 
              href="mailto:hello@sarahandsilas.com"
              className="text-white hover:text-indigo-400 transition-colors"
            >
              <Mail size={32} />
            </a>
          </div>
          <div className="space-y-4">
            <a 
              href="https://mailchi.mp/baaa15a34476/sarahandsilas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-indigo-400 hover:text-indigo-300"
            >
              Join our Mailing List
            </a>
            <a 
              href="https://sarahsilas.bandcamp.com/releases" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-indigo-400 hover:text-indigo-300"
            >
              Listen to our Music
            </a>
            <a 
              href="https://m.me/sarahandsilas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-indigo-400 hover:text-indigo-300"
            >
              Send Us a Message
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;