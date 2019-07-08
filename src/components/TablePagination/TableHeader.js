
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React, { Fragment } from 'react';
import {viewAndApprove,manager} from '../constant/tableconstant'


export default function TableHeader(props) {
    console.log("tableheadprop",props)
    return (
        <TableHead>
            <TableRow>
                <TableCell></TableCell>
                <TableCell>Date of Joining</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Reason for Leave</TableCell>
                <TableCell>ID</TableCell>
                {props.type && props.type.type === manager | props.type.type === viewAndApprove &&
                    <Fragment>
                        <TableCell>Approve</TableCell>
                        <TableCell>Reject</TableCell>
                    </Fragment>
                }
            </TableRow>
        </TableHead>
    )
}
