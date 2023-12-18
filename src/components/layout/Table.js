import React from 'react';
import customerData from '../../customer.json';
import tripData from '../../tripInfo.json';
import paymentData from '../../payment.json';
import vehicleData from '../../vehicle.json';
import './Table.css';

function Table(props) {
  var dataType = props.dataType;
  var data = dataType;
  var tableHead = <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">BirthDate</th>
    <th scope="col">Email</th>
    <th scope="col">Phone</th>
    <th scope="col">Address</th>
    <th scope="col">PostCode</th>
    <th scope="col">JoinDate</th>
  </tr>

  if (dataType === "customer") {
    
      tableHead = <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">BirthDate</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Address</th>
        <th scope="col">PostCode</th>
        <th scope="col">JoinDate</th>
      </tr>
      data = customerData.map(item => {
        return (
          <tr>
            <th scope="row">{item.CustomerId}</th>
            <td>{item.FirstName} {item.LastName}</td>
            <td>{item.DateOfBirth}</td>
            <td>{item.Email}</td>
            <td>{item.Phone}</td>
            <td>{item.Address}</td>
            <td>{item.Postcode}</td>
            <td>{item.JoinDate}</td>
          </tr>
        )
      });
    } else if(dataType === "trip"){
      tableHead = <tr>
        <th scope="col">#</th>
        <th scope="col">Start Location LatLong</th>
        <th scope="col">End Location latLong</th>
        <th scope="col">Request Time</th>
        <th scope="col">Start Trip Time</th>
        <th scope="col">End Trip Time</th>
        <th scope="col">Amount</th>
        <th scope="col">Status</th>
      </tr>
      data = tripData.map(item => {
        return (
          <tr>
            <th scope="row">{item.CustomerId}</th>
            <td>{item.StartLatitudeTrip},{item.StartLongitudeTrip}</td>
            <td>{item.EndLatitudeTrip}, {item.EndLongitudeTrip}</td>
            <td>{item.RequestTripTime}</td>
            <td>{item.StartTripTime}</td>
            <td>{item.EndTripTime}</td>
            <td>{item.Amount}</td>
            <td>{item.Status}</td>
          </tr>
        )
      });

    }else if (dataType === "payment"){
      tableHead = <tr>
        <th scope="col">#</th>
        <th scope="col">Trip Amount</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Transaction Time</th>
        <th scope="col">Status</th>
      </tr>
      data = paymentData.map(item => {
        return (
          <tr>
            <th scope="row">{item.PaymentId}</th>
            <td>{item.TripAmount}</td>
            <td>{item.TransactionId}</td>
            <td>{item.TransactionTime}</td>
            <td>{item.Status}</td>
          </tr>
        )
      });

    }else if(dataType === "vehicle"){ 

      tableHead = <tr>
        <th scope="col">#</th>
        <th scope="col">License Plate</th>
        <th scope="col">Status</th>
        <th scope="col">Last Service</th>
        <th scope="col">Last Location LatLang</th>
        <th scope="col">Model</th>
        <th scope="col">Make</th>
        <th scope="col">LastTime</th>
      </tr>
      data = vehicleData.map(item => {
        return (
          <tr>
            <th scope="row">{item.VehicleId}</th>
            <td>{item.LicensePlate}</td>
            <td>{item.Status}</td>
            <td>{item.LastService}</td>
            <td>{item.Latitude}, {item.Longitude}</td>
            <td>{item.Model}</td>
            <td>{item.Make}</td>
            <td>{item.LastTime}</td>
          </tr>
        )
      });

    }


  return (
    <div className='scrollable'>
      <table class="table table-striped rounded mt-3">
        <thead>
          {tableHead}
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
      </div>
    
  );
}

export default Table