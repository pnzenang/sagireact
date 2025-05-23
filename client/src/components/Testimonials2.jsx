import testimonyUser from '../assets/images/testimonyUser.png';

const Card9 = () => {
  return (
    <section className='bg-gray-1 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]'>
      <div className='mb-[60px] max-w-[700px] lg:mb-[70px] text-center mx-auto'>
        <h2 className='mb-3 text-3xl font-bold  leading-[1.2] text-base-content sm:text-4xl md:text-[40px]'>
          What People Say about SAGI !
        </h2>
        <p className='text-base-content'>
          SAGI has brought joy to countless Cameroonian families and today has
          shown the way to so many similar cameroonians organizations,and some
          have voiced their satisfaction.
        </p>
      </div>
      <div className='container mx-auto align-element'>
        <div className='-mx-4 flex flex-wrap justify-center'>
          <SingleCard
            // CardTitle='Ready for SaaS Websites Crafted by TailGrids'
            titleHref='#'
            CardDescription=' Deux (2) membres decedes et repatries en 2 ans coutent pres de $300 par membre avec cette ancienne formule inefficace, alors qu’avec la SAGI les memes $300 enveront le corps de plus de 150 freres et soeurs jusque dans leur villages. Les membres de leurs familles recevront egalement une envelope de pres $5000 (cinq mil dollars) pour l’organisation des obseques.'
            authorImg={testimonyUser}
            authorName='Pecky PENE'
            authorTitle='President HKAM'
          />
          <SingleCard
            // CardTitle='Ready for SaaS Websites Crafted by TailGrids'
            titleHref='#'
            CardDescription='The majority of Cameroonians who are neither home owners nor car owners list the death of a loved one in America as their largest single expenditure – other than a trip to the emergency room…. But that may be over now. An association has come to the rescue with a scheme where members spend a maximum of $2.00 and the corpse is taken all the way to the village in Cameroon.'
            authorImg={testimonyUser}
            authorName='Innocent Chia'
            authorTitle='Citizen Journalist'
          />
          <SingleCard
            // CardTitle='Ready for SaaS Websites Crafted by TailGrids'
            titleHref='#'
            CardDescription='LE MERVEILLEUX CADEAU DE LA SAGI: $ 1.95 DE CONTRIBUTION PAR DECES Il y’a de cela quelques annees seulement, le repatriement de la depouille des camerounais decedes’ aux Etats-Unis etait tres difficile, tres complique’ et tres cher. C’etait l’epreuve la plus terrifiante pour une famille et une communaute’. Plusieurs solutions ont ete’ experimentees’, mais SAGI a enfin trouve la cle, Dieu merci.'
            authorImg={testimonyUser}
            authorName='Alliance Tchokonte'
            authorTitle='Awesome Group Las Vegas'
          />
        </div>
      </div>
    </section>
  );
};
export default Card9;

const SingleCard = ({
  CardDescription,
  CardTitle,
  titleHref,
  authorImg,
  authorName,
  authorTitle,
}) => {
  return (
    <div className='w-full px-4 md:w-1/2 lg:w-1/3 '>
      <div className='mb-8 rounded-lg bg-base-200 px-6 py-8 shadow-lg duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card sm:px-8 lg:px-6 xl:px-8'>
        <h3>
          <a
            href={titleHref}
            className='mb-3 block text-lg font-bold leading-tight text-dark hover:text-primary dark:text-white sm:text-xl sm:leading-tight lg:text-lg lg:leading-tight xl:text-xl xl:leading-tight'
          >
            {CardTitle}
          </a>
        </h3>
        <p className='mb-6 text-center font-medium leading-relaxed text-body-color dark:text-dark-6'>
          {CardDescription}
        </p>
        <div className='flex items-center'>
          <div className='mr-3 h-[40px] w-full max-w-[40px] overflow-hidden rounded-full'>
            <img src={authorImg} alt='image' className='w-full' />
          </div>
          <div className='w-full'>
            <h5 className='text-sm font-semibold text-dark text-primary sm:text-base'>
              {authorName}
            </h5>
            <p className='text-xs font-medium text-body-color dark:text-dark-6'>
              {authorTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
