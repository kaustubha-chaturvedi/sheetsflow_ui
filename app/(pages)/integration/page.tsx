import { AddSheetDialog } from "@/components/collections/add-sheet-dialog";
import { Sheet, SheetTable } from "@/components/collections/sheet-table";
export default function Integration() {
    var sheets: { [key: string]: Sheet } = {
        "1": {
            name: "Sheet 1",
            id: "1"
        },
        "2": {
            name: "Sheet 2",
            id: "2"
        },
        "3": {
            name: "Sheet 3",
            id: "3"
        }
    }
    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Integration</h1>
                <AddSheetDialog sheet={{ name: "", id: "" }} buttonText="Add sheet" buttonVariant="default" buttonSize="default" />
            </div>
            <div className="flex flex-1 justify-center rounded-lg border border-dashed shadow-sm flex-wrap gap-4">
                {Object.keys(sheets).length === 0 && (
                    <div className="flex flex-col items-center gap-1 text-center">
                        <h3 className="text-2xl font-bold tracking-tight">
                            You have no Sheets
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            You can start by adding a new sheet.
                        </p>
                    </div>
                )}

                <SheetTable sheets={sheets} />
            </div>
        </>
    );
}