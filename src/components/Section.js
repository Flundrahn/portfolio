// import React, { useState } from 'react';

// function Section({ title, description }) {
//   const expandedClass = 'is-expanded';
//   const hasExpandedClass = 'has-expanded-item';

//   const [expanded, setExpanded] = useState(false);

//     const initEvents = () => {
//       sections.forEach(element => {
//         element.addEventListener('click', () => openSection(element));
//       });
//       closeButtons.forEach(element => {
//         element.addEventListener('click', event => {
//           event.stopPropagation();
//           closeSection(element.parentElement);
//         });
//       });
//     };

//     const openSection = element => {
//       if (!element.classList.contains(expandedClass)) {
//         element.classList.add(expandedClass);
//         wrapper.classList.add(hasExpandedClass);
//       }
//     };

//     const closeSection = element => {
//       if (element.classList.contains(expandedClass)) {
//         element.classList.remove(expandedClass);
//         wrapper.classList.remove(hasExpandedClass);
//       }
//     };

//   return (
//     <section className={`section${expanded ? ' expanded' : ''}`} onClick={() => setExpanded(!expanded)}>
//       <div className="section__close-button">&times;</div>
//       <h3 className="section__title">{title}</h3>
//       <p className="section__text">{description}</p>
//     </section>
//   );
// }

// export default Section;
