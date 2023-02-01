import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "cityName", label: "City Name", minWidth: 170 },
  {
    id: "startDate",
    label: "Start Date est.",
    minWidth: 50,
    align: "center",
    format: (value) => value.toISOString()("en-US"),
  },
  {
    id: "endDate",
    label: "End Date est.",
    minWidth: 50,
    align: "center",
    format: (value) => value.toISOString()("en-US"),
  },
  {
    id: "code",
    label: "Code",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "convertButton", label: "Completed", minWidth: 50, align: "center" },
];

function createData(cityName, startDate, endDate, code, convertButton) {
  return { cityName, startDate, endDate, code, convertButton };
}

const rows = [
  createData(
    "Barcelona",
    "05 October 2024",
    "25 October 2024",
    "12345TBD",
    "N"
  ),
  createData("London", "03 March 2024", "23 October 2024", "TBD", "N"),
  createData("Paris", "01 September 2024", "20 September 2024", "TBD", "N"),
];

export default function Wishlist() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
