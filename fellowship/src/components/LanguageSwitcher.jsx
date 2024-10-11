import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './languageSwitcher.css';

import englishFlag from '../images/flag_English.png';
import turkishFlag from '../images/flag_Turkish.png';
import uzbekFlag from '../images/flag_Uzbek.png';
import dutchFlag from '../images/flag_Dutch.png';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  // initialize loading state to ensure language is loaded before rendering the app
  const [loading, setLoading] = useState(true);

  // initialize language from localStorage or default to i18n.language
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('selectedLanguage') || i18n.language
  );

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage).then(() => {
        setLoading(false); // finish loading after language is set
      });
    } else {
      setLoading(false); // no need to change language, finish loading
    }
  }, [i18n]);

  useEffect(() => {
    // save selectedLanguage to local storage
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language); // Update i18n language
    setSelectedLanguage(language); // Update state for flag display
    setIsOpen(false);
  };

  const languageOptions = [
    { code: 'en', flag: englishFlag, alt: 'English' },
    { code: 'tr', flag: turkishFlag, alt: 'Türkçe' },
    { code: 'uz', flag: uzbekFlag, alt: 'Uzbek' },
    { code: 'nl', flag: dutchFlag, alt: 'Dutch' }
  ];

  // Show a loader or fallback UI while language is being set
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or any loading UI
  }

  return (
    <div className="languageSwitcherContainer">
      <div className="languageSwitcher" onClick={toggleDropdown}>
        <img
          src={languageOptions.find(lang => lang.code === selectedLanguage).flag}
          alt={selectedLanguage}
          className="languageFlag"
        />
        {isOpen && (
          <div className="dropdownMenu">
            {languageOptions
              .filter(lang => lang.code !== selectedLanguage)
              .map(lang => (
                <div key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
                  <img src={lang.flag} alt={lang.alt} className="dropdownFlag" />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
