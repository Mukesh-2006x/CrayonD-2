import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar'; 
import Switch from '@mui/material/Switch'; 
import Worker from '../assets/worker.jpg'; 
import Emp from '../assets/emp2.jpeg';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import Meter from '../assets/meter.png';
import { styled } from '@mui/material/styles';




const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'destination', label: 'Destination', minWidth: 100 },
    { id: 'Department', label: 'Department', minWidth: 170, align: 'right' },
    { id: 'Signals', label: 'Signals', minWidth: 170, align: 'right' },
    { id: 'Overall_Performance', label: 'Overall Performance', minWidth: 170, align: 'right' },
    { id: 'Reporting_To', label: 'Reporting To', minWidth: 170, align: 'right' },
    { id: 'Role', label: 'Role', minWidth: 170, align: 'right' },
    { id: 'Email', label: 'Email', minWidth: 170, align: 'right' },
    { id: 'Experience', label: 'Experience', minWidth: 170, align: 'right' },
    { id: 'Status', label: 'Status', minWidth: 170, align: 'right' },
];

function createData(name, avatar, destination, Department, Signals, Overall_Performance, reportingToAvatar, Reporting_To, Role, Email, Experience, isActive) {
    return { name, avatar, destination, Department, Signals, Overall_Performance, reportingToAvatar, Reporting_To, Role, Email, Experience, isActive };
}

const rows = [
    createData('George Fernandes', Worker, 'Visual Designer', 'Design', "", "", Emp, "Steven ", "Employee", "georgefernandes1998@gmail.com", "3 Yrs 4 Mon", true,"Active"),
    createData('George Fernandes', Worker, 'Visual Designer', 'Design', "", "", Emp, "Steven ", "Employee", "georgefernandes1998@gmail.com", "3 Yrs 4 Mon", true),
    createData('George Fernandes', Worker, 'Visual Designer', 'Design', "", "", Emp, "Steven ", "Employee", "georgefernandes1998@gmail.com", "3 Yrs 4 Mon", true),
    createData('George Fernandes', Worker, 'Visual Designer', 'Design', "", "", Emp, "Steven ", "Employee", "georgefernandes1998@gmail.com", "3 Yrs 4 Mon", true),
    createData('George Fernandes', Worker, 'Visual Designer', 'Design', "", "", Emp, "Steven ", "Employee", "georgefernandes1998@gmail.com", "3 Yrs 4 Mon", true),
    createData('George Fernandes', Worker, 'Visual Designer', 'Design', "", "", Emp, "Steven ", "Employee", "georgefernandes1998@gmail.com", "3 Yrs 4 Mon", true),
    createData('George Fernandes', Worker, 'Visual Designer', 'Design', "", "", Emp, "Steven ", "Employee", "georgefernandes1998@gmail.com", "3 Yrs 4 Mon", true),

];


export const Home = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
    const [activeStatuses, setActiveStatuses] = React.useState(rows.map(row => row.isActive));

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleToggleActive = (index) => {
        const newActiveStatuses = [...activeStatuses];
        newActiveStatuses[index] = !newActiveStatuses[index];
        setActiveStatuses(newActiveStatuses);
    };
    const CustomSwitch = styled(Switch)(({ theme }) => ({
        width: 36,
        height: 20,
        padding: 0,
        display: 'flex',
        '&:active': {
          '& .MuiSwitch-thumb': {
            width: 18,
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(16px)',
          },
        },
        '& .MuiSwitch-switchBase': {
          padding: 1,
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: '#52d869', 
              opacity: 1,
              border: 'none',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          boxShadow: '0 2px 4px 0 rgba(0, 35, 11, 0.2)',
          width: 18,
          height: 18,
          borderRadius: 12,
          transition: theme.transitions.create(['width'], {
            duration: 200,
          }),
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          opacity: 1,
          backgroundColor: '#e4e4e4', 
          boxSizing: 'border-box',
        },
      }));

    return (
        <div>
            <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '0px', boxShadow: '0px 0px 8px 0px', transform: 'scale(0.8)', height: 'auto' ,scrollbarWidth:"none"}}>
                <TableContainer sx={{ height: 440, overflowY: 'auto',scrollbarWidth:"none" }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead style={{ fontFamily: 'Poppins, Medium', fontWeight: 700,fontSize:'18px' }}>
                            <TableRow >
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, textAlign: 'left',fontWeight: 700  ,fontFamily: 'Poppins, sans-serif'}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.length === 0 ? (
                                <TableRow >
                                    <TableCell colSpan={columns.length} align="center">
                                        No data available
                                    </TableCell>
                                </TableRow>
                            ) : (
                                rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.destination} >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align} style={{fontFamily: 'Poppins, sans-serif', fontSize: '12px', textAlign: 'left' }}>
                                                        {column.id === 'name' ? (
                                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                <Avatar alt={row.name} src={row.avatar} sx={{ marginRight: 1 }} style={{width:'32px',height:'32px'}} />
                                                                {row.name}
                                                            </div>
                                                        ) : column.id === 'Reporting_To' ? (
                                                            
                                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                <Avatar alt={row.Reporting_To} src={row.reportingToAvatar} sx={{ marginRight: 1 }}  style={{width:'32px',height:'32px'}} />
                                                                
                                                                {row.Reporting_To}<p style={{paddingLeft:'5px',color:'#49C792'}}> +3 More</p>
                                                            </div>
                                                        ) : 
                                                        
                                                        column.id === 'Signals' ? (
                                                            <Stack direction="row" spacing={1}>
                                                            <Avatar
                                                            sx={{ width:'3px',height:'3px',padding:'10px',background:'green'}}
                                                            alt="Remy Sharp"
                                                            src="/broken-image.jpg"
                                                          >
                                                            <p style={{fontSize:'15px'}}>C</p>
                                                            
                                                          </Avatar >
                                                           <Avatar
                                                           sx={{ width:'3px',height:'3px',padding:'10px',background:'#4C9E29'}}
                                                          
                                                         >
                                                           <p style={{fontSize:'15px'}}>E</p>
                                                           
                                                         </Avatar>
                                                          <Avatar
                                                          sx={{ width:'3px',height:'3px',padding:'10px',background:'#F2B824'}}
                                                          alt="Remy Sharp"
                                                          src="/broken-image.jpg"
                                                        >
                                                          <p style={{fontSize:'15px'}}>T</p>
                                                          
                                                        </Avatar>
                                                         <Avatar
                                                         sx={{ width:'3px',height:'3px',padding:'10px',background:'#F2B824'}}
                                                         alt="Remy Sharp"
                                                         src="/broken-image.jpg"
                                                       >
                                                         <p style={{fontSize:'15px'}}>D</p>
                                                         
                                                       </Avatar>
                                                        <Avatar
                                                        sx={{ width:'3px',height:'3px',padding:'10px',background:'#DE1010'}}
                                                        alt="Remy Sharp"
                                                        src="/broken-image.jpg"
                                                      >
                                                        <p style={{fontSize:'15px'}}>U</p>
                                                        
                                                      </Avatar>
                                                      </Stack>
                                                        ) :
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        column.id === 'Overall_Performance' ? (
                                                         <img src={Meter} style={{width:'60px',paddingLeft:'40px'}}/>
                                                        ) :
                                                        
                                                        
                                                        
                                                        column.id === 'Status' ? (
                                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                              <CustomSwitch
                                                                checked={activeStatuses[index]}
                                                                onChange={() => handleToggleActive(index)}
                                                              />
                                                              <span>{activeStatuses[index] ? 'Active' : 'Deactive'}</span>
                                                            </div>
                                                          ) :  (
                                                            column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value
                                                        )}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
<div>
    
<TablePagination style={{marginTop:'120px'}}
                    rowsPerPageOptions={[4]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
</div>
            </Paper>
        </div>
    );
};
