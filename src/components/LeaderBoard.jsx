import React from 'react';

const LeaderBoard = ({ leaderBoard }) => {
  console.log(leaderBoard);
  let category = Object.keys(leaderBoard);

  return (
    <div className='container my-3 p-2 mx-auto' style={{ maxWidth: '50%',backgroundColor:"#F7EAD0" }}> {/* Adjust the maxWidth here */}
      <h2 className='text-center'>LeaderBoard</h2>
      {/* leaderboard start */}
      {
        (category.length === 0) ? (<p className='text-center'>You're the first to score</p>) : (
          <>
            <table className="table table-bordered shadow">
              {/* table header section */}
              <thead>
                <tr>
                  <th scope="col">Subject</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              {/* table body */}
              <tbody>
                {
                  category.map((sub) => (
                    <tr key={sub}>
                      <td>{sub}</td>
                      <td>{leaderBoard[sub]}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </>
        )
      }
      {/* leaderboard end */}
    </div>
  );
};

export default LeaderBoard;