import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Clients } from "@modal";
import { useState } from "react";
import { clients } from "../../../service";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgba(35,137,218,1)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({ data }) {
  const [edit, setEdit] = useState({});
  const [open, setOpen] = useState(false);
  const deleteItem = async (id) => {
    try {
      const response = await clients.delete(id);
      response.status === 200 && window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const editItem = (item) => {
    setEdit(item);
    setOpen(true);
  };
  return (
    <>
      <Clients item={edit} open={open} handleClose={() => setOpen(false)} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">T/R</StyledTableCell>
              <StyledTableCell align="center">Created_at</StyledTableCell>
              <StyledTableCell align="center">Full Name</StyledTableCell>
              <StyledTableCell align="center">Id </StyledTableCell>
              <StyledTableCell align="center">Phone Number </StyledTableCell>
              <StyledTableCell align="center">Action </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center">{index + 1}</StyledTableCell>
                <StyledTableCell align="center">
                  {item.created_at}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {item.full_name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {item.id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {item.phone_number}
                </StyledTableCell>

                <StyledTableCell align="center">{item.amount}</StyledTableCell>
                <StyledTableCell align="center">{item.status}</StyledTableCell>
                <StyledTableCell align="center">
                  <div align="center" className="flex gap-3 justify-center">
                    <button onClick={() => editItem(item)}>
                      <EditIcon />
                    </button>
                    <button onClick={() => deleteItem(item.id)}>
                      {" "}
                      <DeleteIcon />
                    </button>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}