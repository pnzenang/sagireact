const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 pl-3 text-lg font-bold text-white lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b  border-primary bg-base-100  py-5 pl-12 text-left text-base font-medium uppercase`,
  TdStyle2: `text-dark border-b border-primary bg-base-100  py-5 pl-12 text-left text-base font-medium uppercase`,
};

const Table = () => {
  return (
    <section className=' dark:bg-dark lg:py-20 bg-base-200 mx-auto' id='death'>
      <div className='align-element'>
        <div className='flex flex-wrap '>
          <div className='w-full '>
            <div className='max-w-full overflow-x-auto '>
              <h1 className='text-2xl text-center sm:text-5xl py-10 font-bold '>
                Members for whom we are contributing this November 2024.
              </h1>
              <table className='w-full table-auto'>
                <thead className='text-center bg-primary'>
                  <tr>
                    <th className={TdStyle.ThStyle}> Matriculation </th>
                    <th className={TdStyle.ThStyle}> First Name(s) </th>
                    <th className={TdStyle.ThStyle}> Last & Middle Names </th>
                    <th className={TdStyle.ThStyle}> Registration Date </th>
                    <th className={TdStyle.ThStyle}> Date of Death </th>
                    <th className={TdStyle.ThStyle}> Location</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className={TdStyle.TdStyle}>BUANSAGIO33</td>
                    <td className={TdStyle.TdStyle2}>ODETTE SANDRA</td>
                    <td className={TdStyle.TdStyle}>MINKAM WAFFO</td>
                    <td className={TdStyle.TdStyle2}>25-Apr-17</td>
                    <td className={TdStyle.TdStyle}>01-JUL-24</td>
                    <td className={TdStyle.TdStyle}>MARYLAND</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>ACDASAGI142</td>
                    <td className={TdStyle.TdStyle2}>JOSHUA</td>
                    <td className={TdStyle.TdStyle}>CHENG O.</td>
                    <td className={TdStyle.TdStyle2}>1-Sep-24</td>
                    <td className={TdStyle.TdStyle}>19-Sep-24</td>
                    <td className={TdStyle.TdStyle}>GEORGIA</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>CCNJSAGI084</td>
                    <td className={TdStyle.TdStyle2}>PAULINE</td>
                    <td className={TdStyle.TdStyle}>MENYE </td>
                    <td className={TdStyle.TdStyle2}>25-JUL-20</td>
                    <td className={TdStyle.TdStyle}>2-oct-24</td>
                    <td className={TdStyle.TdStyle}>OHIO</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>CACHSAGI062</td>
                    <td className={TdStyle.TdStyle2}> LUCY </td>
                    <td className={TdStyle.TdStyle}>EKWOGE N </td>
                    <td className={TdStyle.TdStyle2}>25-Apr-15</td>
                    <td className={TdStyle.TdStyle}>19-Oct-24</td>
                    <td className={TdStyle.TdStyle}>TEXAS</td>
                  </tr>

                  <tr>
                    <td className={TdStyle.TdStyle}>LEBOSAGI190</td>
                    <td className={TdStyle.TdStyle2}>ERNESTINE </td>
                    <td className={TdStyle.TdStyle}>MBOLE ZE</td>
                    <td className={TdStyle.TdStyle2}>1-Aug-24</td>
                    <td className={TdStyle.TdStyle}>16-Oct-24</td>
                    <td className={TdStyle.TdStyle}>MASSACHUSETTS</td>
                  </tr>

                  <tr>
                    <td className={TdStyle.TdStyle}>MICASAGI106</td>
                    <td className={TdStyle.TdStyle2}>JOHN </td>
                    <td className={TdStyle.TdStyle}>CHE </td>
                    <td className={TdStyle.TdStyle2}>25-Jun-18</td>
                    <td className={TdStyle.TdStyle}>21-Oct-24</td>
                    <td className={TdStyle.TdStyle}>MINNESOTA</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>NOWERSAGI057</td>
                    <td className={TdStyle.TdStyle2}> JULIANA </td>
                    <td className={TdStyle.TdStyle}>
                      ATENGONG MAFORPE EPSE MBUH
                    </td>
                    <td className={TdStyle.TdStyle2}>25-JUN-20</td>
                    <td className={TdStyle.TdStyle}>23-Oct-24</td>
                    <td className={TdStyle.TdStyle}>Arizona</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>CABRSAGI018</td>
                    <td className={TdStyle.TdStyle2}> FLORE </td>
                    <td className={TdStyle.TdStyle}>BOMEDI AKOM</td>
                    <td className={TdStyle.TdStyle2}>1-Jul-24</td>
                    <td className={TdStyle.TdStyle}>24-oct-24</td>
                    <td className={TdStyle.TdStyle}>Massachusetts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
