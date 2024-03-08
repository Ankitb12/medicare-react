import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "antd";
import AdminHeader from "./layouts/AdminHeader";
import AdminSideBar from "./layouts/AdminSideBar";
import AdminFooter from "./layouts/AdminFooter";
import { db } from "../firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

const EquipmentList = (props) => {
  const [equipment, setEquipment] = useState([]);
  const equipmentCollectionReference = collection(db, "equipment");

  const generateRandomData = () => {
    const randomData = [];
    const equipmentNames = [
      "Wheel Chair",
      "X-Ray Machine",
      "Ventilator",
      "Anesthesia Machine",
      "Surgical Table",
      "ECG Machine",
      "Ultrasound Machine",
      "Defibrillator",
      "Hospital Bed",
      "MRI Machine",
    ];
    const locations = [
      "Emergency Department",
      "Operating Room",
      "Intensive Care Unit",
      "Radiology Department",
      "Laboratory",
      "Patient Ward",
      "Outpatient Clinic",
      "Rehabilitation Center",
    ];
    equipmentNames.forEach((name, index) => {
      randomData.push({
        name: name,
        category: `Category ${index + 1}`,
        manufacturer: `Manufacturer ${index + 1}`,
        serialNumber: `SN-${Math.floor(Math.random() * 10000)}`,
        status: Math.random() < 0.5 ? "Allocated" : "Not Allocated",
        location: locations[Math.floor(Math.random() * locations.length)],
        purchaseDate: `2022-01-${Math.floor(Math.random() * 28) + 1}`,
        warrantyExpiry: `2025-01-${Math.floor(Math.random() * 28) + 1}`,
      });
    });
    return randomData;
  };

  const getEquipment = async () => {
    // You can replace this line with your actual data retrieval logic
    const data = generateRandomData();
    setEquipment(data);
  };

  const handleDeleteButton = async (id) => {
    // Add your delete logic here
    console.log(`Delete equipment with ID: ${id}`);
  };

  useEffect(() => {
    getEquipment();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  
  
    {
      title: "Serial Number",
      dataIndex: "serialNumber",
      key: "serialNumber",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Purchase Date",
      dataIndex: "purchaseDate",
      key: "purchaseDate",
    },
    {
      title: "Warranty Expiry",
      dataIndex: "warrantyExpiry",
      key: "warrantyExpiry",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
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
      ),
    },
  ];

  return (
    <>
      <AdminHeader />
      <AdminSideBar />
      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <h4 className="page-title">Equipment List</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="card card-tasks">
                  <div className="card-header ">
                    <h4 className="card-title">
                      All Equipment{" "}
                      <Link
                        to="/add-equipment"
                        className="btn btn-sm float-right"
                        style={{ background: "#25408D", color: "white" }}
                      >
                        Add New Equipment
                      </Link>
                    </h4>
                  </div>
                  <div className="card-body">
                    <Table columns={columns} dataSource={equipment} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdminFooter />
    </>
  );
};

export default EquipmentList;
