
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React, { Fragment } from 'react';


export default function TableHeader(props) {
    console.log("tableheadprop",props)
    return (
        <TableHead>
            <TableRow>
                <TableCell></TableCell>
                <TableCell>No. of expenses</TableCell>
                <TableCell>Person Name</TableCell>
                <TableCell>Reason for Expenses</TableCell>
                <TableCell>ID</TableCell>
                {props.type && props.type.type === 'Manager' &&
                    <Fragment>
                        <TableCell>View</TableCell>
                        <TableCell>Approve</TableCell>
                    </Fragment>
                }
            </TableRow>
        </TableHead>
    )
}
