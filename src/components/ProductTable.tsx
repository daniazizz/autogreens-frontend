import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const products = [
  {
    name: "Kiwi Gold Zespri Jumbo Ravier",
    supplierA: 0.88,
    supplierB: 0.88,
    diff: 0,
  },
  { name: "Avocat", supplierA: 0.88, supplierB: 0.95, diff: 7.95 },
  { name: "Fraise", supplierA: 1.2, supplierB: 1.1, diff: -8.33 },
  {
    name: "Kiwi Gold Zespri Jumbo Ravier",
    supplierA: 0.88,
    supplierB: 0.88,
    diff: 0,
  },
  { name: "Avocat", supplierA: 0.88, supplierB: 0.95, diff: 7.95 },
  { name: "Fraise", supplierA: 1.2, supplierB: 1.1, diff: -8.33 },
  {
    name: "Kiwi Gold Zespri Jumbo Ravier",
    supplierA: 0.88,
    supplierB: 0.88,
    diff: 0,
  },
  { name: "Avocat", supplierA: 0.88, supplierB: 0.95, diff: 7.95 },
  { name: "Fraise", supplierA: 1.2, supplierB: 1.1, diff: -8.33 },
  {
    name: "Kiwi Gold Zespri Jumbo Ravier",
    supplierA: 0.88,
    supplierB: 0.88,
    diff: 0,
  },
  { name: "Avocat", supplierA: 0.88, supplierB: 0.95, diff: 7.95 },
  { name: "Fraise", supplierA: 1.2, supplierB: 1.1, diff: -8.33 },
  {
    name: "Kiwi Gold Zespri Jumbo Ravier",
    supplierA: 0.88,
    supplierB: 0.88,
    diff: 0,
  },
  { name: "Avocat", supplierA: 0.88, supplierB: 0.95, diff: 7.95 },
  { name: "Fraise", supplierA: 1.2, supplierB: 1.1, diff: -8.33 },
  {
    name: "Kiwi Gold Zespri Jumbo Ravier",
    supplierA: 0.88,
    supplierB: 0.88,
    diff: 0,
  },
  { name: "Avocat", supplierA: 0.88, supplierB: 0.95, diff: 7.95 },
  { name: "Fraise", supplierA: 1.2, supplierB: 1.1, diff: -8.33 },
  {
    name: "Kiwi Gold Zespri Jumbo Ravier",
    supplierA: 0.88,
    supplierB: 0.88,
    diff: 0,
  },
  { name: "Avocat", supplierA: 0.88, supplierB: 0.95, diff: 7.95 },
  { name: "Fraise", supplierA: 1.2, supplierB: 1.1, diff: -8.33 },
];

function ProductTable() {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Nom</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Cadencier</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Greenyard</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Diff</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.name}</TableCell>
              <TableCell
                align="center"
                style={{
                  color:
                    product.supplierA > product.supplierB ? "red" : "green",
                }}
              >
                {product.supplierA.toFixed(2)}{" "}
                {product.supplierA > product.supplierB ? "🔺" : "🔻"}
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color:
                    product.supplierB > product.supplierA ? "red" : "green",
                }}
              >
                {product.supplierB.toFixed(2)}{" "}
                {product.supplierB > product.supplierA ? "🔺" : "🔻"}
              </TableCell>
              <TableCell align="center">{product.diff.toFixed(2)}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductTable;
