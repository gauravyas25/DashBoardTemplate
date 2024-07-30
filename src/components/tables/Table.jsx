import React from "react";
import "./Table.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () => {
    const rows = [
            {
              id: 1,
              product: "Wireless Mouse",
              imageUrl: "https://via.placeholder.com/150?text=Wireless+Mouse",
              customer: "John Doe",
              date: "2024-07-25",
              amount: 25.99,
              paymentMethod: "Credit Card",
              deliveryStatus: "Delivered"
            },
            {
              id: 2,
              product: "Bluetooth Headphones",
              imageUrl: "https://via.placeholder.com/150?text=Bluetooth+Headphones",
              customer: "Jane Smith",
              date: "2024-07-24",
              amount: 59.99,
              paymentMethod: "PayPal",
              deliveryStatus: "Shipped"
            },
            {
              id: 3,
              product: "Smartphone Stand",
              imageUrl: "https://via.placeholder.com/150?text=Smartphone+Stand",
              customer: "Alice Johnson",
              date: "2024-07-23",
              amount: 15.99,
              paymentMethod: "Debit Card",
              deliveryStatus: "Processing"
            },
            {
              id: 4,
              product: "Laptop Sleeve",
              imageUrl: "https://via.placeholder.com/150?text=Laptop+Sleeve",
              customer: "Bob Brown",
              date: "2024-07-22",
              amount: 29.99,
              paymentMethod: "Credit Card",
              deliveryStatus: "Delivered"
            },
            {
              id: 5,
              product: "USB-C Hub",
              imageUrl: "https://via.placeholder.com/150?text=USB-C+Hub",
              customer: "Carol White",
              date: "2024-07-21",
              amount: 35.99,
              paymentMethod: "PayPal",
              deliveryStatus: "Delivered"
            }          
    ];


    return(
        <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="table">
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell  className="tableCell">Date</TableCell>
              <TableCell  className="tableCell">Amount</TableCell>
              <TableCell  className="tableCell">Payment Method</TableCell>
              <TableCell  className="tableCell">Delivery Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table">
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}{row.name}</TableCell>
                <TableCell className="tableCell" >{row.product}</TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell" >{row.date}</TableCell>
                <TableCell className="tableCell" >{row.amount}</TableCell>
                <TableCell className="tableCell" >{row.paymentMethod}</TableCell>
                <TableCell className="tableCell" >{row.deliveryStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}


export default List;