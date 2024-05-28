import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          The Indian Red Cross is a voluntary humanitarian organization having a network of over 1200 branches throughout the country, providing relief in times of disasters/emergencies and promotes health & care of the vulnerable people and communities. It is a leading member of the largest independent humanitarian organization in the world, the International Red Cross & Red Crescent Movement. The movement has three main components, the International Committee of Red Cross (ICRC),  National Societies and International Federation of Red Cross and Red Crescent Societies.

The Mission of the Indian Red Cross is to inspire, encourage and initiate at all times all forms of humanitarian activities so that human suffering can be minimized and even prevented and thus contribute to creating more congenial climate for peace.

Indian Red Cross Society (IRCS) was established in 1920 under the Indian Red Cross Society Act and incorporated under Parliament Act XV of 1920. The act was last amended in 1992 and of rules were formed in 1994.
The IRCS has 36 State / Union Territories Branches with their more than 1200 districts and sub district branches.
Honourable President of India is the President and Hon'ble Union Health Minister is the Chairman of the Society.
The Vice Chairman is elected by the members of the Managing Body.
The National Managing Body consists of 18 members.
The Chairman and 6 members are nominated by the President. The remaining 12 are elected by the state and union territory branches through an electoral college.
The Managing Body is responsible for governance and supervision of the functions of the society through a number of committees.
The Secretary General is the Chief Executive of the Society.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
