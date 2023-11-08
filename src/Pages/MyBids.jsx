import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const MyBids = () => {
    const bids = useLoaderData()
    console.log(bids);
    
    return (
        <div>

<Helmet>
    <title>
      Online Marketplace| My Bids
    </title>
  </Helmet>

            <div className="overflow-x-auto mt-5">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>DeadLine</th>
                            <th>Status</th>
                            <th>Complete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        
                    {
                        bids.map(bid=>  <tr className="my-4" key={bid._id}>
                            <th></th>
                            <th>{bid.title}</th>
                            <th>{bid.email}</th>
                            <th>{bid.data}</th>
                            <th><button className="btn btn-sm">status</button></th>
                            <th><button className="btn btn-sm">Complete</button></th>
                            
                            
                        </tr>)
                    }

                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBids;