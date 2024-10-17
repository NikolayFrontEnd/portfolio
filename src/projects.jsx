import './projects.css';
import photo from './photos/IMG_35935.jpeg';
import { NavLink } from 'react-router-dom';
import sport from './photos/sport.png';
import portf from './photos/portfolio.png';
import dic from './photos/dic.png';
import uni from './photos/uni.png';
import hos from './photos/hospital.png';
import prpr from './photos/prpr.png';
import { useTranslation } from 'react-i18next';
import { useContext,useEffect } from 'react';
import { ThemeContext } from './App';
function Project() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Устанавливаем язык из localStorage при загрузке компонента
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  // Функция для смены языка
  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
    // Сохраняем выбранный язык в localStorage
    localStorage.setItem('language', newLanguage);
  };

    return (
      <>
        <div className="header3">
        <NavLink to="/" className="i">{t('nav_home')}</NavLink>
        <NavLink to="/projects" className="i">{t('nav_projects')}</NavLink>
        <NavLink to="/skills" className="i">{t('nav_skills')}</NavLink>
          
          <div onClick={changeLanguage} className="i">
            {i18n.language === 'ru' ? 'en' : 'ru'}
          </div>
          
          <div onClick={toggleTheme} className="i">
            {theme === 'light' ? '🌙' : '☀️'}
          </div>
        </div>
  
        <div className='proj'>{t('PROJ')}</div>
        <div className='smallCircle'></div>
  
        <div className="grid-container">
          <div className="grid-item">
            <div>
              <img className='blockPhoto2' src={sport} alt="Sport Site"/>
            </div>
            <div>
              <div className='wIblock'>{t('sport_site')}</div>
             <NavLink to = '/sport'>     <button className='btnBlue'>{t('see')}</button>   </NavLink>
            </div>
          </div>
  
          <div className="grid-item">
            <div>
              <img className='blockPhoto2' src={portf} alt="Portfolio Site"/>
            </div>
            <div>
              <div className='wIblock'>{t('portfolio_card')}</div>
              <NavLink to = '/port'>       <button className='btnBlue'>{t('see')}</button>  </NavLink>
            </div>
          </div>
  
          <div className="grid-item">
            <div>
              <img className='blockPhoto2' src={dic} alt="Dictionary App"/>
            </div>
            <div>
              <div className='wIblock'>{t('dictionary_app')}</div>
           <NavLink to = '/dict'>        <button className='btnBlue1'>{t('see')}</button>    </NavLink>  
            </div>
          </div>
  
          <div className="grid-item">
            <div>
              <img className='blockPhoto2' src={hos} alt="Hospital App"/>
            </div>
            <div>
              <div className='wIblock'>{t('hospital_app')}</div>
          <NavLink to = "/hos">          <button className='btnBlue'>{t('see')}</button>   </NavLink>  
            </div>
          </div>
  
          <div className="grid-item">
            <div>
              <img className='blockPhoto2' src={uni} alt="Student App"/>
            </div>
            <div>
              <div className='wIblock'>{t('student_app')}</div>
       <NavLink to ="/uni">        <button className='btnBlue1'>{t('see')}</button>   </NavLink>    
            </div>
          </div>
  
          <div className="grid-item">
            <div>
              <img className='blockPhoto2' src={prpr} alt="Portfolio Card"/>
            </div>
            <div>
              <div className='wIblock'>{t('portfolio_card')}</div>

            </div>
          </div>
        </div>
      </>
    );
  }

export default Project;