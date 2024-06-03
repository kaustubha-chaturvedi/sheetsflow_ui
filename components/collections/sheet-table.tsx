import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { AddSheetDialog } from "./add-sheet-dialog";

interface Sheet {
    name: string;
    id: string;
}

function SheetTable({ sheets }: { sheets: { [key: string]: Sheet } }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Worksheet Name</TableHead>
                    <TableHead>Sheet ID</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Object.keys(sheets).map((key) => (
                    <TableRow key={key}>
                        <TableCell>{sheets[key].name}</TableCell>
                        <TableCell>{sheets[key].id}</TableCell>
                        <TableCell className="flex gap-4 justify-end text-right">
                            <AddSheetDialog sheet={sheets[key]} buttonText="Edit" buttonVariant="outline" buttonSize="sm" />
                            <Button variant="default" size="sm">
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export { SheetTable };
export type { Sheet };