import React, { useState, useEffect } from "react";
import AdminHeader from "./layouts/AdminHeader";
import AdminSideBar from "./layouts/AdminSideBar";
import AdminFooter from "./layouts/AdminFooter";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { Tag } from "antd";

export default function MedicineTypes() {
  var counter = 1;
  const [medTypes, setMedTypes] = useState([]);
  const medTypesCollectionRef = collection(db, "medicine_types");
  const getTypes = async () => {
    const data = await getDocs(medTypesCollectionRef);
    setMedTypes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const handleDeleteButton = async (id) => {
    const categoryDoc = doc(medTypesCollectionRef, id);
    await deleteDoc(categoryDoc);
    getTypes();
  };
  useEffect(() => {
    getTypes();
  }, []);
  return (
    <>      <AdminHeader />
      <AdminSideBar />
      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <h4 className="page-title">Location</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="card card-tasks">
                  <div className="card-header ">
                    <h4 className="card-title">
                      location List{" "}
                      <Link to="/addtype" className="btn btn-sm float-right" style={{
                        background:"#25408D",
                        color:"white"
                      }}>
                        Add new location
                      </Link>{" "}
                    </h4>
                  </div>
                  <div className="card-body ">
                    <div className="table-full-width px-5 py-4 table-striped">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>location</th>
                            <th>RFID</th>
                           
    <th>Patient Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                              <tr>
                                <td>1</td>
                                <td>483 Orn Manors Apt. 955</td>
                                <td>327384</td>
                             
                                <td>Leo</td> 
                                <td className="td-actions">
                                  <div className="form-button-action">
                                    <Link to="/updatetype">
                                      <button
                                        type="button"
                                        className="btn btn-link btn-success">
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
                                <td>8118 Reynolds Mission</td>
                               
                                <td>896575</td>
                                <td>Elon</td>  
                                <td className="td-actions">
                                  <div className="form-button-action">
                                    <Link to="/updatetype">
                                      <button
                                        type="button"
                                        className="btn btn-link btn-success">
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
                              </tr> <tr>
                                <td>3</td>
                                <td>186 Vanessa Haven</td>
                              
                                <td>867595</td>
                            
                                <td>Justine</td>
                                <td className="td-actions">
                                  <div className="form-button-action">
                                    <Link to="/updatetype">
                                      <button
                                        type="button"
                                        className="btn btn-link btn-success">
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
                                <td>348 Batz Extensions </td>
                               
                                <td>774783</td>
                      
                                <td>Baber</td> 
                                <td className="td-actions">
                                  <div className="form-button-action">
                                    <Link to="/updatetype">
                                      <button
                                        type="button"
                                        className="btn btn-link btn-success">
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
                                <td>5</td>
                                <td>348  Extensions </td>
                               
                              
                                <td> 3234343</td>
                                <td>Not allocated</td> 
                                <td className="td-actions">
                                  <div className="form-button-action">
                                    <Link to="/updatetype">
                                      <button
                                        type="button"
                                        className="btn btn-link btn-success">
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
                              </tr> <tr>
                                <td>6</td>
                                <td>348 Batz Extensions </td>
                                <td>774783</td>
                              
                                <td>Not allocated</td> 
                                <td className="td-actions">
                                  <div className="form-button-action">
                                    <Link to="/updatetype">
                                      <button
                                        type="button"
                                        className="btn btn-link btn-success">
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
