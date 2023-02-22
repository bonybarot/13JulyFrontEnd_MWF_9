import React,{ useLayoutEffect } from 'react';
import axios from 'axios';
const Allusers = () => {
  // useLayoutEffect(()=>{
  //   console.log("called");
  //   return ()=>{
  //     console.log("did mound");
  //   }
  // })
  useLayoutEffect(async ()=>{
    console.log("called");
    let url = "https://justjayapi.000webhostapp.com/allusers";
            let LoginRes = await axios.get(url).then(function (response) {
                    console.log("success response",response);
                    // return false
                    return response;
                }).catch(function (error) {
                    console.log("If error");
                    console.log(error);
                })
  })
  return (
    <>
      <main>
              <div className="page-header">
                <h1>All Users</h1>
                <small>Home / Dashboard</small>
              </div>

              <div className="page-content">
                
                <div className="records table-responsive">
                  <div className="record-header">
                    <div className="add">
                      <span>Entries</span>
                      <select name="" id="">
                        <option value="">ID</option>
                      </select>
                      <button>Add record</button>
                    </div>

                    <div className="browse">
                      <input
                        type="search"
                        placeholder="Search"
                        className="record-search"
                      />
                      <select name="" id="">
                        <option value="">Status</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <table width="100%">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>
                            <span className="las la-sort"></span> CLIENT
                          </th>
                          <th>
                            <span className="las la-sort"></span> TOTAL
                          </th>
                          <th>
                            <span className="las la-sort"></span> ISSUED DATE
                          </th>
                          <th>
                            <span className="las la-sort"></span> BALANCE
                          </th>
                          <th>
                            <span className="las la-sort"></span> ACTIONS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </main>
    </>
  );
};

export default Allusers;