import React, { useState, useEffect } from "react";
import AdminHeader from "./layouts/AdminHeader";
import AdminSideBar from "./layouts/AdminSideBar";
import AdminFooter from "./layouts/AdminFooter";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

export default function Inventory() {
  var counter = 1;
  const [medicines, setMedicines] = useState([]);
  const medicinesCollectionRef = collection(db, "medicine_inventory");
  const getTypes = async () => {
    const data = await getDocs(medicinesCollectionRef);
    setMedicines(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const handleDeleteButton = async (id) => {
    const medDoc = doc(medicinesCollectionRef, id);
    await deleteDoc(medDoc);
    getTypes();
  };
  useEffect(() => {
    getTypes();
  }, []);
  return (
    <>
      <AdminHeader />
      <AdminSideBar />
      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <h4 className="page-title">Medicine Stocks</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="card card-tasks">
                  <div className="card-header ">
                    <h4 className="card-title">
                    Medicine List{" "}
                      <Link to="/addmedicine" className="btn btn-sm float-right" style={{
                        background:"#25408D",
                        color:"white"
                      }}>
                        Add new Medicine
                      </Link>{" "}
                    </h4>
                  </div>
                  <div className="card-body ">
                    <div className="table-full-width px-5 py-4 table-striped">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>
                              Medicine Name<sup>Power</sup>
                            </th>
                            <th>Medicine Category</th>
                            <th>Medicine Type</th>
                            <th>Stock</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                              <tr>
                                <td>1</td>
                                <td>
                                Dolo 
                                  <sup>600</sup>
                                </td>
                                <td>Analgesics</td>
                                <td>Prescription vs. Over-the-Counter (OTC)   </td>
                                <td>600</td>
                                <td className="td-actions">
                                  <div className="form-button-action">
                                    <Link to="/updatemedicine">
                                      <button
                                        type="button"
                                        className="btn btn-link btn-success"
                                       >
                                        <i className="la la-edit"></i>
                                      </button>
                                    </Link>
                                    <button
                                      type="button"
                                     
                                      className="btn btn-link btn-danger">
                                      <i className="la la-times"></i>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>
                                dolo      
                                  <sup>650mg</sup>
                                </td>
                                <td>Antibiotics   </td>
                                <td>Prescription vs. Over-the-Counter (OTC)   </td>
                                <td>221</td>
                                <td className="td-actions">
                                  <div className="form-button-action">
                                    <Link to="/updatemedicine">
                                      <button
                                        type="button"
                                        className="btn btn-link btn-success"
                                       >
                                        <i className="la la-edit"></i>
                                      </button>
                                    </Link>
                                    <button
                                      type="button"
                                     
                                      className="btn btn-link btn-danger">
                                      <i className="la la-times"></i>
                                    </button>
                                  </div>
                                </td>
                              </tr>    <tr>
                                <td>3</td>
                                <td>
                                Paracetamol
                                  <sup>500mg</sup>
                                </td>
                                <td>Analgesics</td>
                                <td>Prescription vs. Over-the-Counter (OTC)   </td>
                                <td>20</td>
                                <td className="td-actions">
                                  <div className="form-button-action">
                                    <Link to="/updatemedicine">
                                      <button
                                        type="button"
                                        className="btn btn-link btn-success"
                                       >
                                        <i className="la la-edit"></i>
                                      </button>
                                    </Link>
                                    <button
                                      type="button"
                                     
                                      className="btn btn-link btn-danger">
                                      <i className="la la-times"></i>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>
                                Paracetamol
                                  <sup>100mg</sup>
                                </td>
                                <td>Analgesics</td>
                                <td>Prescription vs. Over-the-Counter (OTC)   </td>
                                <td>20</td>
                                <td className="td-actions">
                                  <div className="form-button-action">
                                    <Link to="/updatemedicine">
                                      <button
                                        type="button"
                                        className="btn btn-link btn-success"
                                       >
                                        <i className="la la-edit"></i>
                                      </button>
                                    </Link>
                                    <button
                                      type="button"
                                     
                                      className="btn btn-link btn-danger">
                                      <i className="la la-times"></i>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
