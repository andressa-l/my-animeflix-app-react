// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//     return (
//       <>
//         <footer className="footer">
//           <div className='container'>
            
//             <div className='box'>
//               <ul className='flex'>
//                 <li>Termos de Uso</li>
//                 <li>Politíca de Privacidade</li>
//                 <li>Comunidade</li>
//                 <li>FAQ</li>
//                 <li>AnimeList</li>
//               </ul>
//               <p>© 2024 ANIMEFLIX. Todos os direitos reservados. Todos os vídeos e programas nesta plataforma são marcas registradas e todas as imagens e conteúdos relacionados são de propriedade da <a href='https://jikan.moe/' target='_blank'>Jikan API</a>. Todos os direitos reservados.</p>
//             </div>
//             <div className='box'>
//                 <h3>Follow Us</h3>
//                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className='fab fa-facebook-f'></i></a>
//                 <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter'></i></a>
//                 <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><i className='fab fa-github'></i></a>
//                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className='fab fa-instagram'></i></a>
                
//             </div>
//             <div className='box'>
//               <h3>AnimeFlix App <span className='breve'>(em breve)</span></h3>
//               <div className='img flexSB'>
//                 <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' />
//                 <span>App Store</span>
//                 <img src='https://img.icons8.com/fluency/48/000000/google-play.png' />
//                 <span>Google Play Store</span>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </>
//     )
//   }

// export default Footer;
import React from 'react';
import './Footer.css';

const Footer = () => {
  
  const [email, setEmail] = React.useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    alert('Você se inscreveu com o e-mail: ' + email);
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="box">
            <ul className="flex">
              <li>Termos de Uso</li>
              <li>Politíca de Privacidade</li>
              <li>Comunidade</li>
              <li>FAQ</li>
              <li>AnimeList</li>
            </ul>
            <p>
              © 2024 ANIMEFLIX. Todos os direitos reservados. Todos os vídeos e
              programas nesta plataforma são marcas registradas e todas as
              imagens e conteúdos relacionados são de propriedade da{' '}
              <a href="https://jikan.moe/" target="_blank">
                Jikan API
              </a>
              . Todos os direitos reservados.
            </p>
          </div>
          <div className="box">
            <h3>Follow Us</h3>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="box">
            <h3>
              AnimeFlix App <span className="breve">(em breve)</span>
            </h3>
            <div className="img flexSB">
              <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png" />
              <span>App Store</span>
              <img src="https://img.icons8.com/fluency/48/000000/google-play.png" />
              <span>Google Play Store</span>
            </div>
          </div>
          <div className="grid-6 flex-column-start">
            <h4>Quer ser avisado dos novos posts da comunidade? </h4>

            <div className="flex mt-2 w-100">
              <input
                type="text"
                className="w-100"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={handleChange}
              />
              <button className="btn b-0 ml-1 w-50" onClick={handleSubmit}>
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
