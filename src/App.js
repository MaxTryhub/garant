import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/footer";
import PhoneContainer from "./components/phone_container";
import Modal from "./components/forms/form";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";

function App() {
  const advantagesRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutCompanyRef = useRef(null);
  const galleryRef = useRef(null);
  const footerRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Используем useMemo для кэширования navItems
  const navItems = useMemo(
    () => [
      { name: "Переваги", ref: advantagesRef },
      { name: "Послуги", ref: servicesRef },
      { name: "Про компанію", ref: aboutCompanyRef },
      { name: "Галерея", ref: galleryRef },
      { name: "Контакти", ref: footerRef },
    ],
    [advantagesRef, servicesRef, aboutCompanyRef, galleryRef, footerRef]
  );

  const scrollToRef = (ref) => {
    if (ref.current) {
      const headerOffset = 160; // Высота вашего фиксированного заголовка
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = useCallback(() => {
    navItems.forEach((item, index) => {
      const section = item.ref.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const headerOffset = 300;
        if (rect.top <= headerOffset && rect.bottom >= headerOffset) {
          setActiveIndex(index);
        }
      }
    });
  }, [navItems]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="app">
      <PhoneContainer />
      <Header
        navItems={navItems}
        scrollToRef={scrollToRef}
        activeIndex={activeIndex}
      />
      <Main
        advantagesRef={advantagesRef}
        servicesRef={servicesRef}
        aboutCompanyRef={aboutCompanyRef}
        galleryRef={galleryRef}
        onOrderClick={() => setIsModalOpen(true)}
      />

      <Footer ref={footerRef} />
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
