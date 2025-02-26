import React from "react";
import { flexRender, getCoreRowModel, useReactTable, getSortedRowModel } from "@tanstack/react-table";

const variants = {
    simple: "bg-white-a700 shadow-xs",
};

const sizes = {
    xs: "py-6",
};

const ReactTable = ({
    columns,
    data = [],
    headerProps = {},
    headerCellProps = {},
    bodyProps = {},
    className = "",
    rowDataProps = { className: "" },
    cellProps = { className: "" },
    size,
    variant,
    ...restProps
}) => {
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        ...restProps,
    });

    return (
        <table className={className}>
            <thead {...headerProps}>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id} {...header.column.columnDef?.meta} {...headerCellProps}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...bodyProps}>
                {table.getRowModel().rows.map((row) => (
                    <tr
                        {...rowDataProps}
                        className={`${variant ? variants[variant] : ""} ${rowDataProps?.className}`}
                        key={row.id}
                    >
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} className={`${size ? sizes[size] : ""} ${cellProps?.className}`}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ReactTable;
