// import React from "react";
// import PropTypes from "prop-types"; // Import PropTypes
// import styles from "./articles.module.css";

// const ArticlesNew = ({ title, date, author, content, relatedArticles }) => {
//   return (
//     <main className={styles.articleMain}>
//       <div className={styles.containerArticle}>
//         <header className={styles.header}>
//           <p className={styles.tags}>
//             <span className={styles.tag}>Science & Nature</span>
//           </p>
//           <h1 className={styles.articleTitle}>{title}</h1>
//           <p className={styles.authorDate}>
//             <span className={styles.author}>{author}</span> Published on {date}
//           </p>
//         </header>

//         <section className={styles.articleContent}>
//           {content.map((section, index) => (
//             <div key={index} className={styles.contentSection}>
//               <h2 className={styles.sectionTitle}>{section.heading}</h2>
//               <p>{section.text}</p>
//               {section.image && (
//                 <figure>
//                   <img
//                     src={section.image.src}
//                     alt={section.image.alt}
//                     className={styles.articleImage}
//                   />
//                   <figcaption className={styles.imageCaption}>
//                     {section.image.caption}
//                   </figcaption>
//                 </figure>
//               )}
//             </div>
//           ))}
//         </section>

//         {relatedArticles && relatedArticles.length > 0 && (
//           <aside className={styles.relatedArticles}>
//             <h2>Related Articles</h2>
//             <ul>
//               {relatedArticles.map((article, index) => (
//                 <li key={index}>
//                   <a href={article.link} className={styles.relatedLink}>
//                     {article.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </aside>
//         )}
//       </div>
//     </main>
//   );
// };

// // PropTypes validation
// ArticlesNew.propTypes = {
//   title: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   content: PropTypes.arrayOf(
//     PropTypes.shape({
//       heading: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//       image: PropTypes.shape({
//         src: PropTypes.string.isRequired,
//         alt: PropTypes.string.isRequired,
//         caption: PropTypes.string.isRequired,
//       }),
//     })
//   ).isRequired,
//   relatedArticles: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       link: PropTypes.string.isRequired,
//     })
//   ),
// };

// export default ArticlesNew;


// // Props:

// // title: The main title of the article.
// // date: The published date of the article.
// // author: The name of the author.
// // content: An array of sections for the article content, where each section contains a heading, text, and optionally an image.
// // relatedArticles: An optional list of related articles, where each article has a title and link (URL).
// // Rendering Content:

// // The content array is mapped over to dynamically display each section, which includes a heading, text, and optional image. If the image exists, it is displayed with a caption.
// // The relatedArticles section is only displayed if there are any related articles.
