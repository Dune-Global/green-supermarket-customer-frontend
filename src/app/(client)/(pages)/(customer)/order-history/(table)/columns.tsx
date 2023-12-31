"use client"

import { Button } from "@/components/common";
import { OrderHistoryTable } from "@/types";
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<OrderHistoryTable>[] = [
    {
        accessorKey: "orderId",
        header: "ORDER ID",
    },
    {
        accessorKey: "date",
        header: "DATE",
    },
    {
        accessorKey: "total",
        header: "TOTAL",
    },
    {
        accessorKey: "status",
        header: "STATUS",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const item = row.original;
            const itemId = item.orderId;

            return (
                <div>
                    <Button variant={"link"}>View Details</Button>
                </div>
            )
        }
    }
]