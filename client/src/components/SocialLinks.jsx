import socialLinks from '../utils/socialLinks';

const SocialLinks = () => {
  return (
    <section className=''>
      <ul className='social-icons flex items-center justify-between '>
        {socialLinks.map((link) => {
          const { id, site, icon } = link;
          return (
            <li
              key={id}
              className='hover:text-primary items-center mx-3  text-2xl'
            >
              <a href={site} className='social-icon'>
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SocialLinks;
