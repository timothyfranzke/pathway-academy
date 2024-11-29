import React, { useState } from 'react';

const Logo = () => (
  <div className="flex flex-col items-center">
    <svg width="127" height="34" viewBox="0 0 127 34" className="h-9 overflow-visible">
      <g opacity="1" style={{ transform: 'none', transformOrigin: '17px 17px' }}>
        <path d="M19.5986 18.5005C18.7702 19.9354 16.9354 20.427 15.5005 19.5986C14.0656 18.7701 13.574 16.9354 14.4024 15.5005C15.2309 14.0656 17.0656 13.574 18.5005 14.4024C19.9354 15.2308 20.427 17.0656 19.5986 18.5005Z" />
      </g>
    </svg>
    <span className="text-[#238380] font-medium text-sm mt-1">Micro School</span>
  </div>
);

const NavItem = ({ href, children }) => (
  <div className="relative flex group/item">
    <BorderDecorations />
    <a 
      href={href}
      className="flex items-center px-4 py-3 text-base font-medium text-white bg-blend-multiply hover:bg-black/[2.5%]"
    >
      {children}
    </a>
  </div>
);

const BorderDecorations = () => (
  <>
    <svg viewBox="0 0 15 15" aria-hidden="true" className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2">
      <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
    </svg>
    <svg viewBox="0 0 15 15" aria-hidden="true" className="absolute size-[15px] fill-black/10 -top-2 -right-2">
      <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
    </svg>
    <svg viewBox="0 0 15 15" aria-hidden="true" className="hidden group-last/row:group-first/item:block absolute size-[15px] fill-black/10 -bottom-2 -left-2">
      <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
    </svg>
    <svg viewBox="0 0 15 15" aria-hidden="true" className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2">
      <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
    </svg>
  </>
);

const NewsButton = () => (
  <a 
    href="/blog/path-raises-funding" 
    className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white hover:bg-fuchsia-950/30"
  >
    Path Christian School receives major funding
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
      <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" />
    </svg>
  </a>
);

const MobileMenuButton = ({ onClick }) => (
  <button 
    onClick={onClick}
    className="flex size-12 items-center justify-center self-center rounded-lg hover:bg-black/5 lg:hidden"
    aria-label="Open main menu"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
      <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" />
    </svg>
  </button>
);

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="pt-12 sm:pt-16">
      <div className="relative flex justify-between">
        <div className="relative flex gap-6">
          <div className="py-3 group/item relative">
            <BorderDecorations />
            <a href="/" title="Home">
              <Logo />
            </a>
          </div>
          
        </div>

        <nav className="relative hidden lg:flex">
          <NavItem href="#mission">Our Mission</NavItem>
          <NavItem href="#about">Meet Sally</NavItem>
          <NavItem href="#gallery">Gallery</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </nav>

        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5 
        bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
        from-[#238380] from-[20%] via-[#87CEEB] via-[60%] to-[#4682B4] 
        sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"
      />
      
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <Header />
          
          <div className="flex flex-col lg:flex-row items-center pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32 gap-12">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 flex flex-col items-center relative">
              <div className="absolute inset-0 bg-white/75 backdrop-blur-xl rounded-3xl transform -rotate-1"></div>
              <div className="relative w-full p-6">
                <div className="aspect-square overflow-hidden w-full">
                  <img 
                    src="assets/hero.png"
                    alt="Hero"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[#238380] font-bold text-xl mt-4 block text-center -mt-16 lg:-mt-36 ">MICRO SCHOOL</span>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 lg:pl-12 relative">
              <div className="absolute inset-0 bg-white/50 backdrop-blur-xl rounded-3xl transform rotate-1"></div>
              <div className="relative p-6">
                <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight 
                  text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]"
                >
                  Small School, Big Impact
                </h1>
                
                <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
                  Transforming Lives Through Christ-Centered Education in a Safe and Nurturing Environment
                </p>
                
                <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                  <a 
                    href="#contact"
                    className="inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] 
                      rounded-full border border-transparent bg-gray-950 shadow-md whitespace-nowrap 
                      text-base font-medium text-white hover:bg-gray-800"
                  >
                    Reach Out
                  </a>
                  
                  <a 
                    href="#social-posts"
                    className="relative inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] 
                      rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15 
                      after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] 
                      whitespace-nowrap text-base font-medium text-gray-950 hover:bg-white/20"
                  >
                    Social Posts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header, Hero };